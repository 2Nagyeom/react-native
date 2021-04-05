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



const Home = () =>{
  const navigation = useNavigation()
  return(
      <SafeAreaView>
        <View style={{width:chwidth,height:chheight,alignItems:"center"}}>
          <View style={{width:"85%", height:"45%",backgroundColor:"white",borderRadius:30,alignItems:"center"}}>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate('First')}>
            <Image 
            style={{width:"100%", height:"100%", borderRadius:30}}
            source={{uri:"https://w.namu.la/s/89faf888a2565101317751cdee5aef473c7af94d571ca10cee82b35ba89bcb5b2849b598ecab6a67095d318bef107a56f1c9c0d2c2fabb20203bf628b55653e076403f3f340cc61c6f17d6ebeb590c6e1e91b9a3562c9d59b28606ac9c49c7c9"}}></Image>
          </TouchableWithoutFeedback>
          </View>
          <Text style={{fontSize:47,marginTop:60}}>동물의 숲 동물사전</Text>
          <Text style={{marginTop:10,margin:10}}>start: 2021년 4월 5일 ing~</Text>
        </View>
      </SafeAreaView>
  )
}

const First = () =>{
  const navigation = useNavigation()
  return(
      <SafeAreaView>
        <View style={{width:chwidth,height:chheight,alignItems:"center"}}>
          <View style={{width:"85%", height:"45%",backgroundColor:"white",borderRadius:30,alignItems:"center"}}>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate('second')}>
            <Image 
            style={{width:"56%", height:"100%", borderRadius:30}}
            source={{uri:"https://ww.namu.la/s/3892db15d4d3c1dd135ae3b58f42530b6fb1090e6cb4eecbbad821ff020b059b51c2c495a3cc0c2913da4b5d0caf692aba77435b099ce11cf75b54ff474c38e8f3cc21cea26145d617f958f27ce374353f8ddf9c18222aaedb9dfa9266b69e0b"}}></Image>
          </TouchableWithoutFeedback>
          </View>
          <Text style={{fontSize:47,marginTop:60}}>대장</Text>
          <Text style={{fontSize:18,marginTop:10,margin:20}}>동물의 숲에 등장한 이래 모든 시리즈에 개근해온 주민이다.
          좋아하는 노래는 K.K.로큰롤이며 취미는 음악, 선호하는 스타일은 쿨/심플이고 선호 색상은 하얀색/회색이다.
          모동숲에서의 인테리어는 벼룩시장같은 느낌으로, 정돈이 잘 되어있지 않아 지저분하다는 반응이 많다.
          눈 색깔은 다람쥐 주민인 쭈니와 같이 매우 어두운 녹안이다.</Text>
        </View>
      </SafeAreaView>
  )
}

const Second = () =>{
  const navigation = useNavigation()
  return(
      <SafeAreaView>
        <View style={{width:chwidth,height:chheight,alignItems:"center"}}>
          <View style={{width:"85%", height:"45%",backgroundColor:"white",borderRadius:30,alignItems:"center"}}>
          <TouchableWithoutFeedback onPress={()=>navigation.navigate('Third')}>
            <Image 
            style={{width:"57%", height:"100%", borderRadius:30}}
            source={{uri:"https://ww.namu.la/s/7408198b32cb996ab784f45d13d593184b6b901a92353a094764b640d7cb91d57cb15ef22a52ffc8c9937cb73fbe9e8e43905659cbf86d1a9938e33d5e2675dc2151624087158a5f3ced0552fb45e5e7ae74cee9a1dc6f3ffa09c0efbf92727f"}}></Image>
          </TouchableWithoutFeedback>
          </View>
          <Text style={{fontSize:49,marginTop:19}}>로보</Text>
          <Text style={{fontSize:18,marginTop:10,margin:20}}>동물의 숲에 등장한 이래 모든 시리즈에 개근해온 주민이다.
          좋아하는 노래는 드럼앤베이스이며 취미는 교육, 선호하는 스타일은 쿨/액티브이고 선호 색상은 검정색/초록색이다.이름은 시튼 동물기의 작품 중 하나이자 등장하는 동물인 커럼포의 왕 로보에서 따왔다.영칭의 경우 독일권의 남성 이름인 볼프강에서 따온 듯.</Text>
        </View>
      </SafeAreaView>
  )
}

