import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from './src/Main';
import Kakao from './src/Kakao';
import 'react-native-gesture-handler';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTab({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="매칭 포지션"
      screenOptions={{
        showLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#5cd27b',
        tabBarInactiveTintColor: '#080808',
      }}>
      <Tab.Screen
        name="매칭 포지션"
        component={Main}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require('./src/icons/position_active.png')}
                style={{width: 20, height: 20}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="매칭 대시보드"
        component={Kakao}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require('./src/icons/dashboard.png')}
                style={{width: 20, height: 20}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="매칭 프로필"
        component={Main}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require('./src/icons/profile.png')}
                style={{width: 20, height: 20}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeTab} />
        <Stack.Screen name="Community" component={HomeTab} />
        <Stack.Screen name="Hi" component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
