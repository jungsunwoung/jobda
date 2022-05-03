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
  Dimensions,
} from 'react-native';
export default function Main({navigation}) {
  const HEIGHT = Dimensions.get('window').height;
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
            height: 60,
            width: '100%',
            paddingLeft: '4%',
            paddingRight: '4%',
            borderBottomColor: '#D3D3d3',
            borderBottomWidth: 0.7,
          }}>
          <View
            style={{
              height: 44,
              flexDirection: 'row',
              paddingTop: 5,
              paddingBottom: 5,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 80, height: 80}}
              source={require('./icons/jobda.png')}
              resizeMode="contain"
            />
            <Image
              style={{width: 80, height: 80}}
              source={require('./icons/text.png')}
              resizeMode="contain"></Image>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{marginLeft: 8}}>
              <Image
                style={{width: 80, height: 80}}
                source={require('./icons/bell.png')}
                resizeMode="contain"></Image>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{paddingTop: 27}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',

              marginRight: '4%',
              marginLeft: '8%',
              marginTop: 16,
              marginBottom: HEIGHT * 0.025,
            }}>
            <Text>hi</Text>
            <Text>hi</Text>
            <Text>hi</Text>
            <Text>hi</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
