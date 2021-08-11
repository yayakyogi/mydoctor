import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderTitle, Gap, Button, TextInput} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderTitle title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.wrapper}>
        <TextInput label="Full Name" />
        <Gap height={24} />
        <TextInput label="Pekerjaan" />
        <Gap height={24} />
        <TextInput label="Email Address" />
        <Gap height={24} />
        <TextInput label="Password" />
        <Gap height={40} />
        <Button title="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  wrapper: {padding: 40, paddingTop: 0},
});
