import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Shopping</Text>
      <Text style={styles.subtitle}>monte sua lista de compra te ajudar nas compras</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="e-mail" />
        <TextInput style={styles.input} placeholder="senha" />
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Frase 1</Text>
          <Text style={styles.bottomText}>Frase 2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#8988c6',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: '#8988c6',
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    padding: 20, // Espaçamento interno
    borderRadius: 10, // Borda arredondada
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2', // Fundo branco dentro do input
    borderRadius: 5, // Borda arredondada
    color: 'black', // Cor do texto
  },
  button: {
    width: '100%',
    backgroundColor: '#33b36e',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5, // Borda arredondada
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  bottomText: {
    fontSize: 16,
  },
});
