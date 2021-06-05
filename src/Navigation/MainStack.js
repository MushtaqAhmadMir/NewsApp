import React, { Fragment } from "react";
import { createStackNavigator } from '@react-navigation/stack';

import News from "../Screen/News";
import NewsDetail from "../Screen/NewsDetail";




const Stack = createStackNavigator();


function MainStack(Stack) {

    return (
        <Fragment>
            <Stack.Screen
                component={News}
                options={{
                    headerShown: false
                }}
                name={'News'}

            />
            <Stack.Screen
                component={NewsDetail}
                options={{
                    headerShown: false
                }}
                name={'NewsDetail'}

            />
          
        </Fragment>
    )


}


export default MainStack