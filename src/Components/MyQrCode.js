import React, { useState, useEffect } from 'react';
import { Text, View, Linking, Image, TouchableOpacity,  Alert} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import DefaultButton from './DefaultButton'
import InstaButton from './InstaButton'
import AdButton from './AdButton'
import styles from '../styles'

export default function MyQrCode({route, navigation}) {

    const url = 'https://github.com/vinnidias'
    const instaUrl = 'https://www.instagram.com/vinni.diass/'

    return (
        <View style={{ paddingTop: 40, paddingHorizontal: 20, marginBottom: 20, flex: 1 }}>
            <View style={styles.adHeader}>
                <AdButton onAdPress={()=> navigation.navigate('CouponSelectorScreen')} />
                <InstaButton onInstaPress={() => Linking.openURL(instaUrl)} />
            </View>
            <TouchableOpacity
                style={styles.qrCodeContainer}
                onPress={() => {
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
                }}>
                <Image
                    source={require('../../assets/icon.png')}
                    style={{ height: 330, width: 330, alignSelf: 'center' }}
                />
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                <DefaultButton onPress={()=> navigation.navigate('ScannerScreen')} title={'Ler um Qr Code!'} />
            </View>
        </View>
    )
}