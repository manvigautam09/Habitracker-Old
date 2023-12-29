import React from 'react';
import {Button, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

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
          rules={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name must be at least 3 characters long',
            },
            maxLength: {
              value: 30,
              message: 'Name must be at most 30 characters long',
            },
          }}
          render={({field: {onChange, value}}) => (
            <CustomTextInput
              value={value}
              label="Enter Name"
              onChangeText={onChange}
              error={!!errors.name?.message}
            />
          )}
          name="name"
        />
        {errors.name?.message ? (
          <Text>{errors.name?.message.toString()}</Text>
        ) : null}
      </View>
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
          render={({field: {onChange, value}}) => (
            <CustomTextInput
              value={value}
              label="Enter Email"
              onChangeText={onChange}
              error={!!errors.email?.message}
            />
          )}
          name="email"
        />
        {errors.email?.message ? (
          <Text>{errors.email?.message.toString()}</Text>
        ) : null}
      </View>
      <View style={styles.inputView}>
        <Controller
          control={control}
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters long',
            },
            maxLength: {
              value: 20,
              message: 'Username must be at most 20 characters long',
            },
          }}
          render={({field: {onChange, value}}) => (
            <CustomTextInput
              value={value}
              label="Enter Username"
              onChangeText={onChange}
              error={!!errors.username?.message}
            />
          )}
          name="username"
        />
        {errors.username?.message ? (
          <Text>{errors.username?.message.toString()}</Text>
        ) : null}
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
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
              message:
                'Password must contain at least one special character, one uppercase letter, one lowercase letter, and one digit',
            },
          }}
          render={({field: {onChange, value}}) => (
            <CustomTextInput
              value={value}
              label="Enter Password"
              onChangeText={onChange}
              error={!!errors.password?.message}
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.password?.message ? (
          <Text>{errors.password?.message.toString()}</Text>
        ) : null}
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
