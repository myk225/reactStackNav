import { Text, View,Button,StyleSheet } from "react-native";

export const Profile=(props)=>{
    return(
        <View style={styles.container}>
            <Text>
                {props.route.params.name} 's  profile
            </Text>
            <Button title="go to welcome" onPress={()=>props.navigation.navigate("Orders",{name:"jane"})}></Button>
           
                   </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });