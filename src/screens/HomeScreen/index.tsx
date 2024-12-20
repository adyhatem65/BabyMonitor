import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {Button, Card, DeviceModal, ScreenContainer} from '../../components';
import {COLORS, FONTS, IMAGES, useBLE, useTTS} from '../../utils';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  // ble manager
  const {
    requestPermissions,
    scanForPeripherals,
    allDevices,
    connectToDevice,
    connectedDevice,
    heartRate,
    babyTemprature,
    roomTemprature,
    humidity,
    // disconnectFromDevice,
  } = useBLE();
  // TTS
  const {initializeTtsListeners, playAlert} = useTTS();
  // States
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  useEffect(() => {
    initializeTtsListeners();

    if (connectedDevice) {
      playAlert(heartRate, babyTemprature);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heartRate, babyTemprature, connectedDevice]);

  const scanForDevices = async () => {
    const isPermissionsEnabled = await requestPermissions();
    if (isPermissionsEnabled) {
      scanForPeripherals();
    }
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const openModal = async () => {
    scanForDevices();
    setIsModalVisible(true);
  };

  return (
    <ScreenContainer>
      {/* All available devices will be shown here */}
      <View style={styles.headerStyle}>
        <Image
          source={IMAGES.avatar}
          resizeMode="contain"
          style={styles.avatarStyle}
        />
        <View style={styles.headerTextWrapperStyle}>
          <Text style={styles.helloTextStyle}>Hello,</Text>
          <Text style={styles.nameStyle}>Baby Mother</Text>
        </View>
      </View>

      {connectedDevice ? (
        <View style={styles.dataWrapperViewStyle}>
          <Text style={styles.deviceNameStyle}>
            Baby's bed: {connectedDevice.name}
          </Text>
          <View style={styles.cardsRowStyle}>
            <Card
              type="heart"
              title="Heart Rate"
              icon={
                <AntDesign
                  name="heart"
                  color={COLORS.RED}
                  size={FONTS.FONT_20}
                />
              }
              image={IMAGES.heartRate}
              value={heartRate}
            />
            <Card
              type="temprature"
              title="Baby Temp"
              icon={
                <FontAwesome5
                  name="temperature-high"
                  color={COLORS.ORANGE}
                  size={FONTS.FONT_20}
                />
              }
              image={IMAGES.temprature}
              value={babyTemprature}
            />
          </View>
          <View style={styles.cardsRowStyle}>
            <Card
              type="temprature"
              title="Room Temp"
              icon={
                <FontAwesome5
                  name="temperature-high"
                  color={COLORS.ORANGE}
                  size={FONTS.FONT_20}
                />
              }
              image={IMAGES.temprature}
              value={roomTemprature}
            />
            <Card
              type="humidity"
              title="Humidity"
              icon={
                <Ionicons
                  name="water"
                  color={COLORS.PRIMARY}
                  size={FONTS.FONT_23}
                />
              }
              image={IMAGES.humidity}
              value={humidity}
            />
          </View>
        </View>
      ) : (
        <View style={styles.contentWrapperStyle}>
          <Text style={styles.noDevicesTextStyle}>
            Please connect to your baby's bed
          </Text>
        </View>
      )}

      {/* Scan for devices button */}
      <View style={styles.buttonWarpperStyle}>
        <Button
          text={'See available devices'}
          style={styles.buttonStyle}
          onPress={openModal}
        />
      </View>
      <DeviceModal
        closeModal={hideModal}
        visible={isModalVisible}
        connectToPeripheral={connectToDevice}
        devices={allDevices}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;