const Third = () =>{
  const navigation = useNavigation()
  return(
      <SafeAreaView>
        <View style={{width:chwidth,height:chheight,alignItems:"center"}}>
          <View style={{width:"85%", height:"45%",backgroundColor:"white",borderRadius:30,alignItems:"center"}}>
          <TouchableWithoutFeedback onPress={()=>navigation.navigate('Fourth')}>
            <Image 
            style={{width:"57%", height:"100%", borderRadius:30}}
            source={{uri:"https://w.namu.la/s/e0b612ffdade3db07a19b8104d86f04f17d23cd437091ac0a20e6fb9f7f3f68b84853edc06ac18d3a14e4637f7d626d80231c5de39cf3192eb272f55285c820cd234fd0ab67d6c8771239f0f21c5b77f74f57c48bac858134ba33cae7262eb7a"}}></Image>
          </TouchableWithoutFeedback>
          </View>
          <Text style={{fontSize:49,marginTop:19}}>비앙카</Text>
          <Text style={{fontSize:18,marginTop:10,margin:20}}>놀러오세요 동물의 숲부터 새로 추가된 주민이다.
          좋아하는 노래는 K.K.소울이며 취미는 패션, 선호하는 스타일과 색상은 각각 엘레강스/쿨과 파란색/하늘색이다.
          모티브는 북극늑대로 보인다.선호도 높은 늑대 주민 중에서도 인기가 매우 높은 주민이다. 비공식 순위인 이상형 월드컵에서는 10위권 내의 최상위권을 놓치지 않는다. 2020년 12월 기준에서도 최상위권을 유지 중이다.</Text>
        </View>
      </SafeAreaView>
  )
}

const Fourth = () =>{
  const navigation = useNavigation()
  return(
      <SafeAreaView>
        <View style={{width:chwidth,height:chheight,alignItems:"center"}}>
          <View style={{width:"85%", height:"45%",backgroundColor:"white",borderRadius:30,alignItems:"center"}}>
          <TouchableWithoutFeedback onPress={()=>navigation.navigate('Fifth')}>
            <Image 
            style={{width:"57%", height:"100%", borderRadius:30}}
            source={{uri:"https://ww.namu.la/s/d5ce508a1284a20290c75bd6a3f0cc7c656a50f1dde2fbf51a0c652338ed5976a8c3d55773d14e9a130746f4a165d6b96c73d333100d99f6b3679db14c8417677764cddd6d3316a9cff59cedbe91cf89f7afa94fdc27f75dfdb0231703fe505a"}}></Image>
          </TouchableWithoutFeedback>
          </View>
          <Text style={{fontSize:49,marginTop:19}}>산드라</Text>
          <Text style={{fontSize:18,marginTop:10,margin:20}}>동물의 숲에 등장한 후 놀동숲에서 삭제되었다가 타동숲 이후 다시 등장하기 시작한 주민이다.$nba
          좋아하는 노래는 아일랜드의 노래이며 취미는 패션, 선호하는 스타일은 엘레강스/쿨이고 선호 색상은 초록색/파란색이다.
          좋아하는 노래는 T.K.로큰롤이며 의상 스타일은 강렬한 것을 좋아하고, 모던한 것은 싫어한다. 
          좋아하는 색은 검정색.커피 취향은 모카 원두에 우유 살짝, 설탕 1개를 넣은 것이다.</Text>
        </View>
      </SafeAreaView>
  )
}

const Fifth = () =>{
  const navigation = useNavigation()
  return(
      <SafeAreaView>
        <View style={{width:chwidth,height:chheight,alignItems:"center"}}>
          <View style={{width:"85%", height:"45%",backgroundColor:"white",borderRadius:30,alignItems:"center"}}>
          <TouchableWithoutFeedback onPress={()=>navigation.navigate('Sixth')}>
            <Image 
            style={{width:"57%", height:"100%", borderRadius:30}}
            source={{uri:"https://w.namu.la/s/a493de9b52f9a599cd46d3ccfea4223e94d1ec76a71ed47180927dfeb743bf2169066279cd6a1c8b8f836cb5c09f50b5576b769d946766d8da5f302ce2b25ccb2aa7e52c33310c0f0896ea08cf2616e16c03619ace1c6ebd90883949c12b5dbc"}}></Image>
          </TouchableWithoutFeedback>
          </View>
          <Text style={{fontSize:49,marginTop:19}}>바네사</Text>
          <Text style={{fontSize:18,marginTop:14,margin:35}}>동물의 숲 e+에 등장한 후 놀동숲에서 삭제되었다가 튀동숲 아미보+ 이후 다시 등장하기 시작한 주민이다.
          좋아하는 노래는 팝K.K.이며 취미는 교육, 선호하는 스타일은 엘레강스/고저스이고 선호 색상은 회색/보라색이다.성숙함이란 성격에 맞게 시니컬한 눈빛의 소유자인 것이 특징이다.
          종족은 늑대지만 배색은 견종 중 하나인 저먼 셰퍼드같은 느낌을 준다.
          많은 성숙함 성격의 늑대 주민 중 유일하게 대화 타입이 A이다.
          </Text>
        </View>
      </SafeAreaView>
  )
}

