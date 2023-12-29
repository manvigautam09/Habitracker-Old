import React from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import CustomTextInput from '../../components/CustomTextInput';
import LoginRegisterContainer from '../../components/LoginRegisterContainer';

function Login(): React.JSX.Element {
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
    <LoginRegisterContainer title="Habitracker Login">
      <View style={styles.inputView}>
        <Controller
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          render={({field}) => (
            <CustomTextInput
              value={field.value}
              onChangeText={field.onChange}
              label="Enter Email"
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
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
          }}
          render={({field}) => (
            <CustomTextInput
              label="Enter Password"
              value={field.value}
              onChangeText={field.onChange}
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
        Login
      </Button>
      <Button
        style={styles.loginRegisterSection}
        onPress={() => navigation.navigate('SignUp')}>
        Yet to Register? SignUp
      </Button>
    </LoginRegisterContainer>
  );
}
export default Login;

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
