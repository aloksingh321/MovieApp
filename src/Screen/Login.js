
import React from 'react'
import { View, ScrollView,TextInput, StyleSheet, TouchableOpacity, Text,  ImageBackground} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImageOpacityCycler from '../Component/ImageOpacityCycler'
import { updateEmail, updatePassword, login,signup } from '../Actions/index'
import withDelayedLoading from '../hoc/withDelayedLoading'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../Styles/style'
import FastImage from 'react-native-fast-image';
// const WELCOME_IMAGES = [
//         require('../assests/welcome_background_images/jurassic_world.jpg'),
//         require('../assests/welcome_background_images/spider_man.jpg'),
//         require('../assests/welcome_background_images/shutter_island.jpg'),
//         require('../assests/welcome_background_images/bumblebee.jpg'),
//         require('../assests/welcome_background_images/the_godfather.jpg'),
//         require('../assests/welcome_background_images/the_sixth_sense.jpg')
//       ];
   
class Login extends React.Component {
        
    state={
     Visible:true,
     confirmpassword:''
        }
   




        handleSignup = () => {
            this.props.signup()
            if(!this.props.user.error && this.props.user.email!=undefined && this.props.user.password!=undefined && this.props.user.password.length>6){ 
              
              this.props.navigation.navigate('Home')  
             }else if(this.state.confirmpassword!=this.props.user.password && this.props.user.password!=undefined ){
                alert("Password Mismatch") 
             }
        }
  




     handleLogin = () => {
          this.props.login()
          if(!this.props.user.error && this.props.user.email!=undefined && this.props.user.password!=undefined){ 
            
            this.props.navigation.navigate('Home')  
              }
        
    }
   


  //Email View
    _EmailVIEW=()=>{
      return (
        <View> 
       <TextInput
   
           style={styles.inputBox}
           value={this.props.user.email}
           onChangeText={email => this.props.updateEmail(email)}
           placeholder= 'Email'
           autoCapitalize='none'
           placeholderTextColor='white'
         
               
       />
   < Icon1 name="email" size={20} color="white" style={{paddingHorizontal:19,paddingVertical:20,position:'absolute'}}/>

       </View>
      )
    }



      //Password View
    _PasswordView=()=>{
      return ( 
        <View> 
       <TextInput
   
           style={styles.inputBox}
           value={this.props.user.password}
           onChangeText={password => this.props.updatePassword(password)}
           placeholder= 'Password'
           autoCapitalize='none'
           secureTextEntry={true}
           placeholderTextColor='white'
         
               
       />
   < Icon1 name="lock" size={20} color="white" style={{paddingHorizontal:19,paddingVertical:20,position:'absolute'}}/>

       </View>

      )
    }



     //Confirm Password View
    _ConfirmPasswordView=()=>{
   
        return ( 
          <View> 
         <TextInput
     
             style={styles.inputBox}
             value={this.state.confirmpassword}
             onChangeText={password => this.setState({confirmpassword:password})}
             placeholder= 'Confirm Password'
             autoCapitalize='none'
             secureTextEntry={true}
             placeholderTextColor='white'
           
                 
         />
     < Icon1 name="lock" size={20} color="white" style={{paddingHorizontal:19,paddingVertical:20,position:'absolute'}}/>
  
         </View>
  
        )
      }

 
      // Login Button 
    _LoginButton=()=>{
        return (
            <View>
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text
                style={{color:'black',textAlign:'center'}}
                    onPress={() =>this.setState({Visible:false}) }>
                        Don't have an account yet? Sign up
               </Text>

               </View>
        )
    }


       // Signup Button 
    _SIGNUPBUTTON=()=>{
        return (
            <View style={{justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={styles.button} onPress={this.handleSignup}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
                <Text
                style={{color:'black',textAlign:'center'}}
                    onPress={() =>this.setState({Visible:true}) }>
                        Already have an account? Login
               </Text>

               </View>
        )
    }
    
  

    render() {
        return (
          <ImageBackground style={ {height:'100%',width:'100%'} } 
                 resizeMode='cover' 
                 source={require('../assests/welcome_background_images/jurassic_world.jpg')}>
                      <View style={{flex:1,backgroundColor:'grey',opacity:0.8}}>
         <ScrollView>
         <View style={styles.container}>  
         <FastImage source={require('../assests/movie_roll.png')} style={styles.ImageStyle1} />  
             {this._EmailVIEW()}
             {this._PasswordView()}
         {  this.state.Visible===false?
              <View>
            { this._ConfirmPasswordView() }
            
             {this._SIGNUPBUTTON()}
             </View>
             :this._LoginButton()
        }
            
         </View>
         </ScrollView>
          </View>
      </ImageBackground>
  
        )
    }
}



const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, login,signup }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withDelayedLoading(Login))


  