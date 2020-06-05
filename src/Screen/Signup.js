
import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button,Dimensions,Image,ScrollView } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImageOpacityCycler from '../Component/ImageOpacityCycler'
import { updateEmail, updatePassword, signup } from '../Actions/index'
import withDelayedLoading from '../hoc/withDelayedLoading'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from '../Styles/style'
const { height, width } = Dimensions.get('window')
const WELCOME_IMAGES = [
        require('../assests/welcome_background_images/jurassic_world.jpg'),
        require('../assests/welcome_background_images/spider_man.jpg'),
        require('../assests/welcome_background_images/shutter_island.jpg'),
        require('../assests/welcome_background_images/bumblebee.jpg'),
        require('../assests/welcome_background_images/the_godfather.jpg'),
        require('../assests/welcome_background_images/the_sixth_sense.jpg')
      ];
   
class Signup extends React.Component {
    handleLogin = () => {
          this.props.login()
          if(!this.props.user.error && this.props.user.email!=undefined && this.props.user.password!=undefined){ 
            
            this.props.navigation.navigate('Home')  
              }
        
    }


    render() {
        return (
    
            <ScrollView style={{flex:1,backgroundColor:'grey'}}>
            
          {/* <ImageOpacityCycler style={StyleSheet.absoluteFill} images={WELCOME_IMAGES} />  */}
                 <View style={styles.container}>  
                 <Image source={require('../assests/movie_roll.png')} style={styles.ImageStyle1} />  
                 <View> 
                <TextInput
            
                    style={styles.inputBox}
                    value={this.props.user.email}
                    onChangeText={email => this.props.updateEmail(email)}
                    placeholder='Email'
                    autoCapitalize='none'
                    placeholderTextColor='white'
                />
      < Icon1 name="email" size={20} color="white" style={{paddingHorizontal:18,paddingVertical:20,position:'absolute'}}/>
                </View>
                <View>
                <TextInput
                    style={styles.inputBox}
                    value={this.props.user.password}
                    onChangeText={password => this.props.updatePassword(password)}
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor='white'
                />
                 < Icon name='lock' size={20} color="white" style={{paddingHorizontal:22,paddingVertical:20,position:'absolute'}}/>
                </View>

                <View>
                <TextInput
                    style={styles.inputBox}
                    value={this.props.user.password}
                    onChangeText={password => this.props.updatePassword(password)}
                    placeholder='Confirm Password'
                    secureTextEntry={true}
                    placeholderTextColor='white'
                />
                 < Icon name='lock' size={20} color="white" style={{paddingHorizontal:22,paddingVertical:20,position:'absolute'}}/>
                </View>
               
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
                <Text
                    onPress={() => this.props.navigation.navigate('Login')} style={{color:'white'}}>
                        Already have an account ? Login
               </Text>
              </View>
             
            </ScrollView>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, signup }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withDelayedLoading(Signup))