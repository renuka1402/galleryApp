import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Feather } from "@expo/vector-icons";
import HomeScreen from "./home";
import CartScreen from "./cartscreen";
import Wishlist from "./whishlist";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarIcon: () => <FontAwesome name="home" size={24} color="gray" />,
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
    }} 
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{ tabBarIcon: () => <Feather name="shopping-cart" size={24} color="gray" /> ,
   
 
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
    }} 
      />
            <Tab.Screen 
        name="wishlist" 
        component={Wishlist} 
        options={{ tabBarIcon: () => <Feather name="heart" size={24} color="gray" /> ,
   
 
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
    }} 
      />
                <Tab.Screen 
        name="user" 
        component={Wishlist} 
        options={{ tabBarIcon: () => <Feather name="user" size={24} color="gray" /> ,
   
 
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
    }} 
      />
    </Tab.Navigator>
  );
}
