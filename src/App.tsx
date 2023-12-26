import React from 'react';
import {PaperProvider, MD3DarkTheme} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const queryClient = new QueryClient();

  const theme = {...MD3DarkTheme};

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}

export default App;
