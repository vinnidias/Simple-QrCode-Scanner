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
                    imagePath={require('../Images/ame-icon.png')}
                    description={'Ame Digital: Um Super App com cashback e muito mais.Descubra o super app da Ame: pagar, vender com QR code, recarregar o celular, compra créditos para jogar on-line e muito mais.'}
                    onPress={() => Linking.openURL('https://usea.me/downloadapp')}
                    codeText={'Use o código vCQiJ na hora de criar sua conta!'}
                />
                <CouponCard
                    imagePath={require('../Images/picpay-icon.png')}
                    description={'PicPay. Todo mundo usa, todo lugar aceita. Com PicPay, você movimenta seu dinheiro e faz todos os seus pagamentos de uma maneira simples e rápida. Tudo pelo celular.'}
                    onPress={() => Linking.openURL('http://www.picpay.com/convite?HW8RJY')}
                    codeText={'Utilize o código HW8RJY e ganhe R$10,00'}
                />

                <CouponCard
                    imagePath={require('../Images/meliuz-icon.png')}
                    description={'Descubra como ganhar cashback em suas compras, usando o Méliuz. Dica: você não precisa ter o Cartão Méliuz para ganhar!'}
                    onPress={() => Linking.openURL('https://www.meliuz.com.br/i/ref_fb8f7e0a?ref_source=29')}
                    codeText={'Toque no cupom para acessar o link!'}
                />


                <CouponCard
                    imagePath={require('../Images/honeygain.png')}
                    description={'O Honeygain é um serviço que gera uma renda passiva aos usuários que disponibilizam o uso de seu tráfego de rede. O aplicativo é 100% seguro, todas as conexões com os dispositivos são criptografadas com segurança e nenhum dado é armazenado de forma indevida.'}
                    onPress={() => Linking.openURL('https://r.honeygain.me/VINICE8FD0')}
                    codeText={'Toque no cupom para começar com US$ 5,00!'}
                />

                <CouponCard
                    imagePath={require('../Images/kwai.png')}
                    description={'O Kwai, rede social de vídeos curtos e tendências para Android e iPhone, lançou a campanha Kwai Golds para que usuários ganhem dinheiro à medida que completam missões no aplicativo.'}
                    onPress={() => Linking.openURL('https://m.kwai.app/s/WrIRJS98')}
                    codeText={'Toque no cupom para acessar o link e ganhar um bônus!'}
                />

                <CouponCard
                    imagePath={require('../Images/paid-to-read-email.png')}
                    description={'Ganhe dinheiro com o paid-to-read-email.com. Você gostaria de ser pago por ler e-mails pagos online? Parece fácil? Pois é! Receba e-mails pagos diariamente em sua caixa de entrada ...'}
                    onPress={() => Linking.openURL('https://www.paid-to-read-email.com/?r=1070357')}
                    codeText={'Toque no cupom para acessar o link e já ganhar alguns dólares extra!'}
                />


            </ScrollView>

            <View style={{ justifyContent: 'center', margin: 10 }}>

                <DefaultButton onPress={() => navigation.navigate('MyQrCodeScreen')} title={'Voltar'} />

            </View>
        </View>
    )
}