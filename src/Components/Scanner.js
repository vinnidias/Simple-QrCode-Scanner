import React, { useState, useEffect } from 'react';
import { Text, View, Linking, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from '../styles'


export default function Scanner() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [url, setUrl] = useState('')

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []
    );

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setUrl(`${data}`)

    };

    if (hasPermission === null) {
        return <Text>Requisitando acesso para a câmera</Text>;
    }
    if (hasPermission === false) {
        return <Text>Não há permissão para uso da câmera</Text>;
    }

    return (
        <View
            style={{
                padding: 50
            }}>
            <Text style={styles.headerScannerText} >Posicione a Câmera no QrCode</Text>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{
                    height: 300,
                    width: 500,
                    borderBottomWidth: 2,
                    alignSelf: 'center'
                }}
            />
            <View style={{ alignSelf: 'center' }}>
                {scanned
                    ? Linking.openURL(url)
                    : <Button title={'Voltar'}/>
                }
            </View>
        </View>
    );
}
