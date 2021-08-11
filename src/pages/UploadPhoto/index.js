import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {HeaderTitle, Button, Link, Gap} from '../../components';
import {ILUserPhotoNull, ICBtnAddPhoto} from '../../assets';
import {colors, fonts} from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderTitle
        title="Upload Photo"
        type="icon-only"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.wrapper}>
        <View style={styles.wrapperPhoto}>
          <View style={styles.viewPhoto}>
            <Image source={ILUserPhotoNull} style={styles.uploadPhoto} />
            <ICBtnAddPhoto style={styles.btnAddPhoto} />
          </View>
          <Gap height={26} />
          <Text style={styles.name}>Shayna Melinda</Text>
          <Gap height={4} />
          <Text style={styles.position}>Product Designer</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link title="Skip for this" align="center" size={16} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 40,
    paddingBottom: 64,
  },
  wrapperPhoto: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  viewPhoto: {
    width: 130,
    height: 130,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 130 / 2,
  },
  uploadPhoto: {
    width: 110,
    height: 110,
  },
  btnAddPhoto: {position: 'absolute', bottom: 8, right: 6},
  name: {
    fontSize: 24,
    fontFamily: fonts.primary.SMD,
    color: colors.text.primary,
  },
  position: {
    fontSize: 18,
    fontFamily: fonts.primary.REG,
    color: colors.text.secondary,
  },
});
