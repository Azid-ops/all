import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Aux from './Auxiliary/Auxiliary';
import { StyleSheet, Text, View, Button,TouchableOpacity, TouchableHighlight } from 'react-native';
import MainNavigator from './Navigation/MainNavigator';

export default function App() {
  return (
    <MainNavigator />
  );
}