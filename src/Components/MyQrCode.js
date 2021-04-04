import React, { useState, useEffect } from 'react';
import { Text, View, Linking, Button, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import DefaultButton from './DefaultButton'
import InstaButton from './InstaButton'
import AdButton from './AdButton'
import styles from '../styles'

export default function MyQrCode({ onQrPress, onImgPress, onAdPress, onInstaPress }) {
    return (
        <View style={{paddingTop: 40, paddingHorizontal: 20, marginBottom: 20 }}>
            <View style={styles.adHeader}>
                <AdButton onAdPress={onAdPress}/>
                <InstaButton onInstaPress={onInstaPress}/>
            </View>
            <TouchableOpacity style={styles.qrCodeContainer} onPress={onImgPress}>
                <Image
                    source={require('../../assets/icon.png')}
                    style={{ height: 330, width: 330, alignSelf: 'center' }}
                />
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                <DefaultButton onPress={onQrPress} title={'Ler um Qr Code!'} />
            </View>
        </View>
    )
}