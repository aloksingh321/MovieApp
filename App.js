import React from 'react';
import Signup from './src/Navigation/Nav'
import  store from './store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';

class App extends React.Component{
  
  render(){ 
    return (
        
        <Provider store={store}>
          <NavigationContainer>
          <Signup/>
          </NavigationContainer>
        </Provider>
    ) 
  }
}

export default App;