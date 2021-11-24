import React from "react";
import { useState } from "react";
import {View, StyleSheet,Text,TouchableHighlight,ScrollView,TextInput} from 'react-native';
import Aux from "../Auxiliary/Auxiliary";
const ServiceSeeker = (props) =>{
    const [text,setTitle] = useState("Enter your First Name");
    const [text1,setTitle1] = useState("Enter your Last Name")
    const [text2,setTitle2] = useState("Enter your Password")
    const [text3,setTitle3] = useState("Re-Enter your Password")
    return(
        <Aux>
            <View style={styles.etc}>
                <Text style={styles.login}>Login</Text>
                <ScrollView>
                    <TextInput 
                        placeholder={text}
                        style={styles.form}
                        onChangeText={text=>setTitle(text)}
                        autoCapitalize="sentences"
                    />
                    <TextInput 
                        placeholder={text1}
                        style={styles.form}
                        onChangeText={text1=>setTitle1(text1)}
                        autoCapitalize="sentences"
                    />
                    <TextInput 
                        placeholder={text2}
                        style={styles.form}
                        onChangeText={text2=>setTitle2(text2)}
                        autoCapitalize="sentences"
                    />
                    <TextInput 
                        placeholder={text3}
                        style={styles.form}
                        onChangeText={text3=>setTitle3(text3)}
                        autoCapitalize="sentences"
                    />
                    <TouchableHighlight style={styles.button}>
                        <Text 
                            style={styles.btn}
                            onPress={()=>{
                                props.navigation.navigate({
                                    routeName:'Welcome User'
                                });
                            }}
                        >Login</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button}>
                        <Text 
                            style={styles.btn}
                            onPress={()=>{
                                props.navigation.navigate({
                                    routeName:'Signup'
                                });
                            }}
                        >SignUp</Text>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        </Aux>
    )
}

const styles = StyleSheet.create({
    etc: {
        alignItems:"center",
        justifyContent:"center",
        marginTop:"10%"
    },
    login:{
        fontSize:20
    },
    new:{
        marginTop:20
    },
    form:
    {
        margin: 0,
        borderWidth: 1,
        padding: 5,
        width: 200,
        marginTop: "15%"
    },
    button: {
      borderWidth:1,
      marginTop:"10%",
      padding:4,
      borderRadius:10,
      alignItems:"center"
    },
    btn:
    {
      fontSize:17,
    }
})

export default ServiceSeeker