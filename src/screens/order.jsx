import { Button, StyleSheet, Text, View } from "react-native"

export const Orders=({navigation,route})=>{
    return <View>
            <Text>
            {route.params.name} has requested for orders
            </Text>
            <Text>
                Thanks, we are processing you request
            </Text>
    </View>
}

const stles=StyleSheet.create({
    container : {
        flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
})