const Sixth = () =>{
  const navigation = useNavigation()
  return(
      <SafeAreaView>
        <View style={{width:chwidth,height:chheight,alignItems:"center"}}>
          <View style={{width:"85%", height:"45%",backgroundColor:"white",borderRadius:30,alignItems:"center"}}>
          <TouchableWithoutFeedback onPress={()=>navigation.navigate('Seventh')}>
            <Image 
            style={{width:"57%", height:"100%", borderRadius:30}}
            source={{uri:"https://w.namu.la/s/d55980f0785ac5cfc3c1faeaf26561f7869ffb6f1c28ec3add034d9bb11ecd93c7875332ffeecea57ff519318989c638bd9bfd253cef5ae68dcc047fd7ea4a3b30d493ace514d03a19ac7a4d262f9e9c7108b248b797d065612c422bb21cdecc"}}></Image>
          </TouchableWithoutFeedback>
          </View>
          <Text style={{fontSize:49,marginTop:19}}>릴리</Text>
          <Text style={{fontSize:18,marginTop:14,margin:35}}>튀어나와요 동물의 숲부터 새로 추가된 주민이다.
          좋아하는 노래는 숲 속 생활이며 취미는 음악, 선호하는 스타일은 큐트이고 선호 색상은 파란색/하얀색이다.
          늑대 주민 중에서는 특이하게 눈매가 날카롭지 않고 동글동글하다. 그래서 늑대 주민 중에선 제일 귀여운 외모를 가지고 있다.
          몸의 흰 부분은 구름이나 꽃을 연상시키는 십자형 무늬 형태로 이루어져 있으며 분홍색 테두리가 그려져 있다. 그래서인지 한칭과 일칭은 백합꽃에서 따왔고, 영칭은 하늘의 영단어 Sky에서 유래된 영미권 여성 인명인 Skye로 지어젔다.
          </Text>
        </View>
      </SafeAreaView>
  )
}

const Seventh = () =>{
  const navigation = useNavigation()
  return(
      <SafeAreaView>
        <View style={{width:chwidth,height:chheight,alignItems:"center"}}>
          <View style={{width:"85%", height:"45%",backgroundColor:"white",borderRadius:30,alignItems:"center"}}>
          <TouchableWithoutFeedback onPress={()=>navigation.navigate('Eighth')}>
            <Image 
            style={{width:"62%", height:"100%", borderRadius:30}}
            source={{uri:"https://w.namu.la/s/24c01fcb31171bfbc1dc6f14b3f7e3ca8bcba3a327316ec3d0a91d9de2ab5e5760d0822ccecd9627ace53886f4f87a9183c901b749d722f5b3cb101bc7de2868ab91971e3b59f97e654e535c07e2abeee29d55b61c955b327eb363e4b5898775"}}></Image>
          </TouchableWithoutFeedback>
          </View>
          <Text style={{fontSize:49,marginTop:19}}>모니카</Text>
          <Text style={{fontSize:16,marginTop:14,margin:35}}>모여봐요 동물의 숲부터 새로 추가된 주민이다.
          좋아하는 노래는 동물의 섬이며 취미는 운동, 선호하는 스타일은 큐트/액티브이고 선호 색상은 초록색/하얀색이다
          종족은 늑대이지만 털 색이 주황색이기 때문에, 늑대보다는 여러모로 붉은여우를 연상케 하는 모습을 가지고 있어서 이 캐릭을 처음보는 플레이어 입장에서는 여우라고 불리는 경우가 잦다. 게다가, 북미판에서의 말버릇은 Foxtrot으로 이 점을 노리고 지어진 것으로 보인다.
          머리 위에 선글라스를 올려 놓고 다니는데 모자나 안경류를 선물하면 머리 위의 선글라스 대신 선물한 것을 쓰고 다니며, 운동할 때에는 여타 운동이 취미인 주민처럼 스포츠 선글라스를 착용한 채 운동하기도 한다.
          아이돌 성격 중에선 유일하게 취미가 운동이면서 대화 타입이 A다. 나머지 2호와 센트엘로는 대화 타입이 B다.
          </Text>
        </View>
      </SafeAreaView>
  )
}

