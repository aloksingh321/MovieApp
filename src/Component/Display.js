import React from 'react';
import { ActivityIndicator, FlatList, Text, View,Image,ScrollView,SafeAreaView,StyleSheet,TouchableOpacity } from 'react-native';
import {getW780ImageUrl} from '../API/url'
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import Carousel from 'react-native-snap-carousel';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export  function Display({data,isLoading,rated}){
  const navigation = useNavigation();
  _renderItem=(item)=>
{
   let title = ""
  return (
    <View style={{
        backgroundColor:'floralwhite',
        borderRadius: 5,
        height: hp(25),
        }}>
      <Text style={{fontSize:hp(2),color:'black',fontWeight:'bold',margin:5,marginHorizontal:6}}>{item.original_title!=undefined?item.original_title:item.original_name}</Text>
      <FastImage source={{uri:getW780ImageUrl(item.poster_path)}} style={{width:wp('70%'),height:hp('25%'),borderRadius:5}} />
    </View>

  )
} 
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container1}>
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
   <Text style={styles.Heading}> {rated}</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('Verticals')}>
     { 
       rated==="RECOMMENDED"?null:
    <Text style={styles.Heading1}> More</Text>
     }
    </TouchableOpacity>
     </View>
          <View style={{flex:0.33}}>
          {isLoading ? <ActivityIndicator size="small"/> : (
           rated==="RECOMMENDED"?  
           <View style={{
            padding: 10,
           }}>
             <Carousel
             layout={'default'}
             ref={ref => this.carousel = ref}
             data={data}
             sliderWidth={wp('90%')}
             itemWidth={wp('70%')}
             renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>navigation.navigate('Detail', {
                  itemId:item.id,
                  otherParam:item,
                })}>
                { _renderItem(item)}
                
                </TouchableOpacity>
                )}
                autoplay={true}
                autoplayInterval={4000}
                loop={true}
              />
              </View>
              :
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
              { <FastImage source={{uri:getW780ImageUrl(item.poster_path)}} style={{width:wp('20%'),height:hp('20%'),margin:5,borderRadius:15}}/>}
              
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
      fontSize:hp(2),
      color:'grey',
      fontStyle: 'italic',
      fontWeight: 'bold'
      }, 
      Heading1:{
        fontSize:hp(2),
        color:'white',
        marginLeft:3,
        fontStyle: 'italic',
        fontWeight: 'bold'
        }
    
  })