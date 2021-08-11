import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {colors} from '../../utils';
import {DMImgUser, ICBtnDelPhoto, ICBtnAddPhoto} from '../../assets';
import {HeaderTitle, Gap, TextInput, Button} from '../../components';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderTitle
        title="Edit Profile"
        type="icon-only"
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.wrapperContent}>
            <View style={styles.wrapper}>
              <Image source={DMImgUser} style={styles.image} />
              <ICBtnDelPhoto style={styles.btnAction} />
            </View>
          </View>
          <Gap height={26} />
          <TextInput label="Full name" value="Shayna Melinda" />
          <Gap height={24} />
          <TextInput label="Pekerjaan" value="Product Designer" />
          <Gap height={24} />
          <TextInput
            label="Email Address"
            value="ashayna@google.com"
            editable={false}
          />
          <Gap height={24} />
          <TextInput
            label="Email Address"
            value="ashayna@google.com"
            secureTextEntry={true}
          />
          <Gap height={40} />
          <Button title="Save Profile" />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  content: {padding: 40},
  wrapper: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  wrapperContent: {alignItems: 'center'},
  image: {width: 110, height: 110, borderRadius: 110 / 2},
  btnAction: {position: 'absolute', bottom: 2, right: 4},
});
