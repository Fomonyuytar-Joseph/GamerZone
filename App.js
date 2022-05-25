import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/HomeStack'

import Home from './screens/Home';
import { useState } from 'react';



export default function App() {
  
 
  return (
    <Navigator/>
    
  );
  
}

