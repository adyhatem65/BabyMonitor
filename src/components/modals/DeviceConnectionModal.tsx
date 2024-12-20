import React, {FC, useCallback} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {Device} from 'react-native-ble-plx';
import {COLORS, fontFamily, FONTS, hp, SPACINGS, wp} from '../../utils';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';

type DeviceModalListItemProps = {
  item: ListRenderItemInfo<Device>;
  connectToPeripheral: (device: Device) => void;
  closeModal: () => void;
};

type DeviceModalProps = {
  devices: Device[];
  visible: boolean;
  connectToPeripheral: (device: Device) => void;
  closeModal: () => void;
};

const DeviceModalListItem: FC<DeviceModalListItemProps> = props => {
  const {item, connectToPeripheral, closeModal} = props;

  const connectAndCloseModal = useCallback(() => {
    connectToPeripheral(item.item);
    closeModal();
  }, [closeModal, connectToPeripheral, item.item]);

  return (
    <TouchableOpacity onPress={connectAndCloseModal} style={styles.ctaButton}>
      <View style={styles.rowView}>
        <Octicons
          name="device-mobile"
          color={COLORS.BLACK}
          size={FONTS.FONT_20}
        />
        <View style={{width: wp('65%')}}>
          <Text style={styles.ctaButtonText} numberOfLines={1}>
            {item.item.name ?? 'Device'}
          </Text>
        </View>
      </View>
      <View style={styles.circleView}>
        <Feather
          name="chevron-right"
          color={COLORS.BLACK}
          size={FONTS.FONT_16}
        />
      </View>
    </TouchableOpacity>
  );
};

const DeviceModal: FC<DeviceModalProps> = props => {
  const {devices, visible, connectToPeripheral, closeModal} = props;

  console.log(JSON.stringify(devices));
  const renderDeviceModalListItem = useCallback(
    (item: ListRenderItemInfo<Device>) => {
      return (
        <DeviceModalListItem
          item={item}
          connectToPeripheral={connectToPeripheral}
          closeModal={closeModal}
        />
      );
    },
    [closeModal, connectToPeripheral],
  );

  return (
    <Modal
      style={styles.modalContainer}
      animationType="slide"
      transparent={false}
      visible={visible}
      statusBarTranslucent
      onRequestClose={closeModal}>
      <SafeAreaView style={styles.modalContent}>
        <Text style={styles.modalTitleText}>Tap on a device to connect</Text>
        <FlatList
          // contentContainerStyle={styles.modalFlatlistContiner}
          data={devices}
          renderItem={renderDeviceModalListItem}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.MORE_LIGHT_GRAY,
  },
  // modalFlatlistContiner: {
  //   flex: 1,
  // },
  modalContent: {
    flex: 1,
    backgroundColor: COLORS.MORE_LIGHT_GRAY,
    paddingTop: SPACINGS.GENERAL_SPACE,
  },
  modalTitleText: {
    fontSize: FONTS.FONT_20,
    textAlign: 'center',
    margin: SPACINGS.GENERAL_SPACE,
    fontFamily: fontFamily.bold,
  },
  ctaButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    height: hp(7),
    minHeight: 40,
    marginHorizontal: SPACINGS.GENERAL_SPACE,
    marginBottom: SPACINGS.SMALL_SPACE,
    borderRadius: 10,
    paddingHorizontal: SPACINGS.GENERAL_SPACE,
    elevation: 0.5,
    justifyContent: 'space-between',
  },
  ctaButtonText: {
    fontSize: FONTS.FONT_17,
    fontFamily: fontFamily.medium,
    color: COLORS.BLACK,
    marginLeft: SPACINGS.GENERAL_SPACE,
  },
  circleView: {
    width: hp(3.5),
    height: hp(3.5),
    minWidth: 25,
    minHeight: 25,
    borderRadius: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.MORE_LIGHT_GRAY,
    right: 0,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DeviceModal;
