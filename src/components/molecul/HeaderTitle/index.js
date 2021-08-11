import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ICBack} from '../../../assets';

const HeaderTitle = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ICBack />
      </TouchableOpacity>
      <Text style={styles.title}>HeaderTitle</Text>
      <View />
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    paddingHorizontal: 20,
  },
  title: {fontSize: 20, fontFamily: 'Nunito-SemiBold'},
});
