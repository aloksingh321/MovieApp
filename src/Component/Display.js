import React from 'react';
import { ActivityIndicator, FlatList, Text, View,Image,ScrollView,SafeAreaView,StyleSheet,TouchableOpacity } from 'react-native';
import {getW780ImageUrl} from '../API/url'
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

export  function Display({data,isLoading,rated}){
  const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container1}>
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
   <Text style={styles.Heading}> {rated}</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('Verticals')}>
    <Text style={styles.Heading1}> More</Text>
    </TouchableOpacity>
     </View>
          <View style={{flex:0.33}}>
          {isLoading ? <ActivityIndicator size="small"/> : (
            <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={20}
            maxToRenderPerBatch={20}
              data={data}
             
              renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>navigation.navigate('Detail', {
                itemId:item.id,
                otherParam:item,
              })}>
              { <FastImage source={{uri:getW780ImageUrl(item.poster_path)}} style={{width:100,height:150,margin:5,borderRadius:15}}/>}
              
              </TouchableOpacity>
              )}
              keyExtractor={({ id }) => id.toString()}
            />
          )}
         
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
      container: {
          flex: 1,  
          
        
      },
      container1: {
      flex: 1,  
       margin:10,
      
    },
      Heading:{
      fontSize:18,
      color:'grey',
      fontStyle: 'italic',
      fontWeight: 'bold'
      }, 
      Heading1:{
        fontSize:18,
        color:'white',
        marginLeft:5,
        fontStyle: 'italic',
        fontWeight: 'bold'
        }
    
  })