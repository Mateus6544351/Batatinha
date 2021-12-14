import React from "react"; 
import {NavigationContainer} from '@react-navigation/native'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import Home from './Pages/Home'; 
import Login from './Pages/Login'; 
import Direct from './Pages/Direct'; 
 
const Stack = createNativeStackNavigator(); 
const Routes = () =>{ 
    return( 
        <NavigationContainer> 
            <Stack.Navigator initialRouteName="Home" 
                screenOptions={{ 
                    headerShown:false, 
                }} 
            > 
                <Stack.Screen name="Direct" component={Direct}/> 
                <Stack.Screen name="Home" component={Home}/> 
                <Stack.Screen name="Login" component={Login}/> 
            </Stack.Navigator> 
        </NavigationContainer> 
    ); 
};  
 
export default Routes;