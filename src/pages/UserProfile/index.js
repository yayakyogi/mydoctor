import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {HeaderTitle, ListMenu, Gap} from '../../components';
import {
  DMImgUser,
  ICAccountUser,
  ICTransalate,
  ICStartRate,
  ICHelpCenter,
} from '../../assets';
import {colors, fonts} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderTitle
        title="Upload Photo"
        type="icon-only"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.userInfo}>
        <View style={styles.imageCircle}>
          <Image source={DMImgUser} style={styles.image} />
        </View>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
      <Gap height={30} />
      <View style={styles.wrapListMenu}>
        <ListMenu
          icon={<ICAccountUser />}
          label="Edit Profile"
          description="Last Updated Yesterday"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <ListMenu
          icon={<ICTransalate />}
          label="Language"
          description="Available 12 languages"
        />
        <ListMenu
          icon={<ICStartRate />}
          label="Give Us Rate"
          description="On Google Play Store"
        />
        <ListMenu
          icon={<ICHelpCenter />}
          label="Help Center"
          description="Read our guidelines"
        />
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  image: {width: 110, height: 110, borderRadius: 110 / 2},
  userInfo: {alignItems: 'center', flex: 1},
  wrapListMenu: {flex: 2},
  imageCircle: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 40,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary.SMB,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 2,
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary.REG,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
