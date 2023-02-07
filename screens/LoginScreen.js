import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { GlobalStyles } from "../constants/styles";


export function login(email,pass){
  console.log(email);
  console.log(pass);
  
}


 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  function logindata(){
    const mail = email;
    const pass = password;
    login(mail,pass);
  }
 
  return (
    <View style={styles.container}>
      
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Device ID"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        
      </View>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress= {logindata}>LOGIN</Text>
      </TouchableOpacity>
    </View>


  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: GlobalStyles.colors.primary200,
  },
});