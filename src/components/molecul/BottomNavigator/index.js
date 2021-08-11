import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TabBar} from '../../atom';
import {colors} from '../../../utils';

const BottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBar
            key={index}
            title={label}
            onPress={onPress}
            onLongPress={onLongPress}
            active={isFocused}
          />
          // <TouchableOpacity
          //   accessibilityRole="button"
          //   accessibilityState={isFocused ? {selected: true} : {}}
          //   accessibilityLabel={options.tabBarAccessibilityLabel}
          //   testID={options.tabBarTestID}
          //   onPress={onPress}
          //   onLongPress={onLongPress}
          //   style={{flex: 1}}>
          //   <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          // </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.buttonTab,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 53,
    paddingVertical: 12,
  },
});
