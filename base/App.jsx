
 import IMC from "./src/components/atv's/atv-imc/IMC";
 import InputMask from "./src/components/Examples/Input-Mask/Index";
 import Rotas from "./src/components/Examples/List/Index";
 import ListaAlunos from "./src/components/Examples/List/Index";
 import ScrolH from "./src/components/Examples/ScrollHorizontal/ScrolH";
 import HomeP from "./src/screens/home/Home";
 import LogHome from "./src/screens/LogHome/LogHome";
 import Examples from "./src/screens/LogHome/LogHome";
 import Login from "./src/screens/login/Login";
 import Signin from "./src/screens/sign-in/Signin"
 import home from "./src/components/Home/homeStart";
import Home from "./src/components/Home/homeStart";
import Listar from './src/components/Home/Listar';
import Cadastrar from "./src/components/Home/cadastrar";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Deletar from "./src/components/Home/Deletar";
import Atualizar from "./src/components/Home/Atualizar";


const Stack = createStackNavigator();

 function App() {
   return (  
    
  //  <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen
  //         name="LogHome"
  //         component={LogHome}
  //         options={{ title: '', 
  //           headerStyle: {
  //           backgroundColor: '#46C03B',
  //           height: 5
  //           }}}
  //       />
  //       <Stack.Screen
  //         name="Signin"
  //         component={Signin}
  //         options={{ title: 'SMART COACH', 
  //         headerStyle: {
  //         backgroundColor: '#18780F',
  //         height: 70
  //         },
  //         headerTitleStyle:{
  //           color: 'white',
  //           fontSize: 25,
  //           fontWeight: 800,
       
  //         },
  //         headerTitleAlign: 'center',
   
  //       }}
  //       />
  //       <Stack.Screen
  //         name="Login"
  //         component={Login}
  //         options={{ title: 'SMART COACH', 
  //         headerStyle: {
  //         backgroundColor: '#18780F',
  //         height: 70,
  //         },
  //         headerTitleStyle:{
            
  //           color: 'white',
  //           fontSize: 25,
  //           fontWeight: 800,
       
  //         },
  //         headerTitleAlign: 'center',
  //       }}
  //       />
  //     </Stack.Navigator>
  //   </NavigationContainer>

  // <Home/>

  
    <NavigationContainer>
<Stack.Navigator InitialRouteName="Home">
  <Stack.Screen name="Home" component={Home}/>
  <Stack.Screen name="Cadastrar" component={Cadastrar}/>
  <Stack.Screen name="Listar" component={Listar}/>
  <Stack.Screen name="Deletar" component={Deletar}/>
  <Stack.Screen name="Atualizar" component={Atualizar}/>
</Stack.Navigator>
    </NavigationContainer>
 

 
   );
 }
 export default App;

//Botôes de navegação

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="home">
    //     <Stack.Screen name="Home" component={Home}/>
    //     <Stack.Screen name="Cadastrar" component={Cadastrar}/>
    //   </Stack.Navigator>
    // </NavigationContainer>