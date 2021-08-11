import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListMessage, Gap} from '../../components';
import {colors, fonts} from '../../utils';
import {DMImgDoctor4, DMImgDoctor5, DMImgDoctor6} from '../../assets';

const Message = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.contentWrapper}>
            <Gap height={30} />
            <Text style={styles.title}>Message</Text>
            <Gap height={16} />
          </View>
          <ListMessage
            image={DMImgDoctor4}
            name="Alexander Jannie"
            message="Baik ibu, terima kasih banyak atas wakt..."
          />
          <ListMessage
            image={DMImgDoctor5}
            name="Nairobi Putri Hayza"
            message="Oh tentu saja tidak karena jeruk it..."
          />
          <ListMessage
            image={DMImgDoctor6}
            name="John McParker Steve"
            message="Oke menurut pak dokter bagaimana unt..."
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.secondary},
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  contentWrapper: {paddingHorizontal: 16},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary.SMB,
    color: colors.text.primary,
  },
});
