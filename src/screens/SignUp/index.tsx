import React from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

import {
  emailValidationRules,
  nameValidationRules,
  passwordValidationRules,
  usernameValidationRules,
} from '../../utils/validation-rules';
import CustomTextInput from '../../components/CustomTextInput';
import LoginRegisterContainer from '../../components/LoginRegisterContainer';

function SignUp(): React.JSX.Element {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data: any) => {
    console.log('### data', data);
  };

  return (
    <LoginRegisterContainer title="Habitracker SignUp">
      <View style={styles.inputView}>
        <Controller
          control={control}
          rules={nameValidationRules}
          render={({field: {onChange, value}}) => (
            <CustomTextInput
              value={value}
              label="Enter Name"
              onChangeText={onChange}
              error={!!errors.name?.message}
              errorMsg={errors.name?.message?.toString() ?? ''}
            />
          )}
          name="name"
        />
      </View>
      <View style={styles.inputView}>
        <Controller
          control={control}
          rules={emailValidationRules}
          render={({field: {onChange, value}}) => (
            <CustomTextInput
              value={value}
              label="Enter Email"
              onChangeText={onChange}
              error={!!errors.email?.message}
              errorMsg={errors.email?.message?.toString() ?? ''}
            />
          )}
          name="email"
        />
      </View>
      <View style={styles.inputView}>
        <Controller
          control={control}
          rules={usernameValidationRules}
          render={({field: {onChange, value}}) => (
            <CustomTextInput
              value={value}
              label="Enter Username"
              onChangeText={onChange}
              error={!!errors.username?.message}
              errorMsg={errors.username?.message?.toString() ?? ''}
            />
          )}
          name="username"
        />
      </View>
      <View style={styles.inputView}>
        <Controller
          control={control}
          rules={passwordValidationRules}
          render={({field: {onChange, value}}) => (
            <CustomTextInput
              value={value}
              label="Enter Password"
              onChangeText={onChange}
              secureTextEntry
              error={!!errors.password?.message}
              errorMsg={errors.password?.message?.toString() ?? ''}
            />
          )}
          name="password"
        />
      </View>
      <Button
        mode="contained"
        style={styles.loginButtonStyle}
        onPress={handleSubmit(onSubmit)}>
        Register
      </Button>
      <Button
        style={styles.loginRegisterSection}
        onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
      </Button>
    </LoginRegisterContainer>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  inputView: {
    marginTop: 10,
  },
  loginButtonStyle: {
    marginTop: 20,
  },
  loginRegisterSection: {
    marginTop: 10,
  },
});
