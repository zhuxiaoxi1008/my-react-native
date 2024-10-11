import { Text, View, StyleSheet } from 'react-native';
import { Link,Stack } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';

export default function AboutScreen() {
  return (

        <View style={styles.container}>
          <Text >About Us</Text>
          <Link href="/" style={styles.button}>Go to home screen</Link>
          <Link href="/zzzz" style={styles.button}>not found page 404</Link>
        </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'darkblue'
  }

});
