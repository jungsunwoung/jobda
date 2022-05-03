import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Main from './src/Main';
import 'react-native-gesture-handler';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTab({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
            return <Ionicons name={iconName} size={25} color={color} />;
          } else if (route.name === 'CommunityScreen') {
            iconName = focused ? 'ios-people-sharp' : 'ios-people-outline';
            return <Ionicons name={iconName} size={25} color={color} />;
          } else if (route.name === 'Market') {
            iconName = focused ? 'ios-cart-sharp' : 'ios-cart-outline';
            return <Ionicons name={iconName} size={25} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#5cc27b',
        inactiveTintColor: '#5cc27b',
        showLabel: false,
      }}>
      <Tab.Screen name="HomeScreen" component={Main} />
      <Tab.Screen name="CommunityScreen" component={Main} />
      <Tab.Screen name="Market" component={Main} />
    </Tab.Navigator>
  );
}

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTab}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
