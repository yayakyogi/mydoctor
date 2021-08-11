import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const ListMessage = ({image, name, message, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListMessage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {marginLeft: 12},
  image: {width: 45, height: 45, borderRadius: 45 / 2},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.REG,
    color: colors.text.primary,
  },
  message: {
    fontSize: 12,
    fontFamily: fonts.primary.LGT,
    color: colors.text.secondary,
  },
});
