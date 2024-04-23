import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Button, flatList, TouchableOpacity, FlatList, TextInput } from "react-native";
import axios from "axios";
import style from "../atv's/atv-imc/Styles";


const Deletar =({navigation}) => {
    const [id, setId] = useState("");
    const [mensagem, setmensagem] = useState("");


    const handleDelete = () => {
        axios.delete(`http://10.0.2.2:8085/api/delete/${id}`)
        .then(response => {
            setmensagem ('Registro deletado com sucesso!!');
            setId("");
        })
        .catch(error => {
            if(error.response && error.response.status === 401) {
                setmensagem("O id não existe no banco de dados")
            }
            else {
                setmensagem("Erro ao deletar o usuário");
            }
        });
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Deletar</Text>

            <View style={styles.form}>
                <TextInput
                style={styles.input}
                value={id}
                onChangeText={setId}
                placeholder="Id de usuário:"
                keyboardType="numeric"
                />

                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button
                        title="Deletar" onPress={handleDelete}
                        />
                    </View>
                </View>

                <Text style={styles.mensagem}>{mensagem}</Text>

               
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',

    },

    title: {
        fontSize:24,
        fontWeight: 'bold',
        color: 'white'
    },

    form: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,

    },

    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
    },

    buttonsContainer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        width: '80%'

    },

    button: {
        flex: 1,
        marginHorizontal: 5,
    },

    mensagem: {
        color:'black'
    }



 });

 export default Deletar