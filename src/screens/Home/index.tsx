import React from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';

function Home(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>This is home screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#c8b6ff',
  },
});
