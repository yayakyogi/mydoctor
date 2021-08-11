import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';

const News = ({title, post, image}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.post}>{post}</Text>
      </View>
      <Image source={image} style={styles.image} />
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginHorizontal: -12,
  },
  image: {width: 80, height: 60, borderRadius: 11},
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.SMB,
    color: colors.text.primary,
    maxWidth: 210,
  },
  post: {
    fontSize: 12,
    fontFamily: fonts.primary.REG,
    color: colors.text.secondary,
    marginTop: 4,
  },
});
