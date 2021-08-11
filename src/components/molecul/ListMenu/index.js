import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import {ICChevronRight} from '../../../assets';

const ListMenu = ({icon, label, description, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon}
      <View style={styles.wrapper}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <ICChevronRight />
    </TouchableOpacity>
  );
};

export default ListMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  wrapper: {flex: 1, marginLeft: 16},
  label: {
    fontSize: 16,
    fontFamily: fonts.primary.REG,
    color: colors.text.primary,
  },
  description: {
    fontSize: 12,
    fontFamily: fonts.primary.LGT,
    color: colors.text.secondary,
  },
});
