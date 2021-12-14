import React from "react"; 
import {NavigationContainer} from '@react-navigation/native'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import Home from './Pages/Direct'; 
import Login from './Pages/Login'; 
import Direct from './Pages/Direct'; 
 
const Stack = createNativeStackNavigator(); 
const Routes = () =>{ 
    return( 
        <NavigationContainer> 
            <Stack.Navigator initialRouteName="Login" 
                screenOptions={{ 
                    headerShown:false, 
                }} 
            > 
                <Stack.Screen name="Home" component={Direct}/> 
                <Stack.Screen name="Login" component={Login}/> 
            </Stack.Navigator> 
        </NavigationContainer> 
    ); 
};  
 
export default Routes;