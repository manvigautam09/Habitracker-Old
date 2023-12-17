import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function SignUp(): React.JSX.Element {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingSection}>
        <Text>Habitracker SignUp</Text>
      </View>
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
    </SafeAreaView>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#c8b6ff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderRadius: 7,
  },
  headingSection: {
    marginTop: 60,
    marginBottom: 20,
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
