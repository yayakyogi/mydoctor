import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../atom';
import {colors, fonts} from '../../../utils';

const HeaderListDoctor = ({onPress, category}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="ic_backLight" onPress={onPress} />
      <Text style={styles.label}>Pilih Dokter {category}</Text>
      <Gap width={24} />
    </View>
  );
};

export default HeaderListDoctor;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: colors.secondary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {fontSize: 20, fontFamily: fonts.primary.SMB, color: colors.white},
});
