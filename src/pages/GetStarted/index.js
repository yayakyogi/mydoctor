import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILLogo, ILBackground} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILBackground} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Gap height={16} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.primary.SMB,
    color: colors.white,
    marginTop: 91,
  },
});
