import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

import CustomTextInput from '../../components/CustomTextInput';
import LoginRegisterContainer from '../../components/LoginRegisterContainer';

function Login(): React.JSX.Element {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LoginRegisterContainer title="Habitracker Login">
      <View style={styles.inputView}>
        <CustomTextInput
          value={email}
          onChangeText={setEmail}
          label="Enter Email"
        />
      </View>
      <View style={styles.inputView}>
        <CustomTextInput
          label="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <Button mode="contained" style={styles.loginButtonStyle}>
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
