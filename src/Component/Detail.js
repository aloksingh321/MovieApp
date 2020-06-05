import React  from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text,ScrollView } from 'react-native'
import styles from '../Styles/style';
import FastImage from 'react-native-fast-image';

const baseUrl='https://image.tmdb.org/t/p/w500';


function Detail({ route}) {
     let str=""
    const {  otherParam } = route.params;
       if(otherParam.release_date!=undefined){ 
         str=otherParam.release_date
       }else{
       str=otherParam.first_air_date
       }
   
    return (
      <ScrollView style={{ flex: 1,backgroundColor:'black',margin:0 }}>
 
 <FastImage source={{uri:baseUrl+""+otherParam.backdrop_path}} style={{width:400,height:200,margin:5,borderRadius:15,resizeMode:'cover'}}/>
   
        <Text style={{color:'white',position:'absolute',padding:12}}>{otherParam.original_title}</Text>
        <View style={{margin:12}}>
        <Text style={{color:'yellow',fontSize:20,textDecorationLine: 'underline',fontWeight: 'bold',marginBottom:7}}>Overview</Text>
        <Text style={{color:'white',fontSize:14,fontFamily: 'sans-serif-medium',fontWeight:'normal'}}>{otherParam.overview}</Text>
        
        </View>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}> 
         <Text style={{color:'yellow',fontSize:16,fontWeight: 'bold'}}>User Score</Text>
        <Text style={{color:'yellow',fontSize:16,fontWeight: 'bold'}} >Release Date   </Text>
        <Text style={{color:'yellow',fontSize:16,fontWeight: 'bold'}} >Vote Count  </Text>
        </View>
        <View style={{flex:4,flexDirection:'row',justifyContent:'space-evenly'}}> 
        <Text style={otherParam.vote_average<5?{color:'red',fontSize:18,fontWeight: 'bold'}:otherParam.vote_average>=5 &&otherParam.vote_average<=7?{color:'yellow',fontSize:16,fontWeight: 'bold'}:{color:'green',fontSize:18,fontWeight: 'bold'}}>{otherParam.vote_average
        } </Text> 
        <Text style={{color:'white',fontSize:16,fontWeight: 'bold'}} > {str.substr(0,4)}  </Text>
        <Text style={otherParam.vote_count<1000?{color:'red',fontSize:18,fontWeight: 'bold'}:otherParam.vote_count===1000?{color:'yellow',fontSize:16,fontWeight: 'bold'}:{color:'green',fontSize:16,fontWeight: 'bold'}}>{otherParam.vote_count
        } </Text> 
        </View>
      </ScrollView>
    );
  }
export default Detail;