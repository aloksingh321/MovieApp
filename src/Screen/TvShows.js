import React  from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image,ImageBackground,ScrollView } from 'react-native'
import styles from '../Styles/style';

const baseUrl='https://image.tmdb.org/t/p/w500';
import  Tvpopular from '../Component/Tvpopular'
import Tvtoprated from '../Component/Tvtoprated'
import Tvdaily from '../Component/Tvtrending'
import Tvweekly from '../Component/Tvweekly'
function TvShows() {
     return(
      <ScrollView style={{flex:1,backgroundColor:'black'}}>
        <Tvdaily />
     <Tvpopular/>
     <Tvtoprated />
     <Tvweekly/>
      </ScrollView>
     )
  }
export default TvShows;