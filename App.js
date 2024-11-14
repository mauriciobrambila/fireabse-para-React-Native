import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './src/firebase/firebaseconection'

console.disableYellowBox = true;

export default function App() {

  const [nome, setNome] = useState('carregando')
  const [idade, setIdade] = useState('carregando')
  const [nome2, setNome2] = useState('carregando')
  const [idade2, setIdade2] = useState('carregando')

  useEffect(() => {

    async function Dados() {

      // Aqui e o metodo ON (olheiro) sempre busca algo diferente e coloca na tela
      await firebase.database().ref('Usuarios').child(1).on('value', (snapshot) => {
        setNome(snapshot.val().nome);
        setIdade(snapshot.val().idade);
      })
      //Aqui e o metodo once( adciona na tela apenas uma vez),apos efetuar atualização no database
      //precisa atualziar aplicação para refletir
      await firebase.database().ref('Usuarios').child(2).once('value').then((snapshot) => {
        setNome2(snapshot.val().nome);
        setIdade2(snapshot.val().idade);
      })
    }
    Dados();//cuidado aqui e uma função então dados()
  }, [])

  return (
    <View style={styles.container}>
      <Text>{nome}</Text>
      <Text>{idade}</Text>
      <Text>{nome2}</Text>
      <Text>{idade2}</Text>
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
