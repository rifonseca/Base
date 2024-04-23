import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#46C03B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    h1Style: {
        fontFamily: 'Nunito-SemiBold',
        fontWeight: '800',
        fontSize: 35,
        color: '#FFFFFF',
      },
    
      
      buttonStyles: {
        backgroundColor: '#35F331',
        borderWidth: 2,
        borderColor: '#35F331',
        borderRadius: 40,
      },
      button2Styles: {
        backgroundColor: '#46C03B',
        borderWidth: 2,
        borderColor: '#46C03B',
        borderRadius: 30,
        marginVertical: 10,
      },

      containerStyle:{
          position: 'absolute',
          bottom: 0,
          width: 275,
          marginHorizontal: 50,
          
        },
        

        
    });
    
    export default Styles;