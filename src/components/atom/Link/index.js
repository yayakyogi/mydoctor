import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const Link = ({title, size, onPress, align}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.forgotPassword(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  forgotPassword: (size, align) => ({
    fontSize: size,
    fontFamily: fonts.primary.REG,
    textAlign: align,
    color: colors.text.secondary,
    textDecorationLine: 'underline',
  }),
});
