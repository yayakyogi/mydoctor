import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';

const ListHospital = ({image, name, address}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {marginLeft: 12},
  image: {width: 80, height: 60, borderRadius: 10},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.REG,
    color: colors.text.primary,
    maxWidth: 200,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary.LGT,
    color: colors.text.secondary,
    marginTop: 4,
  },
});
