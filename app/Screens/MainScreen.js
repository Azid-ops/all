import React from "react";
import Aux from "../Auxiliary/Auxiliary";
import {View, StyleSheet,Text,TouchableHighlight} from 'react-native';
const MainPage = (props) =>{
    return(
        <Aux>
            <View style={styles.container}>
                <TouchableHighlight style={styles.button}>
                    <Text 
                        style={styles.btn}
                        onPress={()=>{
                            props.navigation.navigate({
                                routeName:'Service Seeker'
                            });
                        }}
                    >Service Seeker</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.container}>
                <TouchableHighlight style={styles.button}>
                    <Text 
                        style={styles.btn}
                        onPress={()=>{
                            props.navigation.navigate({
                                routeName:'Service Provider'
                            });
                        }}
                    >Service Provider</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.container}>
                <TouchableHighlight style={styles.button}>
                    <Text 
                        style={styles.btn}
                        onPress={()=>{
                            props.navigation.navigate({
                                routeName:'Material Provider'
                            });
                        }}
                    >Material Provider</Text>
                </TouchableHighlight>
            </View>
        </Aux>
    )
}

const styles = StyleSheet.create({
    container: {
      height:"10%",
      marginTop:"25%",
      alignItems: 'center',
      justifyContent: 'center',
      display:"flex"
    },
    title: {
      backgroundColor: '#fff',
      height:"10%",
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:"20%",
      textAlign:"center",
      fontSize:20,
    },
    button: {
      borderWidth:1,
      padding:10,
      borderRadius:10,
      alignItems:"center"
    },
    btn:
    {
      fontSize:17,
    }
  });  
export default MainPage;