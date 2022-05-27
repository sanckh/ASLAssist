
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ASLAssist</Text>
      <Text style={styles.text}>Hello World!</Text>
      <Text style={styles.text}>Hello World Two!</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  text: {
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 36
  },
  // inputText: {
  //   fontColor: '414141',
  //   fontSize: 24,
  //   alignItems: 'left'
  // }
});
