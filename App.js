import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
// COMMIT FINAL 
/*
 echo "#nome-pasta" >> README.md
 git init 
 git status -u
 git add .
 git status -u
 git commit -m "first commit"
 git config user.email "matheus.biavati@escola.pr.gov.br"
 git config user.name "matheus"
 git commit -m "first commit"
 git status -u
 git remote add origin "link"
 git push -u origin master
 git log 
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
