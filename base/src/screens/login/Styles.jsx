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
        marginVertical: 150,
        marginHorizontal: 20,
      },

      EmailStyle: {
        marginVertical: 15,
        backgroundColor: '#A8FB8A',
        borderWidth: 2,
        borderColor: '#35F331',
        borderRadius: 10,
        fontSize: 11,
        color: '#000000',
        fontWeight: 'bold',


      },
      senhaStyle: {
        marginVertical: -5,
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
        marginHorizontal: 70,
        height: 70,
        width: 230,
        marginVertical: 10,
      },

      buttonStyle: {
        alignItens:'center',
        backgroundColor: '#35F331',
        borderRadius: 13,
      },


      btmTextView: {
        marginTop: 85,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },

      textBottom: {
        color: '#FFFFFF',
        fontWeight: 'bold'
      },

      textBTM: {
        backgroundColor: '#18780F',
        
      }

     
    
    
    });

    export default Styles;