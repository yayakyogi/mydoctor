import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';

const UserInfo = ({image, name, profession, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{profession}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  userInfo: {marginLeft: 12},
  image: {width: 46, height: 46, borderRadius: 46 / 2},
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
