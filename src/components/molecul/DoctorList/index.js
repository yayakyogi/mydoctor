import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import {ICChevronRight} from '../../../assets';

const DoctorList = ({image, name, gender, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.wrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.gender}>{gender}</Text>
      </View>
      <ICChevronRight />
    </TouchableOpacity>
  );
};

export default DoctorList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  wrapper: {flex: 1, marginLeft: 12},
  image: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.REG,
    color: colors.text.primary,
  },
  gender: {
    fontSize: 12,
    fontFamily: fonts.primary.LGT,
    color: colors.text.secondary,
  },
});
