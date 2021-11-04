import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import tw from 'tailwind-react-native-classnames';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={tw`h-full bg-white`}>
        <View style={tw`p-5`}>
          <Image 
            style={{width: 100, height: 100, resizeMode: "contain"}}
            source={{uri: "https://links.papareact.com/gzs",}}
          />
        </View>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
