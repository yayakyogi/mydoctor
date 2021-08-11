import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ICBackDark, ICBackLight, ICChevronRight} from '../../../assets';

const IconOnly = ({icon, onPress}) => {
  const Icon = () => {
    if (icon === 'ic_backDark') {
      return <ICBackDark />;
    } else if (icon === 'ic_backLight') {
      return <ICBackLight />;
    } else if (icon === 'ic_chevronRight') {
      return <ICChevronRight />;
    }
    return <ICBackDark />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
