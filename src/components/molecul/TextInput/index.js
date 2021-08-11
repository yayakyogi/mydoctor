import React from 'react';
import {StyleSheet, Text, View, TextInput as InputText} from 'react-native';

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
    borderColor: '#E9E9E9',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 6,
  },
  label: {fontSize: 16, fontFamily: 'Nunito-Regular', color: '#7D8797'},
});
