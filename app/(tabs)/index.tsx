import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./store";
import SplashScreen from "./open";
import Slider from "./slider";
import Slider1 from "./slider1";
import Slider2 from "./slider2";
import SignupScreen from "./Singup";
import LoginScreen from "./Login";
import ForgotPasswordScreen from "./Pasword";
import ProductDetailsScreen from "./productDetail";
import CartScreen from "./cartscreen";
import BottomTabNavigator from "./buttomnav"; 
import Wishlist from'./whishlist'
import Notification from'./notification'

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
     
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Slider" component={Slider} />
          <Stack.Screen name="Slider1" component={Slider1} />
          <Stack.Screen name="Slider2" component={Slider2} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          
         
          <Stack.Screen name="home" component={BottomTabNavigator} />

          <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
          <Stack.Screen name="Cartscreen" component={CartScreen} />
          <Stack.Screen name="wishlist" component={Wishlist} />
     
          <Stack.Screen name="notification" component={Notification} />
        </Stack.Navigator>
    
    </Provider>
  );
}
