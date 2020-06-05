import {StyleSheet,Dimensions} from 'react-native'
const { height, width } = Dimensions.get('window')
export default   style = StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom:120,
        marginTop:100,
        borderRadius:12,
        
      
    },
    inputBox: {
        width: width-130,
        margin: 12,
        padding:4,
        paddingHorizontal:40,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 2,
        borderRadius:5,
        color:'white'
       
       
        
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#3E2723',
        
        borderWidth: 1,
        borderRadius: 5,
        width: width-130,
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 4,
        shadowOffset: {
          width: 0,
          height: 4
        }
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    buttonSignup: {
        fontSize: 12,
        backgroundColor:'red'
    },
    ImageStyle1: {
              padding: 10,
              margin: 8,
              height: 100,
              width: 100,
              backgroundColor:'#3E2723',
              borderRadius:20
            },
})