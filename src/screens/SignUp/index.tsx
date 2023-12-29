import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomTextInput from '../../components/CustomTextInput';
import LoginRegisterContainer from '../../components/LoginRegisterContainer';

function SignUp(): React.JSX.Element {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LoginRegisterContainer title="Habitracker SignUp">
      <View style={styles.inputView}>
        <CustomTextInput
          label="Enter Name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputView}>
        <CustomTextInput
          value={email}
          label="Enter Email"
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputView}>
        <CustomTextInput
          value={username}
          label="Enter Username"
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputView}>
        <CustomTextInput
          value={password}
          label="Enter Password"
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <Button mode="contained" style={styles.loginButtonStyle}>
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
