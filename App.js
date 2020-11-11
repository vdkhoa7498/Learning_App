import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Authentication/Login/Login';
import ForgetPassword from './src/components/Authentication/ForgetPassword/ForgetPassword';

export default function App() {
  return (
    <View style={styles.container}>
      <ForgetPassword/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});