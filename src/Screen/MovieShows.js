

//import your components from react-native 
import {  FlatList, ActivityIndicator,StyleSheet,SafeAreaView,ScrollView,View,Text,TouchableOpacity,Image } from 'react-native';
//import styles for your component
// import Moviepopular from '../Component/Moviepopular'
import React, { useEffect, useState } from 'react';

import Moviepopular from '../Component/Movietoprated'
import Movietoprated from '../Component/Moviepopular'
import Movietrending from '../Component/Movietrending'
import Movieweekly from '../Component/Movieweekly'


 function MovieShows(){
     return (
       <ScrollView style={{flex:1,backgroundColor:'black'}}>
       
       <Movietrending />
       < Movieweekly  />
       <Movietoprated   />
       <Moviepopular   />
       
       </ScrollView>
     );
}

export default MovieShows
