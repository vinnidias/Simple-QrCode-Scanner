import React, { useEffect, useState } from 'react';
import { Text, View, Alert, Linking, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CouponCard from './CouponCard';
import DefaultButton from './DefaultButton';


export default function CouponSelector({ route, navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
            <ScrollView>
                <CouponCard
                    imagePath={require('../Images/honeygain.png')}
                    description={'O Honeygain é um serviço que gera uma renda passiva aos usuários que disponibilizam o uso de seu tráfego de rede. O aplicativo é 100% seguro, todas as conexões com os dispositivos são criptografadas com segurança e nenhum dado é armazenado de forma indevida.'}
                />

                <CouponCard
                    imagePath={require('../Images/honeygain.png')}
                    description={'O Honeygain é um serviço que gera uma renda passiva aos usuários que disponibilizam o uso de seu tráfego de rede. O aplicativo é 100% seguro, todas as conexões com os dispositivos são criptografadas com segurança e nenhum dado é armazenado de forma indevida.'}
                />
            </ScrollView>

            <View style={{ justifyContent: 'center', margin: 30 }}>

                <DefaultButton onPress={() => navigation.navigate('MyQrCodeScreen')} title={'Voltar'} />

            </View>
        </View>
    )
}