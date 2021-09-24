import React, {useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {ILLogo} from '../../assets';
import {colors, fonts} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} />
      <ILLogo />
      <Text style={styles.text}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.primary.SMB,
    color: colors.text.primary,
    marginTop: 20,
  },
});
