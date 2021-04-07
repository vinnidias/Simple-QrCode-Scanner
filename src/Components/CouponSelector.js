import React, { useEffect, useState } from 'react';
import { Text, View, Alert, Linking, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CouponCard from './CouponCard';
import DefaultButton from './DefaultButton';


export default function CouponSelector({ route, navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}>
            <View style={{ margin: 5 }}>
                <Image
                    source={require('../Images/dollar-icon.png.png')}
                    style={{ height: 35, width: 35, alignSelf: 'center' }}
                />
                <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', fontFamily: 'sans-serif-medium' }}>
                    Ganhe dinheiro com os nossos links!
                </Text>
                <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>
                    🤑🤑🤑
                </Text>
            </View>
            <ScrollView>
                <CouponCard
                    imagePath={require('../Images/honeygain.png')}
                    description={'O Honeygain é um serviço que gera uma renda passiva aos usuários que disponibilizam o uso de seu tráfego de rede. O aplicativo é 100% seguro, todas as conexões com os dispositivos são criptografadas com segurança e nenhum dado é armazenado de forma indevida.'}
                    onPress={() => Linking.openURL('https://r.honeygain.me/VINICE8FD0')}
                />

                <CouponCard
                    imagePath={require('../Images/kwai.png')}
                    description={'O Kwai, famosa rede social de vídeos curtos e tendências para Android e iPhone (iOS), lançou a campanha Kwai Golds para que usuários ganhem dinheiro à medida que completam missões no aplicativo, como assistir a vídeos, fazer check-in diário, convidar pessoas para a plataforma, entre outras atividades.'}
                    onPress={() => Linking.openURL('https://m.kwai.app/s/WrIRJS98')}
                />

                <CouponCard
                    imagePath={require('../Images/meliuz-icon.png')}
                    description={'Descubra como ganhar cashback em suas compras, usando o Méliuz. Dica: você não precisa ter o Cartão Méliuz para ganhar!'}
                    onPress={() => Linking.openURL('https://www.meliuz.com.br/i/ref_fb8f7e0a?ref_source=29')}
                />
                <CouponCard
                    imagePath={require('../Images/paid-to-read-email.png')}
                    description={'Ganhe dinheiro com o paid-to-read-email.com. Você gostaria de ser pago por ler e-mails pagos online? Parece fácil? Pois é! Receba e-mails pagos diariamente em sua caixa de entrada ...'}
                    onPress={() => Linking.openURL('https://www.paid-to-read-email.com/?r=1070357')}
                />


            </ScrollView>

            <View style={{ justifyContent: 'center', margin: 10 }}>

                <DefaultButton onPress={() => navigation.navigate('MyQrCodeScreen')} title={'Voltar'} />

            </View>
        </View>
    )
}