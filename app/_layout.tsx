import { Stack, Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { Appearance } from "react-native";

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  
  return (
    <Tabs screenOptions={{headerStyle:{backgroundColor:theme.headerBackground},headerTintColor:theme.text,headerShadowVisible:false
     }}>
      {/* Define the Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          headerShown:false,
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          headerShown:true,
          title: "contact us",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="people-circle" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          headerShown:true,
          headerTitleAlign:'center',
          title: "coffee shop menu",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="people-circle" size={24} color="black" />
          ),
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
