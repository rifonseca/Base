import React from "react";
import { View,  Text, TextInput, Button, StyleSheet, Alert,} from "react-native";
import axios from 'axios';
import { useState } from "react";

const Cadastrar = ({navigation}) => {
    const [mensagem, setMensagem] = useState('')
    const [formData, setFormData] = useState({
        id: '',
        nome: '',
        sobrenome: '',
        idade: '',
    });

    const handleInputChange = (name, value) => {
        setFormData({...formData, [name]:value});
    };

    //validar se campos estão vazios

    const handleCadastrar = async () => {
        if(!formData.id || !formData.nome || !formData.sobrenome || !formData.idade){
            setMensagem('Todos os campos são obrigatórios')
            return;
        }
        //envio de informações para a API cadastrar no banco de dados
        try {
            await axios.post('http://10.0.2.2:8085/api/create', formData);
            Alert.alert('Cadastro realizado com sucesso');
        } 
        catch(error){
            if(error.response.status === 401) {
                setMensagem('O id ' + formData.id + ' já existe no banco de dados')
            }
            else {
                console.log(error)
            }
        }
    };
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Cadastrar
            </Text>

            <TextInput 
            style={styles.input}
            placeholder='id'
            onChangeText={(text)=> handleInputChange('id' , text)}
            value={formData.id}
            />
            <TextInput 
            style={styles.input}
            placeholder='nome'
            onChangeText={(text)=> handleInputChange('nome' , text)}
            value={formData.nome}
            />
            <TextInput 
            style={styles.input}
            placeholder='sobrenome'
            onChangeText={(text)=> handleInputChange('sobrenome' , text)}
            value={formData.sobrenome}
            />
            <TextInput 
            style={styles.input}
            placeholder='idade'
            onChangeText={(text)=> handleInputChange('idade' , text)}
            value={formData.idade}
            keyboardType='numeric'
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='cadastrar' onPress={handleCadastrar}/>
                </View>
            </View>
            {mensagem ?  <Text style={styles.mensagem}>{mensagem}</Text>:null}
            
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },

    input:{
        height:40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom:10,
        padding:10,
        width:'80%'



    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '40%'

    },

    button: {
        marginBottom: 10,
        width: '100%',

    },

    mensagem: {
        color:'red', 
        marginTop: 10,
    }

});
export default Cadastrar;
