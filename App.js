import 'react-native-gesture-handler';
import React,{useEffect, useState} from 'react';
import {Image} from "react-native";
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Parking, Tickets, Account, Help} from "./src/components/screens/index"

const Tab = createBottomTabNavigator();


function Home() {
  
  return (
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSrc;

          if (route.name === 'Parking') {
            iconSrc = require("./assets/compass.png");
          } else if (route.name === 'Tickets') {
            iconSrc = require("./assets/ticket.png");
          } else if (route.name == "Account") {
            iconSrc = require("./assets/account.png");
          } else if (route.name == "Help") {
            iconSrc = require("./assets/info.png");
          }

          return <Image source={iconSrc} style={{width: "25%", height: "60%", tintColor: color}}/>;
        },
      })}   
      tabBarOptions={{
        activeTintColor: '#D12111',
        inactiveTintColor: 'gray',
        showIcon: true,
        showLabel: true,
        style: {backgroundColor: "#FFFFFF"},
        
      }}>
        <Tab.Screen name="Parking" component={Parking}/>
        <Tab.Screen name="Tickets" component={Tickets}/>
        <Tab.Screen name="Account" component={Account}/>
        <Tab.Screen name="Help" component={Help}/>
      </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown: false,gestureEnabled: false,}}>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false, animationEnabled: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
