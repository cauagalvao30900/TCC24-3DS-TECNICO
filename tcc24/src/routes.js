import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator, Image, StatusBar } from 'react-native';
import Home from './pages/Home/Home';
import New from './pages/New/New';
import Perfil from './pages/Perfil/Perfil';
import Aulas from './pages/Aulas/Aulas';
import Search from './pages/PC bottleneck/PC bottleneck';
import Rct from './pages/Rct/Rct';
import RstBasic from './pages/Rct/RstBasic'; 
import ButtonNew from './pages/components/ButtonNew';
import { Entypo, Feather } from '@expo/vector-icons';
import reactj from './pages/New/reactj';
import Code from  './Code/Code';
import Telaperfil from './pages/Perfil/Telaperfil';
import Singup from './pages/Perfil/Singup';
import phpp from './pages/New/phpp';
import sql from './pages/New/sql';
import html from './pages/New/html';
import hardware from './pages/New/hardware';
import Rstinter from './pages/Rct/Rstinter';
import Rstavanced from './pages/Rct/Rstavanced';
import aula2 from '../Aulasreact/aula2';
import aula3 from '../Aulasreact/aula3';
import aula4 from '../Aulasreact/aula4';
import aula5 from '../Aulasreact/aula5';
import pcbottleneck from './pages/PC bottleneck/PC bottleneck';
import shop from '../Shop/Shop';
import Shop from '../Shop/Shop';
import Contatar from './pages/Perfil/Contatar';
import sobrenos from './pages/Perfil/Equipe';
import Equipe from './pages/Perfil/Equipe';
import privacidade from './pages/Perfil/privacidade';
import relatarerro from './pages/Perfil/relatarerro';
import phpbasic from '../php/phpbasic';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FFFF',
          height: 80,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        },
        tabBarActiveTintColor: '#007FFF',
        tabBarLabelStyle: {
          marginTop: 4,
        },
        tabBarIconStyle: {
          marginTop: 10, // Altere aqui para ajustar a distância vertical dos ícones em relação aos títulos
        }
      }}>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Code"
        component={Code}
        options={{
          tabBarLabel: 'Code',
          tabBarIcon: ({ size, color }) => (
            <Feather name="edit" size={size} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Video Aulas"
        component={New}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, color }) => (
            <ButtonNew size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Aulas"
        component={Aulas}
        options={{
          tabBarLabel: 'Documentos',
          tabBarIcon: ({ size, color }) => (
            <Feather name="file-text" size={size} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color="black" />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://cdn.discordapp.com/attachments/826597059355607040/1217971341710458960/Imagem_do_WhatsApp_de_2024-02-24_as_00.03.55_996c878f.jpg?ex=6605f734&is=65f38234&hm=9c893f99dbd9f114a7c91106a6aaa8da98ee9a9a973be1bdc31ef7846f0fd009&' }}
          style={{ width: 200, height: 200 }}
        />
      </View>
    );
  }

  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Rct"
          component={Rct}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RstBasic"
          component={RstBasic}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Rstinter"
          component={Rstinter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Rstavanced"
          component={Rstavanced}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="reactj"
          component={reactj}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="phpp"
          component={phpp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="sql"
          component={sql}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="htmls"
          component={html}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="hardware"
          component={hardware}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PC bottleneck"
          component={pcbottleneck}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Aula2"
          component={aula2}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="aula3"
          component={aula3}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="aula4"
          component={aula4}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="aula5"
          component={aula5}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Shop"
          component={Shop}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Contatar"
          component={Contatar}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Equipe"
          component={Equipe}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="privacidade"
          component={privacidade}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="relatarerro"
          component={relatarerro}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="phpbasic"
          component={phpbasic}
          options={{ headerShown: false }}
        />















        <Stack.Screen
          name="Telaperfil"
          component={Telaperfil}
          options={{
            headerTitle: 'Perfil',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#D3D3D3',
            },
          }}
        />

        <Stack.Screen
          name="Singup"
          component={Singup}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
      {isLoading && (
        <ActivityIndicator
          style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          size="large"
          color="#007FFF"
          animating={true}
        />
      )}
    </>
  );
}
