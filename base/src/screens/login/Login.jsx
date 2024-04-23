import React from "react";
import {StatusBar,SafeAreaView,View } from "react-native";
import { Text, } from '@rneui/themed';
import { Button } from '@rneui/themed';
import { Input } from '@rneui/themed';
import Styles from './Styles';

export default function Login() {
    return(
        <SafeAreaView style={Styles.container}>
        <StatusBar hidden/>

        <View style={Styles.loginDiv}>
            <Text style={Styles.text1}>
            LOG-IN
            </Text>
            <Text style={Styles.text2}>
            Entre para continuar
            </Text>

            <Input style={Styles.EmailStyle} placeholder='EMAIL:' placeholderTextColor={'black'}  />
            <Input style={Styles.senhaStyle} placeholder='SENHA:' placeholderTextColor={'black'}  />

            <View style={Styles.containerStyleBtn}>
            <Button
              title="ENTRAR"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle= {Styles.buttonStyle}
              titleStyle={{ fontWeight: 'bold', fontSize: 21 }}
              onPress={() => console.log('')}
            />
            </View>

            <View style={Styles.btmTextView}>

            <Text style={Styles.textBottom}>Não tem uma conta?</Text>
            
            
                <Button
                title="Crie uma"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle= {Styles.textBTM}
                titleStyle={{ color: '#00B0FB',
                fontWeight: 'bold', fontSize: 14 }}
                onPress={() => console.log('')}
            />

            </View>

           
           
            
            

            </View>

       

        </SafeAreaView> 
    
    );
    
}