const Eighth = () =>{
  const navigation = useNavigation()
  return(
      <SafeAreaView>
        <View style={{width:chwidth,height:chheight,alignItems:"center"}}>
          <View style={{width:"85%", height:"45%",backgroundColor:"white",borderRadius:30,alignItems:"center"}}>
          <TouchableWithoutFeedback onPress={()=>navigation.navigate('Nineth')}>
            <Image 
            style={{width:"62%", height:"100%", borderRadius:30}}
            source={{uri:"https://ww.namu.la/s/b2e031db23d56be4180e3b3892e38bfa43ec7bbf56efabc1c8c8b18ba58ce5cd1848220982f309cbb2e5d60dd58c69a2439a67cf9fab4c343b9fbcd2721edb0c30d5ab2a9f738fff59c8877f09257b191be557f45e22ced01b66a9cbc6923ea70c88cf6340b6157c5f5ef3a0ea7c9bb8"}}></Image>
          </TouchableWithoutFeedback>
          </View>
          <Text style={{fontSize:49,marginTop:19}}>시베리아</Text>
          <Text style={{fontSize:16,marginTop:14,margin:35}}>동물의 숲에 등장한 후 놀동숲에서 삭제되었다가 타동숲 이후 다시 등장하기 시작한 주민이다.
          좋아하는 노래는 까자크의 노래이며 취미는 교육, 선호하는 스타일은 심플/쿨이고 선호 색상은 하얀색/하늘색이다.
          이름이랑 화장을 한 듯한 아이라인을 가진 외형 때문에 중성적인 느낌이 나서 종종 여성 주민으로 오인받는 경우가 많다. 때문에 무뚝뚝 주민 특유의 중저음이 더욱 돋보이는 편. 잭슨과 쭈니 맞먹는 인기를 자랑하는 남성 주민이기도 하다.
          이름의 유래는 러시아의 지역 중 하나인 시베리아다. 이러한 점 때문인지 좋아하는 노래가 까자크의 노래인 것으로 보이며, 까자크의 노래 앨범 표지에서도 시베리아가 루바슈카 복장을 입고서 카자크 댄스를 추고 있는 모습이 그려져 있다.
          </Text>
        </View>
      </SafeAreaView>
  )
}

const Nineth = () =>{
  //const navigation = useNavigation()
  return(
      <SafeAreaView>
        <View style={{width:chwidth,height:chheight,alignItems:"center"}}>
          <View style={{width:"85%", height:"45%",backgroundColor:"white",borderRadius:30,alignItems:"center"}}>
          
            <Image 
            style={{width:"59%", height:"100%", borderRadius:30}}
            source={{uri:"https://w.namu.la/s/97f1774d259b5a376c64b713102ddcc668bc1a56c719502ba621f15b6926c76fcb0f8daacfdfedd50e20b9a7468703bf1492ba16ec5e6f393209b0296ea8d952d5beb0cb11fca358042dcc35ab762db430765ae16f5d10bdb33be51934bc848d"}}></Image>
          
          </View>
          <Text style={{fontSize:49,marginTop:19}}>켄</Text>
          <Text style={{fontSize:16,marginTop:14,margin:35}}>동물의 숲 +에 등장한 후 놀동숲에서 삭제되었다가 튀동숲 아미보+ 이후 다시 등장하기 시작한 주민이다.
          좋아하는 노래는 K.K.형사이며 취미는 자연, 선호하는 스타일은 심플/쿨이고 선호 색상은 갈색/베이지색이다.
          관록, 힘드러, 대길 등과 더불어 동물의 숲에 몇 없는 중~노년층 이미지의 주민이다. 
          거기에 더해 늙은이 같은 말투를 쓰는걸로 보아 할아버지 컨셉으로 만들어진 캐릭터인 듯 하며 전체적으로 동양인 할아버지 같은 느낌이 강하다. 무뚝뚝한 성격이 많은 늑대 중에서 유일한 무뚝뚝 대화 타입 A 이기도 하고 
          할아버지 컨셉이 확고해서 인기가 제법 높은 편.
          </Text>
        </View>
      </SafeAreaView>
  )
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="second" component={Second} />
        <Stack.Screen name="Third" component={Third} />
        <Stack.Screen name="Fourth" component={Fourth} />
        <Stack.Screen name="Fifth" component={Fifth} />
        <Stack.Screen name="Sixth" component={Sixth} />
        <Stack.Screen name="Seventh" component={Seventh} />
        <Stack.Screen name="Eighth" component={Eighth} />
        <Stack.Screen name="Nineth" component={Nineth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
