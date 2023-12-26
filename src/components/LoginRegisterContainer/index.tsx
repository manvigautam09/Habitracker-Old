import React, {ReactNode} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
} from 'react-native';

interface LoginRegisterContainer {
  children: ReactNode;
  title: string;
}

function LoginRegisterContainer({
  children,
  title,
}: LoginRegisterContainer): React.JSX.Element {
  return (
    <ImageBackground
      source={require('../../assets/images/bg-light.png')}
      style={styles.image}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior="position"
          style={styles.keyboardContainer}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 40}>
          <View style={styles.headingSection}>
            <Text style={styles.title}> {title}</Text>
          </View>
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default LoginRegisterContainer;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  keyboardContainer: {
    alignItems: 'center',
  },
  headingSection: {
    marginTop: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
  },
});
