import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {colors, fonts} from '../../utils';
import {ListHospital} from '../../components';
import {
  DMImgHospital1,
  DMImgHospital2,
  DMImgHospital3,
  DMImgHospital4,
} from '../../assets';

const Hospital = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={DMImgHospital1} style={styles.bgImage}>
        <Text style={styles.nearbyHospital}>Nearby Hospital</Text>
        <Text style={styles.available}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ListHospital
            image={DMImgHospital2}
            name="Rumah Sakit Citra Bunga Merdeka"
            address="Jln. Surya Sejahtera 20"
          />
          <ListHospital
            image={DMImgHospital3}
            name="Rumah Sakit Anak Happy Family & Kids"
            address="Jln. Surya Sejahtera 20"
          />
          <ListHospital
            image={DMImgHospital4}
            name="Rumah Sakit Jiwa Tingkatan Paling Atas"
            address="Jln. Surya Sejahtera 20"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Hospital;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.secondary},
  content: {
    flex: 2,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -15,
    paddingTop: 20,
  },
  bgImage: {flex: 1},
  nearbyHospital: {
    fontSize: 20,
    fontFamily: fonts.primary.SMB,
    color: colors.white,
    textAlign: 'center',
    marginTop: 30,
  },
  available: {
    fontSize: 14,
    fontFamily: fonts.primary.LGT,
    color: colors.white,
    textAlign: 'center',
    marginTop: 6,
  },
});
