import React from "react";
import {StatusBar, SafeAreaView, Text,View } from "react-native";
import Styles from './Styles';

export default function Treino() {
    return(
        <SafeAreaView style={Styles.container}>
        <StatusBar hidden/>
        <View style={Styles.div1}>
            <Text>SMART COACH</Text>
            <Text>página treino</Text>
        </View>

       

        </SafeAreaView> 
    
    );
    
}

