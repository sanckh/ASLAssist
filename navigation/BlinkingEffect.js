import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import Blink from '../components/Blink';

export default function BlinkingEffect() {
    return (
        <View style={StyleSheet.body}>
            <View style={{ marginTop: 100 }}>
                <Blink duration={500}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/aslassistfinal.appspot.com/o/Emergency%2Fblind.gif?alt=media&token=9e352d1b-9133-437b-afba-facdae156841'
                        }}>
                    </Image>
                </Blink>

            </View>
            <Text style={styles.text}>
                HI
            </Text>
            <View style={styles.button}>
                <Button title='Over Here' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 90,
        resizeMode: 'contain',
    },
});