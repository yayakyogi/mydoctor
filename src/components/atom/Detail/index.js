import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Detail = ({label, detail}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.detail}>{detail}</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {padding: 16, borderBottomWidth: 1, borderColor: colors.border},
  label: {
    marginBottom: 6,
    fontSize: 14,
    fontFamily: fonts.primary.REG,
    color: colors.text.secondary,
  },
  detail: {
    fontSize: 14,
    fontFamily: fonts.primary.REG,
    color: colors.text.primary,
  },
});
