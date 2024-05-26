import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegisterScreen from '../registerPage';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;