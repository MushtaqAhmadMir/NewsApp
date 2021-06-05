import React from 'react'
import { View, Text, StyleSheet ,Dimensions} from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>NEWS APP</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    header:
    {
        backgroundColor:'#e6fff2',
        height:windowHeight/9,
        width:windowWidth,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:.5
    },
    headerText:
    {
        fontSize:30,
        fontWeight:"bold"
    }

})