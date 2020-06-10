import React  from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text,ScrollView } from 'react-native'
import styles from '../Styles/style';
import FastImage from 'react-native-fast-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import withRefetch from '../hoc/withRefetch';



const baseUrl='https://image.tmdb.org/t/p/w780';


function Detail({ route}) {
     let str=""
     let title=""
    const {  otherParam } = route.params;
       if(otherParam.first_air_date!=undefined && otherParam.original_name!=undefined){ 
         str=otherParam.first_air_date
         title =otherParam.original_name
       }else{
       str=otherParam.release_date
        title=otherParam.original_title
       }
   
    return (
      <ScrollView style={{ flex: 1,backgroundColor:'black',margin:0 }}>
      
 <FastImage source={{uri:baseUrl+""+otherParam.backdrop_path} } style={title.length<26?{width:wp('100%'),height:hp('27%'),margin:0,resizeMode:'cover',opacity:0.8}:{width:wp('100%'),height:hp('30%'),margin:0,resizeMode:'cover',opacity:0.8}} />
   <Text style={{color:'white',position:'absolute',padding:12,paddingTop:140,fontSize:19,fontWeight:'bold'}}>{title}</Text>

        <View style={{margin:12}}>
        <Text style={{color:'yellow',fontSize:hp(3),textDecorationLine: 'underline',fontWeight: 'bold',marginBottom:7}}>Overview</Text>
        <Text style={{color:'white',fontSize:14,fontFamily: 'sans-serif-medium',fontWeight:'normal'}}>{otherParam.overview}</Text>
        
        </View>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}> 
         <Text style={{color:'yellow',fontSize:hp(2),fontWeight: 'bold'}}>User Score</Text>
        <Text style={{color:'yellow',fontSize:hp(2),fontWeight: 'bold'}} >Release Date   </Text>
        <Text style={{color:'yellow',fontSize:hp(2),fontWeight: 'bold'}} >Vote Count  </Text>
        </View>
        <View style={{flex:4,flexDirection:'row',justifyContent:'space-evenly'}}> 
        <Text style={otherParam.vote_average<5?{color:'red',fontSize:hp(2),fontWeight: 'bold'}:otherParam.vote_average>=5 &&otherParam.vote_average<=7?{color:'yellow',fontSize:hp(2),fontWeight: 'bold'}:{color:'green',fontSize:hp(2),fontWeight: 'bold'}}>{otherParam.vote_average
        } </Text> 
        <Text style={{color:'white',fontSize:hp(2),fontWeight: 'bold'}} > {str.substr(0,4)}  </Text>
        <Text style={otherParam.vote_count<1000?{color:'red',fontSize:hp(2),fontWeight: 'bold'}:otherParam.vote_count===1000?{color:'yellow',fontSize:hp(2),fontWeight: 'bold'}:{color:'green',fontSize:hp(2),fontWeight: 'bold'}}>{otherParam.vote_count
        } </Text> 
        </View>
      </ScrollView>
    );
  }
export default withRefetch(Detail);