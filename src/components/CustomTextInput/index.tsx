import React, {ComponentProps} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

interface CustomTextInputProps extends ComponentProps<typeof TextInput> {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  onChangeText,
  ...props
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    maxWidth: 300,
  },
  input: {
    backgroundColor: 'transparent',
    height: 30,
    paddingBottom: 5,
  },
});
