import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const myName = 'Eunice';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texts: {
      fontSize: '24',
    }, 
    textStyle: {
      fontWeight: `${myName} === 'Eunice' ? 'bold' : 'normal'`,
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.texts}>My name is {myName}</Text>
      <StatusBar style={styles.auto} />
    </View>
  );
}


