import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ICStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorRating = ({image, name, profession}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{profession}</Text>
      </View>
      <View style={styles.rating}>
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
      </View>
    </View>
  );
};

export default DoctorRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {width: 50, height: 50, borderRadius: 50 / 2},
  profile: {marginLeft: 12, flex: 1},
  rating: {flexDirection: 'row'},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.SMB,
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary.REG,
    color: colors.text.secondary,
  },
});
