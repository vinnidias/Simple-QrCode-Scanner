import React, { useState, useEffect } from 'react';
import { Text, View, Linking, Button, Image, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import DefaultButton from './DefaultButton'
import styles from '../styles'


export default function Scanner({ onPress }) {
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

    const linkUrl = async (url) => {
        const before = await setScanned(false)
        before
        Linking.openURL(url)
        
    }

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setUrl(`${data}`)

    };

    if (hasPermission === null) {

    }
    if (hasPermission === false) {
        return <Text>Não há permissão para uso da câmera</Text>;
    }

    return (
        <View
            style={{
                padding: 50
            }}>
            <Text style={styles.headerScannerText}> Aponte para o QR Code! </Text>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{
                    height: 500,
                    width: 500,
                    borderBottomWidth: 2,
                    alignSelf: 'center'
                }}
            />
            <View style={{ alignSelf: 'center', margin: 10 }}>
                {scanned
                    ? Alert.alert(
                        "Esse é o link gerado pelo Qr Code: ",
                        `${url}`,
                        [
                            {
                                text: "Cancelar",
                                onPress: () => setScanned(false),
                                style: "cancel"
                            },
                            {
                                text: "Ir", onPress: async () =>  {linkUrl(url); setScanned(false)}
                            }
                        ],
                        { cancelable: false }
                    )
                    : console.log(scanned)
                }
                <DefaultButton onPress={onPress} title={'Voltar'} />
            </View>
        </View>
    );
}
