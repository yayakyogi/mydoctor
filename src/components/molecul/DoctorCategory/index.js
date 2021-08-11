import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const DoctorCategory = ({icon, category, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon}
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    marginRight: 10,
    width: 110,
    height: 130,
    padding: 12,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary.LGT,
    color: colors.text.primary,
    marginTop: 28,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary.SMB,
    color: colors.text.primary,
  },
});
