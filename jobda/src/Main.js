import React from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
export default function Main({navigation}) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
        <View
          accessibilityRole="header"
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            width: '100%',
            paddingLeft: '4%',
            paddingRight: '4%',
          }}>
          <View
            style={{
              height: 44,
              flexDirection: 'row',
              paddingTop: 4,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 24}}>
              <Text style={{fontWeight: 'bold', color: '#5CC27B'}}>
                My Page
              </Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{marginLeft: 8}}>
              {/* <Image source={require('./icon/setting.png')} /> */}
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{paddingTop: 27}}>
          <View>
            <Text>hi</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
