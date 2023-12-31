import React, { useState } from 'react';
import type { RootState } from '../../app/store'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {useNavigation} from "@react-navigation/native"
import { decrement,increment,updateText } from '../../counter/counterSlice';
import {useSelector,useDispatch} from 'react-redux'




export default function LoginScreen ()  {
  const count = useSelector((state: RootState) => state.counter.value)
  const emailText = useSelector((state:RootState) => state.counter.email);

  const dispatch = useDispatch()

  const navigation=useNavigation()

    const [password, setPassword] = useState(''); 
  
    const handleLogin = () => {

      navigation.navigate("HomeScreen")
    };


console.log("*******",emailText)



    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
  
        <TextInput
          style={styles.input}
          placeholder="Nameat"
          onChangeText={(text) => dispatch(updateText(text))}
          value={emailText}

        />
  
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
  
        <TouchableOpacity style={styles.button} onPress={()=>{handleLogin()}}>

          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 24,
    },
    input: {
      width: '100%',
      height: 48,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 12,
      marginBottom: 16,
    },
    button: {
      width: '100%',
      height: 48,
      backgroundColor: '#007bff',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  
