import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Button} from '../../atom';
import {colors, fonts} from '../../../utils';

const HeaderTitle = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="ic_backDark" onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary.SMB,
    color: colors.text.primary,
  },
});
