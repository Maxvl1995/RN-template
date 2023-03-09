import React from 'react';
import styles from './styles';
import {View, TextInput as RNTextInput, StyleSheet} from 'react-native';
import {ITextInputProps} from './types';

const TextInput = (props: ITextInputProps) => {
  const {containerStyles, textInputStyles, leftIcon, rightIcon} = props;

  return (
    <View style={containerStyles}>
      {leftIcon}
      <RNTextInput
        autoCorrect={false}
        autoCapitalize={'none'}
        {...props}
        style={StyleSheet.flatten([styles.input, textInputStyles])}
      />
      {rightIcon}
    </View>
  );
};

export default React.memo(TextInput);
