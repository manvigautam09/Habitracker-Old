import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function LoginScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
