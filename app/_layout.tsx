import { Stack, Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { Appearance } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {

  const colorScheme = Appearance.getColorScheme()

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  
  return (

    <Tabs screenOptions={{headerStyle:{backgroundColor:theme.headerBackground},tabBarStyle: {
      backgroundColor: "beige", // Set the tab bar background to black
    },headerTintColor:theme.text,headerShadowVisible:false
     }}>
      {/* Define the Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          headerShown:true,
          title: "Home",
          
          
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color="brown"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          headerShown:false,
          title: "contact us",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
            name={focused ? "people-circle" : "people-circle-outline"}
               size={24} color="brown" />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          headerShown:true,
          headerTitleAlign:'center',
          
          
          title: "Coffee Menu",
          
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons   name= "menu-book" 
            size={24} color="brown" />          ),
        }}
      />
      {/* <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Profile', 
          headerShown: true, 
          tabBarLabel: 'Profile'
        }} 
      /> */}

      {/* <Tabs.Screen 
        name="settings" 
        options={{ 
          title: 'Settings', 
          headerShown: true,
          tabBarLabel: 'Settings' 
        }} 
      /> */}

      {/* Additional Stack for screens outside of the main tabs */}
    </Tabs>
  );
}
