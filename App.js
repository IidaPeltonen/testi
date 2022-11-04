import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'https://api.fingrid.fi/';
const APIKEY = 'D1fcMx4D0O6ua4wwnEGHZ9re1lFBsREE5G2tNZ8D';

export default function App() {
  const [data, setData] = useState('')
  useEffect(() => {
    axios
      .get(URL, {headers:{'x-api-key':APIKEY}})
      .then(response => {
        setData(response.data)
        console.log(response.data)
      })
      .catch(error => {
        alert(error)
        console.log('ei onnaa')
      })
  }, [])
     
  return (
    <div id="center">
jee
    </div>
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

