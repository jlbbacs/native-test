import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, TextInput,Alert,Image} from 'react-native';
import {Dropdown } from 'react-native-material-dropdown';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style = {styles.appContainer}>

        <View style = {styles.headerBackground}>
          <View>
            <Text style={styles.header}>REEL STATE COMAPANY</Text>
          </View>
        </View>

        <View>
          <Image style ={styles.image}  source={{ uri:'https://uploads-ssl.webflow.com/612571e62b498973d3849a09/62e5e34b76eeecce5a63a7d3_construction-site-visit-small.jpg', }}/>
        </View>
        
       
       <View style = {styles.inputContainer}>
          <TextInput style = {styles.textInput} placeholder='Username'/>
          <TextInput style = {styles.textInput} placeholder='Password'/>
    
        </View>
        
        <View style = {styles.loginAs}>
          
        </View>
      
      <Button style = {styles.botton} color="#2c2e30" title="Submit"/>
          
          <View>
            <Text style= {styles.loginSelector} >Don't have an account? Sign Up </Text>
          </View>
        

        </View>
    
  );
}



const styles = StyleSheet.create({

appContainer:{
  
  marginTop:50,
  padding:20,
  backgroundColor:"#80b9f2"
},
headerBackground:{
  backgroundColor:'#d3def2',
  padding:20,
  marginBottom:30
},

inputContainer:{
marginBottom:30,
marginTop:15

},

textInput:{
  borderWidth:1,
  width:'100%',
  margin:2,
  padding:5,
  borderRadius:5,
  borderColor:'#141414',
  marginTop:10,
  fontSize:12,      <Text style = {styles.forgetPasswordText}>Forgot Password?</Text>
  textAlign:'center',
 
},

header:{
  textAlign:'center',
  fontSize:20,
  textTransform: "uppercase",
  fontWeight:'bold'
},

forgetPasswordText:{
  textAlign:'right',
  marginTop:5,
  fontWeight:'500',
  fontSize:12

},
image:{
  height:250,
  width:'100%',
  borderRadius:5
},

loginSelector:{
  marginTop:10
},
loginAs:{
  textTransform:"uppercase",
  marginBottom:20,
 
  

},
botton:{
  borderRadius:20
},

loginText:{
  fontSize:15,
  fontWeight:"bold",
}



});
