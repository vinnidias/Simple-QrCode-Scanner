import React, { useState, useEffect } from 'react';
import { Text, View, Linking, Button, Image, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import DefaultButton from './DefaultButton'
import styles from '../styles'

export default function MyQrCode({onPress}) {
    return (
        <View style={{ flex: 1, padding: 20, marginTop: 50 }}>
            <View style={styles.qrCodeContainer}>
                <Image
                    source={require('../../assets/icon.png')}
                    style={{ height: 330, width: 330, alignSelf: 'center' }}
                />
            </View>
            <View style={styles.buttonContainer}>
                <DefaultButton onPress={onPress} title={'Ler um Qr Code!'}/>
            </View>
        </View>
    )
}