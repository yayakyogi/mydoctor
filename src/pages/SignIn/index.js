import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ILLogo} from '../../assets';
import {TextInput, Gap, Button, Link} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
      <Gap height={40} />
      <TextInput label="Email Address" />
      <Gap height={24} />
      <TextInput label="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link
        title="Create New Account"
        size={18}
        onPress={() => navigation.navigate('SignUp')}
        align="center"
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', padding: 40},
  text: {
    fontSize: 25,
    fontFamily: 'Nunito-SemiBold',
    marginTop: 40,
  },
  createAccount: {
    fontSize: 18,
    color: '#7D8797',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
