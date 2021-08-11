import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeaderListDoctor, DoctorList, Gap} from '../../components';
import {colors, fonts} from '../../utils';
import {
  DMImgDoctor1,
  DMImgDoctor2,
  DMImgDoctor5,
  DMImgDoctor7,
  DMImgDoctor8,
} from '../../assets';

const ListDoctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderListDoctor onPress={() => navigation.goBack()} category="Anak" />
      <Gap height={20} />
      <DoctorList
        image={DMImgDoctor1}
        name="Alexander Jannie"
        gender="Wanita"
      />
      <DoctorList image={DMImgDoctor2} name="Alexander Jannie" gender="Pria" />
      <DoctorList
        image={DMImgDoctor7}
        name="Nairobi Putri Hayza"
        gender="Wanita"
        onPress={() => navigation.navigate('DoctorProfile')}
      />
      <DoctorList image={DMImgDoctor8} name="James Rivillia" gender="Pria" />
      <DoctorList
        image={DMImgDoctor5}
        name="Liu Yue Tian Park"
        gender="Wanita"
      />
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});
