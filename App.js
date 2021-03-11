import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './src/styles'
import Scanner from './src/Components/Scanner'
import MyQrCode from './src/Components/MyQrCode'

export default function App() {
  const [visible, setVisible] = useState(false)

  return (
    <View>
      {
        visible
          ? <Scanner onPress={()=> setVisible(false)}/>
          : <MyQrCode 
              onPress={()=> setVisible(true)}
            />
      }
    </View>


  );
}


