import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button
        title="Press me"
        color=""
        onPress={() => console.log('Button with adjusted color pressed')}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
