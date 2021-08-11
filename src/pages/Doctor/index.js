import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  Gap,
  DoctorRating,
  DoctorCategory,
  UserInfo,
  News,
} from '../../components';
import {
  DMImgUser,
  DMImgDoctor1,
  DMImgDoctor2,
  DMImgDoctor3,
  DMImgNews1,
  DMImgNews2,
  DMImgNews3,
  ICDokterUmum,
  ICDokterPsikiater,
  ICDokterObat,
  ICDokterAnak,
} from '../../assets';
import {colors, fonts} from '../../utils';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperContent}>
            <Gap height={30} />
            <UserInfo
              image={DMImgUser}
              name="Shayna Melinda"
              profession="Product Designer"
              onPress={() => navigation.navigate('UserProfile')}
            />
            <Gap height={30} />
            <Text style={styles.title}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
            <Gap height={16} />
          </View>
          <View style={styles.cardWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                <DoctorCategory
                  icon={<ICDokterUmum />}
                  category="dokter umum"
                />
                <DoctorCategory
                  icon={<ICDokterPsikiater />}
                  category="dokter psikiater"
                />
                <DoctorCategory
                  icon={<ICDokterObat />}
                  category="dokter obat"
                />
                <DoctorCategory
                  icon={<ICDokterAnak />}
                  category="dokter anak"
                  onPress={() => navigation.navigate('ListDoctor')}
                />
                <Gap width={16} />
              </View>
            </ScrollView>
          </View>
          <Gap height={30} />
          <View style={styles.wrapperContent}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <DoctorRating
              image={DMImgDoctor1}
              name="Alexa Rachel"
              profession="Pediatrician"
            />
            <DoctorRating
              image={DMImgDoctor2}
              name="Sunny Frank"
              profession="Dentist"
            />
            <DoctorRating
              image={DMImgDoctor3}
              name="Poe Minn"
              profession="Pediatrician"
            />
            <Gap height={30} />
            <Text style={styles.sectionLabel}>Good News</Text>
            <News
              image={DMImgNews1}
              title="Is it safe to stay at home during coronavirus?"
              post="Today"
            />
            <News
              image={DMImgNews2}
              title="Consume yellow citrus helps you healthier"
              post="Today"
            />
            <News
              image={DMImgNews3}
              title="Learn how to make a proper orange juice at home"
              post="Today"
            />
            <Gap height={30} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  wrapperContent: {paddingHorizontal: 16},
  title: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary.SMB,
    maxWidth: 290,
  },
  category: {
    flexDirection: 'row',
  },
  cardWrapper: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary.SMB,
    color: colors.text.primary,
    marginBottom: 16,
  },
});
