import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
 import MainStack from './MainStack';


const Stack=createStackNavigator();


export default function(){

    return(
        <NavigationContainer>
            <Stack.Navigator>
               
            {MainStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
