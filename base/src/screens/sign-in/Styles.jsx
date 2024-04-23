import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#18780F',
    },
    
    h1Style: {
        fontFamily: 'Nunito-SemiBold',
        fontWeight: '800',
        fontSize: 25,
        color: '#FFFFFF',
      },

      title: {
        marginVertical: 20,
        alignItems: 'center',
      },

      text1: {
        fontFamily: 'Nunito-SemiBold',
        fontWeight: '800',
        fontSize: 35,
        color: '#FFFFFF',
      },
      text2: {
        marginHorizontal: 2,
        fontFamily: 'Nunito-SemiBold',
        fontWeight: '800',
        fontSize: 14,
        color: '#FFFFFF',
      },

      loginDiv: {
        marginVertical: 120,
        marginHorizontal: 20,
      },

      nomeStyle: {
        marginVertical: 10,
        backgroundColor: '#A8FB8A',
        borderWidth: 2,
        borderColor: '#35F331',
        borderRadius: 10,
        fontSize: 11,
        color: '#000000',
        fontWeight: 'bold',


      },
      sobrenomeStyle: {
        marginVertical: -10,
        backgroundColor: '#A8FB8A',
        borderWidth: 2,
        borderColor: '#35F331',
        borderRadius: 10,
        fontSize: 11,
        color: '#000000',
        fontWeight: 'bold',


      },

      containerStyleBtn: {
        alignItens: 'center',
        marginHorizontal: 80,
        height: 60,
        width: 220,
        marginVertical: 10,
      },

      buttonStyle: {
        alignItens:'center',
        backgroundColor: '#35F331',
        borderRadius: 13,
      },


      btmTextView: {
        marginHorizontal: 70,
        marginTop: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },

      textBottom: {
        position: '',
        color: '#FFFFFF',
        fontWeight: 'bold'
      },

      textBTM: {
        backgroundColor: '#18780F',
        
      },
      emailStyle: {
        marginVertical: 10,
        backgroundColor: '#A8FB8A',
        borderWidth: 2,
        borderColor: '#35F331',
        borderRadius: 10,
        fontSize: 11,
        color: '#000000',
        fontWeight: 'bold',


      },
      senhaStyle: {
        marginVertical: -10,
        backgroundColor: '#A8FB8A',
        borderWidth: 2,
        borderColor: '#35F331',
        borderRadius: 10,
        fontSize: 11,
        color: '#000000',
        fontWeight: 'bold',


      },

      mensagem: {
      
        fontWeight: 'bold',
        color:'white', 
        marginTop: 10,
    },


     
    
    
    });

    export default Styles;