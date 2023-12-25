import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LoginRegisterContainer from '../../components/LoginRegisterContainer';

function SignUp(): React.JSX.Element {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LoginRegisterContainer title="Habitracker SignUp">
      <View style={styles.inputView}>
        <Text>Enter Email</Text>
        <TextInput value={email} onChangeText={setEmail} style={styles.input} />
      </View>
      <View style={styles.inputView}>
        <Text>Enter Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.loginButtonStyle}>
        <Text>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginRegisterSection}
        onPress={() => navigation.navigate('Login')}>
        <Text>Already have an account? Login</Text>
      </TouchableOpacity>
    </LoginRegisterContainer>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderRadius: 7,
  },
  inputView: {
    marginTop: 20,
  },
  loginButtonStyle: {
    marginTop: 20,
    backgroundColor: '#E7C6FF',
    padding: 20,
    minWidth: 100,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
  },
  loginRegisterSection: {
    marginTop: 10,
  },
});
