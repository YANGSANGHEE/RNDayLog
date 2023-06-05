import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TransParentCircleButton from './TransParentCircleButton';

const WriteHeader = () => {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.pop();
  };
  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <TransParentCircleButton
          name="arrow-back"
          onPress={onGoBack}
          color="#424242"
        />
      </View>
      <View style={styles.buttons}>
        <TransParentCircleButton
          name="delete-forever"
          color="#ef5350"
          hasMarginRight
        />
        <TransParentCircleButton name="check" color="#ef5350" hasMarginRight />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default WriteHeader;
