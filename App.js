import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';


const chwidth = Dimensions.get('screen').width
const chheight = Dimensions.get('screen').height


import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/login';


const Stack = createStackNavigator();




const First = () =>{
  const navigation = useNavigation()
  return(
      <SafeAreaView>
        <View style={{width:chwidth,height:chheight,alignItems:"center"}}>
          <View style={{width:"85%", height:"45%",backgroundColor:"white",borderRadius:30,alignItems:"center"}}>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate('second')}>
            <Image 
            style={{width:"88%", height:"100%", borderRadius:30}}
            source={{uri:"https://blog.kakaocdn.net/dn/bkya6W/btqFujG61He/SGcmXVZVmvZBvmkQ39kBV0/img.png"}}></Image>
          </TouchableWithoutFeedback>
          </View>
          <Text style={{fontSize:49,marginTop:19}}>뽀야미</Text>
          <Text style={{marginTop:10,margin:10}}>튀어나와요 동물의 숲부터 새로 추가된 주민이다. 좋아하는 노래는 졸면서 꾸는 꿈이며 취미는 자연, 선호하는 스타일은 엘레강스/큐트이고 선호 색상은 빨간색/분홍색이다.
햄스터 주민 중 유일하게 코가 생략되어 있다. 국내 기준으로 여성 주민 중에서 최상위권 인기를 누리고 있는 주민이다. 거기다가 짱구는 못말려 극장판 암흑 마왕 대추적에 나오는 타마유라 브라더스의 맏형 '로즈'를 닮았다는 의견이 많아 컬트적인 인기도 많다.</Text>
        </View>
      </SafeAreaView>
  )
}

const Second = () =>{
  return(
      <SafeAreaView>
        <View style={{width:chwidth,height:chheight,alignItems:"center"}}>
          <View style={{width:"85%", height:"45%",backgroundColor:"white",borderRadius:30,alignItems:"center"}}>
            <Image 
            style={{width:"57%", height:"100%", borderRadius:30}}
            source={{uri:"https://ww.namu.la/s/7408198b32cb996ab784f45d13d593184b6b901a92353a094764b640d7cb91d57cb15ef22a52ffc8c9937cb73fbe9e8e43905659cbf86d1a9938e33d5e2675dc2151624087158a5f3ced0552fb45e5e7ae74cee9a1dc6f3ffa09c0efbf92727f"}}></Image>
          </View>
          <Text style={{fontSize:49,marginTop:19}}>로보</Text>
          <Text style={{marginTop:10,margin:10}}>튀어나와요 동물의 숲부터 새로 추가된 주민이다. 좋아하는 노래는 졸면서 꾸는 꿈이며 취미는 자연, 선호하는 스타일은 엘레강스/큐트이고 선호 색상은 빨간색/분홍색이다.
햄스터 주민 중 유일하게 코가 생략되어 있다. 국내 기준으로 여성 주민 중에서 최상위권 인기를 누리고 있는 주민이다. 거기다가 짱구는 못말려 극장판 암흑 마왕 대추적에 나오는 타마유라 브라더스의 맏형 '로즈'를 닮았다는 의견이 많아 컬트적인 인기도 많다.</Text>
        </View>
      </SafeAreaView>
  )
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Home" component={First} />
        <Stack.Screen name="second" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;