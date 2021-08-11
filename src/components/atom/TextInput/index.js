import React from 'react';
import {StyleSheet, Text, View, TextInput as InputText} from 'react-native';
import {colors, fonts} from '../../../utils';

const TextInput = ({label, onPress, labelLink, ...restprops}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <InputText style={styles.textInput} {...restprops} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    marginTop: 6,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary.REG,
    color: colors.text.secondary,
  },
});
