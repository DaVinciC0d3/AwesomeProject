import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';

const LoginPage = () => {

    const [userName, setUserName] = useState ("");
    const [password, setPassword] = useState ("");
    const [agree, setAgree] = useState (false);

    console.log(userName, password);
    const submit = () => {
        if (userName === "iibtisam44@gmail.com" && password === "Pakistan123"){
        Alert.alert("Successfully logged in");
     } else {
        Alert.alert ("Email or Password is incorrect");
     }
    };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Screen</Text>
      <Text style={styles.description}>
        You can reach us anytime via iibtisam44@gmail.com
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Email</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={(actualData) => setUserName(actualData)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(actualData) => setPassword(actualData)}
        />
      </View>

      <View style={styles.wrapper}>
        <Checkbox 
        value={agree}
        onValueChange={()=> setAgree(!agree)}
        color={agree ? "purple" : undefined}
        />
        <Text style={styles.wrapperText}>I agree to the terms and conditions</Text>
      </View>

      <TouchableOpacity
       style={[
        styles.buttonStyle,
        {
        backgroundColor: agree? "purple" : "grey",
        },
      ]}
      disabled={!agree}
      onPress={() => submit()}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginTop: 20,
  },
  mainHeader: {
    fontSize: 25,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: 'capitalize',
    fontFamily: 'bold',
  },
  description: {
    fontSize: 20,
    color: '#7d7d7d',
    paddingBottom: 20,
    lineHeight: 25,
    fontFamily: 'regular',
  },
  labels: {
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: 'regular',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: 'regular',
    fontSize: 18,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  wrapperText: {
    marginLeft: 10,
    fontFamily: 'regular',
    fontSize: 16,
  },
  buttonStyle: {
    marginTop: 30,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginPage;
