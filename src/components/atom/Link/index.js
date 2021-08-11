import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

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
    textAlign: align,
    color: '#7D8797',
    textDecorationLine: 'underline',
  }),
});
