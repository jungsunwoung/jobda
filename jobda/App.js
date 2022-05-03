import React from 'react';
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
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'HomeScreen') {
            return (
              <Image
                source={'./icons/home.png'}
                style={{width: 25, height: 25}}></Image>
            );
          } else if (route.name === 'CommunityScreen') {
            return (
              <Image
                source={'./icons/dash.png'}
                style={{width: 25, height: 25}}></Image>
            );
          } else if (route.name === 'Markets') {
            return (
              <Image
                source={'./icons/profile.png'}
                style={{width: 25, height: 25}}></Image>
            );
          }
        },
      })}
      screenOptions={{
        activeTintColor: '#5cd27b',
        inactiveTintColor: '#5cc27b',
        showLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen name="매칭 포지션" component={Main} />
      <Tab.Screen name="매칭 대시보드" component={Kakao} />
      <Tab.Screen name="매칭 프로필" component={Main} />
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
