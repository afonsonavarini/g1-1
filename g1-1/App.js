import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Resultado from './src/pages/Resultado';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff'
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: 'Média de Consumo' }}></Stack.Screen>
        <Stack.Screen name="Resultado" component={Resultado} options={{ title: 'Resultado' }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
