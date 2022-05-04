import React, {useEffect} from 'react';
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
import KakaoShareLink from 'react-native-kakao-share-link';
export default function Main({navigation}) {
  async function kakao() {
    console.log('here');
    try {
      const response = await KakaoShareLink.sendFeed({
        content: {
          title: '강연호님의 매칭 시뮬레이션이 지금 완료되었습니다',
          imageUrl: 'https://i.esdrop.com/d/f/etttsBjmFi/5ZTAdTXyIP.png',
          link: {
            webUrl: 'https://developers.kakao.com/',
            mobileWebUrl: 'https://developers.kakao.com/',
          },
          description: '-------------------예상만족도:VeryGood(92%)',
          imageHeight: 200,
          imageWidth: 400,
        },

        buttons: [
          {
            title: '결과 보러 가기',
            link: {
              androidExecutionParams: [{key: 'key1', value: 'value1'}],
              iosExecutionParams: [
                {key: 'key1', value: 'value1'},
                {key: 'key2', value: 'value2'},
              ],
            },
          },
        ],
      });
      console.log(response);
    } catch (e) {
      console.error(e);
      console.error(e.message);
    }
  }
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
            <TouchableOpacity onPress={kakao} style={{marginLeft: 8}}>
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
            <TouchableOpacity onPress={kakao} stlye={{marginLeft: 8}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',

                  marginRight: '4%',
                  marginLeft: '8%',
                  marginTop: 16,
                  marginBottom: HEIGHT * 0.025,
                }}>
                <Image
                  style={{width: 800, height: 800}}
                  source={require('./icons/bell.png')}
                  resizeMode="contain"></Image>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
