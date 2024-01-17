import {View,Text,StyleSheet,Button} from "react-native"
export const Home=({navigation})=>{
    return(
        <View style={styles.container}>
      <Text>Welcome from Home Page</Text>
      <Button title="Hello" onPress={()=>navigation.navigate('Profile',{name : "Jane"})}>Go to janes profile</Button>

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