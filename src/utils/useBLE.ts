import {useMemo, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {
  BleError,
  BleManager,
  Characteristic,
  Device,
} from 'react-native-ble-plx';

import DeviceInfo from 'react-native-device-info';

const SERVICE_UUID = '296a1e1e-1306-47de-9a81-9a65b247624a';
const CHARACTERISTIC_UUID = '938aed9d-4179-42ec-bbe3-c1b92d13c1bd';

interface BluetoothLowEnergyApi {
  requestPermissions(): Promise<boolean>;
  scanForPeripherals(): void;
  connectToDevice: (deviceId: Device) => Promise<void>;
  disconnectFromDevice: () => void;
  connectedDevice: Device | null;
  allDevices: Device[];
  heartRate: number;
  babyTemperature: number;
  roomTemperature: number;
  humidity: number;
  babyCryStatus: string | null;
}

type dataType = {
  prediction:
    | 'belly_pain'
    | 'burping'
    | 'discomfort'
    | 'hungry'
    | 'noise'
    | 'tired';
  sensors: {
    room_temperature: number;
    humidity: number;
    child_temperature: number;
    heart_rate: number;
  };
};

function useBLE(): BluetoothLowEnergyApi {
  const bleManager = useMemo(() => new BleManager(), []);
  const [allDevices, setAllDevices] = useState<Device[]>([]);
  const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);
  const [heartRate, setHeartRate] = useState<number>(0);
  const [babyTemperature, setBabyTemperature] = useState<number>(0);
  const [roomTemperature, setRoomTemperature] = useState<number>(0);
  const [humidity, setHumidity] = useState<number>(0);
  const [babyCryStatus, setBabyCryStatus] = useState<string | null>(null);

  const requestAndroid31Permissions = async () => {
    const bluetoothScanPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      {
        title: 'Location Permission',
        message: 'Bluetooth Low Energy requires Location',
        buttonPositive: 'OK',
      },
    );
    const bluetoothConnectPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      {
        title: 'Location Permission',
        message: 'Bluetooth Low Energy requires Location',
        buttonPositive: 'OK',
      },
    );
    const fineLocationPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'Bluetooth Low Energy requires Location',
        buttonPositive: 'OK',
      },
    );

    return (
      bluetoothScanPermission === 'granted' &&
      bluetoothConnectPermission === 'granted' &&
      fineLocationPermission === 'granted'
    );
  };

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      const apiLevel = await DeviceInfo.getApiLevel();
      if (apiLevel < 31) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'Bluetooth Low Energy requires Location',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        const isAndroid31PermissionsGranted =
          await requestAndroid31Permissions();

        return isAndroid31PermissionsGranted;
      }
    } else {
      return true;
    }
  };

  const isDuplicateDevice = (devices: Device[], nextDevice: Device) =>
    devices.findIndex(device => nextDevice.id === device.id) > -1;

  const scanForPeripherals = () =>
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log(error);
      }
      if (device) {
        setAllDevices((prevState: Device[]) => {
          if (!isDuplicateDevice(prevState, device)) {
            return [...prevState, device];
          }
          return prevState;
        });
      }
    });

  const connectToDevice = async (device: Device) => {
    try {
      const deviceConnection = await bleManager.connectToDevice(device.id);
      setConnectedDevice(deviceConnection);
      await deviceConnection.discoverAllServicesAndCharacteristics();
      bleManager.stopDeviceScan();
      startStreamingData(deviceConnection);
    } catch (e) {
      console.log('FAILED TO CONNECT', e);
    }
  };

  const disconnectFromDevice = () => {
    if (connectedDevice) {
      bleManager.cancelDeviceConnection(connectedDevice.id);
      setConnectedDevice(null);
      setHeartRate(0);
    }
  };

  const onHeartRateUpdate = (
    error: BleError | null,
    characteristic: Characteristic | null,
  ) => {
    if (error) {
      console.log('ERROR ===================== ', error);
      return -1;
    } else if (!characteristic?.value) {
      console.log('No Data was received');
      return -1;
    }

    // const rawData = atob(characteristic.value);
    // console.log(
    //   'Raw data ================================== ',
    //   characteristic.value,
    // );
    // let innerHeartRate: number = -1;

    // const firstBitValue: number = Number(rawData) & 0x01;

    // if (firstBitValue === 0) {
    //   innerHeartRate = rawData[1].charCodeAt(0);
    // } else {
    //   innerHeartRate =
    //     Number(rawData[1].charCodeAt(0) << 8) +
    //     Number(rawData[2].charCodeAt(2));
    // }

    const defaultData = {
      prediction: 'hungry',
      sensors: {
        room_temperature: 0,
        humidity: 0,
        child_temperature: 0,
        heart_rate: 0,
      },
    };

    const data: dataType = characteristic.value
      ? JSON.parse(characteristic.value)
      : defaultData;
    console.log('data   ============    ', data);

    setHeartRate(data.sensors.heart_rate);
    setHumidity(data.sensors.humidity);
    setRoomTemperature(data.sensors.room_temperature);
    setBabyTemperature(data.sensors.child_temperature);
    setBabyCryStatus(data.prediction);
  };

  const startStreamingData = async (device: Device) => {
    if (device) {
      // const characteristics = await device.characteristicsForService(
      //   device?.serviceUUIDs ? device.serviceUUIDs[0] : SERVICE_UUID,
      // );
      // const characteristicUUID =
      //   characteristics?.length > 0
      //     ? characteristics[0].uuid
      //     : CHARACTERISTIC_UUID;
      // console.log('characteristicUUID ==> ', characteristicUUID);

      device.monitorCharacteristicForService(
        // device?.serviceUUIDs ? device.serviceUUIDs[0] : SERVICE_UUID,
        SERVICE_UUID,
        CHARACTERISTIC_UUID,
        onHeartRateUpdate,
      );
    } else {
      console.log('No Device Connected');
    }
  };

  return {
    scanForPeripherals,
    requestPermissions,
    connectToDevice,
    allDevices,
    connectedDevice,
    disconnectFromDevice,
    heartRate,
    babyTemperature,
    roomTemperature,
    humidity,
    babyCryStatus,
  };
}

export default useBLE;
