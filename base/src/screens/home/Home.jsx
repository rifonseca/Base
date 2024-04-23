
import * as React from 'react';
import { SafeAreaView, ScrollView,  View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from 'galio-framework';
import mainCardIMG from '../../../res/img/images.jpg';
import { ProgressCircle } from 'react-native-svg-charts'
import { Avatar, Button, Card, Text, LeftContent, RightContent,ProgressBar,MD3Colors} from 'react-native-paper';
import newsimgg from '../../../res/img/newsimg.jpg'
import newsimgg2 from '../../../res/img/newsimg2.jpg'
import newsimgg3 from '../../../res/img/newsimg3.jpg'
import newsimgg4 from '../../../res/img/newsimg4.jpg'
import newsimgg5 from '../../../res/img/newsimg5.jpg'
import styles from './Styles';
function HomeScreen() {
  
  return (
 
            <View style={styles.container}>
                <ScrollView>

                  <Card style={styles.mainCard}>
                      <Card.Cover source={mainCardIMG} style={styles.mainCardIMG}/>
                      <Card.Content style={styles.TextMainCardCont}>
                        <Text style={styles.MainCardText1} variant="titleMedium">Treinos Concluidos na semana:</Text> 
                      </Card.Content>
                      <Card.Content style={styles.TextMainCardCont2}>
                      <ProgressBar style={styles.ProgressBar1} progress={0.5} color='green' />
                      </Card.Content>
                      <Card.Actions>
                      </Card.Actions>
                    </Card>


                    <View style={styles.Title}>
                      <Text style={styles.TitleText} >NOTÍCIAS DO DIA:</Text>
                    </View>
                   

                    <Card style={styles.newsCard}>
                      <Card.Cover style={styles.newsIMG} source={newsimgg} />
                      <Card.Content style={styles.newsTitle}>
                        <Text variant="titleLarge">Titulo Noticia</Text>
                        <Text variant="bodyMedium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe veniam sed dolorum officia atque quos cupiditate tenetur. Adipisci, totam.</Text>
                      </Card.Content>
                      <Card.Actions>
                        <Button textColor='green'>Curtir</Button>
                        <Button buttonColor = 'green'>Ler</Button>
                      </Card.Actions>
                  </Card>
                
                    <Card style={styles.newsCard}>
                      <Card.Cover style={styles.newsIMG} source={newsimgg2} />
                      <Card.Content style={styles.newsTitle}>
                        <Text variant="titleLarge">Titulo Noticia</Text>
                        <Text variant="bodyMedium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe veniam sed dolorum officia atque quos cupiditate tenetur. Adipisci, totam.</Text>
                      </Card.Content>
                      <Card.Actions>
                        <Button textColor='green'>Curtir</Button>
                        <Button buttonColor = 'green'>Ler</Button>
                      </Card.Actions>
                  </Card>
                
                    <Card style={styles.newsCard}>
                      <Card.Cover style={styles.newsIMG} source={newsimgg3} />
                      <Card.Content style={styles.newsTitle}>
                        <Text variant="titleLarge">Titulo Noticia</Text>
                        <Text variant="bodyMedium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe veniam sed dolorum officia atque quos cupiditate tenetur. Adipisci, totam.</Text>
                      </Card.Content>
                      <Card.Actions>
                        <Button textColor='green'>Curtir</Button>
                        <Button buttonColor = 'green'>Ler</Button>
                      </Card.Actions>
                  </Card>
                
                    <Card style={styles.newsCard}>
                      <Card.Cover style={styles.newsIMG} source={newsimgg4} />
                      <Card.Content style={styles.newsTitle}>
                        <Text variant="titleLarge">Titulo Noticia</Text>
                        <Text variant="bodyMedium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe veniam sed dolorum officia atque quos cupiditate tenetur. Adipisci, totam.</Text>
                      </Card.Content>
                      <Card.Actions>
                        <Button textColor='green'>Curtir</Button>
                        <Button buttonColor = 'green'>Ler</Button>
                      </Card.Actions>
                  </Card>
                
                    <Card style={styles.newsCard}>
                      <Card.Cover style={styles.newsIMG} source={newsimgg5} />
                      <Card.Content style={styles.newsTitle}>
                        <Text variant="titleLarge">Titulo Noticia</Text>
                        <Text variant="bodyMedium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe veniam sed dolorum officia atque quos cupiditate tenetur. Adipisci, totam.</Text>
                      </Card.Content>
                      <Card.Actions>
                        <Button textColor='green'>Curtir</Button>
                        <Button buttonColor = 'green'>Ler</Button>
                      </Card.Actions>
                  </Card>
                
                  
                 
                  
                  
                </ScrollView>
                
            </View>
    
  );
}

function WorkoutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Adicione seu treino</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text></Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function HomeP() {
  return (
    <NavigationContainer>
      <Tab.Navigator
           screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'TREINOS') {
              iconName = focused 
              ? 'barbell' 
              : 'barbell-outline';
            }
             else if (route.name === 'PERFIL') {
              iconName = focused 
              ? 'body' 
              : 'body-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="home" component={HomeScreen} options={{ title: 'SMART COACH', 
        headerStyle: {
            backgroundColor: '#46C03B',
            height: 75,

          },
        headerTitleStyle:{
            color: 'white',
            fontSize: 25,
            fontWeight: 800,
            
          },
          headerTitleAlign: 'center',
                      }}/>
        <Tab.Screen name="TREINOS" component={WorkoutScreen} options={{ 
        title: 'TREINOS', 

        headerStyle: {
            backgroundColor: '#46C03B',
            height: 75,

          },
        headerTitleStyle:{
            color: 'white',
            fontSize: 25,
            fontWeight: 800,
            
          },
          headerTitleAlign: 'center',
        }}

        />
        <Tab.Screen name="PERFIL" component={ProfileScreen} options={{ 
        title: 'PERFIL', 

        headerStyle: {
            backgroundColor: '#46C03B',
            height: 75,

          },
        headerTitleStyle:{
            color: 'white',
            fontSize: 25,
            fontWeight: 800,
            
          },
          headerTitleAlign: 'center',
        }}

        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

