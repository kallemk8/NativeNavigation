
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Profilescreen() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
       <Button  title='Back to Home' onPress={()=>navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
