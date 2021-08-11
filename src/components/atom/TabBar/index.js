import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ICDoctor,
  ICMessage,
  ICHospital,
  ICDoctorActive,
  ICMessageActive,
  ICHospitalActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabBar = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <ICDoctorActive /> : <ICDoctor />;
    } else if (title === 'Message') {
      return active ? <ICMessageActive /> : <ICMessage />;
    } else if (title === 'Hospital') {
      return active ? <ICHospitalActive /> : <ICHospital />;
    }
    return <ICDoctor />;
  };
  return (
    <TouchableOpacity
      style={styles.btnTab}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  btnTab: {alignItems: 'center'},
  text: active => ({
    fontSize: 10,
    marginTop: 4,
    fontFamily: fonts.primary.SMB,
    color: active ? colors.text.menuActive : colors.text.menuInActive,
  }),
});
