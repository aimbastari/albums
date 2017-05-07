import React from 'react';
import ReactNative, {Text, View, ScrollView} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


//Create entry point comp
const App = () => {
  return(
    <ScrollView style={{ flex: 1 }}> 
      <Header text="Albums"/>
      <AlbumList />
    </ScrollView> 
  )

};


//Render comp
ReactNative.AppRegistry.registerComponent('albums', () => App );

