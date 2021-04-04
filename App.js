import React, { useState } from 'react';
import { Text, View, Alert, Linking } from 'react-native';
import styles from './src/styles'
import Scanner from './src/Components/Scanner'
import MyQrCode from './src/Components/MyQrCode'

export default function App() {
  const [visible, setVisible] = useState(false)
  const url = 'https://github.com/vinnidias'
  const instaUrl = 'https://www.instagram.com/vinni.diass/'


  return (
    <View style={{flex: 1}}>
      {
        visible
          ? <Scanner onPress={() => setVisible(false)} />
          : <MyQrCode
            onInstaPress={() => Linking.openURL(instaUrl)}
            onQrPress={() => setVisible(true)}
            onImgPress={() => {
              Alert.alert(
                "Esse é o link desse Qr Code: ",
                `${url}`,
                [
                  {
                    text: "Cancelar",
                    onPress: () => { cancelable: true },
                    style: "cancel"
                  },
                  {
                    text: "Ir", onPress: async () => { Linking.openURL(url) }
                  }
                ],
                { cancelable: false }
              )
            }}
          />
      }
    </View>


  );
}


