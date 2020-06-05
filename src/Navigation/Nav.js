import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screen/Login';
import Signup from '../Screen/Signup';
import HomeScreen from '../Screen/Home'
import Browse from '../Screen/TvShows'
import MovieShows from '../Screen/MovieShows'
import Detail from '../Component/Detail'
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import Verticals from '../Component/MovieVertical'


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator
    activeColor="grey"
    inactiveColor="white"
      style={{ backgroundColor: 'black',color:'grey', fontWeight: 'bold' }
    }
    labelStyle={{ fontSize: 100}}
    barStyle={{ backgroundColor: '#3b3b3b' }}
    >
      <Tab.Screen
      
      options={{
        tabBarLabel: 'Movie',
        tabBarIcon: ({ color }) => (
          <Icon1 name="movie" size={20} color="white" />
        ),
      }}
       name="movie"
       
      component={MovieShows}    
      
      
      />
      <Tab.Screen name="Browse" 
       
       options={{
        tabBarLabel: 'Tv Shows',
        tabBarIcon: ({ color }) => (
          <Icon name="tv" size={20} color="white" />
        ),
      }}
       name="Browse"
      
      
      component={Browse} />
      <Tab.Screen name="Setting" 
      
      options={{
        tabBarLabel: 'Setting',
        tabBarIcon: ({ color }) => (
          <Icon name="cog" size={20} color="white" />
        ),
      }}
  
      component={HomeScreen} />
      
      
    </Tab.Navigator>
  );
}


export default function Nav() {
  return (
  
    <Stack.Navigator headerMode={"none"}>
    
       <Stack.Screen  name="Home" component={Home} />
       <Stack.Screen  name="Login" component={Login} />
      <Stack.Screen  name="Signup" component={Signup} />
      <Stack.Screen  name="Detail" component={Detail} />
      <Stack.Screen  name="Verticals" component={Verticals} />
    </Stack.Navigator>
  );
}