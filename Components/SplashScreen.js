import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, StyleSheet, Image, AsyncStorage } from 'react-native';
import Spinner from './Spinner'
import { Actions } from 'react-native-router-flux'
const window = Dimensions.get('window')
export default class SplashScreen extends Component {
    render() {
        setTimeout(() => {
            Actions.Home()
        }, 2000);
        return (
            <View style={styles.container}>
                <ImageBackground style={{ width: "100%", height: window.height, flex: 1, alignItems: "center", justifyContent: "center" }} source={require('../Images/book1.jpg')}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Text style={styles.text}>BOOK STORE</Text>
                        <Spinner size={60} />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontWeight: "bold",
        fontSize: 40,
        marginBottom: "30%",
        color: 'white'
    },
});
