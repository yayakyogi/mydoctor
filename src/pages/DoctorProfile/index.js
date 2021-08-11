import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Detail, Button, HeaderTitle} from '../../components';
import {colors, fonts} from '../../utils';
import {DMImgDoctor7, ICMale, ICFemale} from '../../assets';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderTitle
        title="Profile"
        type="icon-only"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.wrapContent}>
        <View style={styles.wrapProfile}>
          <Image source={DMImgDoctor7} style={styles.image} />
          <ICFemale style={styles.btnAction} />
        </View>
        <Text style={styles.name}>Nairobi Putri Hayza</Text>
        <Text style={styles.profession}>Dokter Anak</Text>
      </View>
      <Detail label="Alumnus" detail="Universitas Indonesia, 2020" />
      <Detail label="Tempat Praktik" detail="Rumah Sakit Umum, Bandung" />
      <Detail label="No. STR" detail="0000116622081996" />
      <View style={styles.wrapButton}>
        <Button title="Start Consultation" />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  wrapButton: {paddingHorizontal: 40, marginTop: 25},
  wrapContent: {alignItems: 'center'},
  wrapProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {width: 110, height: 110, borderRadius: 110 / 2},
  btnAction: {position: 'absolute', bottom: 8, right: 6},
  name: {
    fontSize: 20,
    fontFamily: fonts.primary.SMB,
    color: colors.text.primary,
    marginTop: 16,
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary.REG,
    color: colors.text.secondary,
    marginBottom: 26,
  },
});
