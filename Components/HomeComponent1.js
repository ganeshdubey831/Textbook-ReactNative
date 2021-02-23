import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Icon } from 'native-base';
const window = Dimensions.get('window')
const slides = [
    {
        key: 's1',
        image: require('../Images/q1.jpeg'),
        text: "Quotes 1"
    },
    {
        key: 's2',
        image: require('../Images/q5.jpeg'),
        text: "Quotes 2"
    },
    {
        key: 's3',
        image: require('../Images/q3.jpeg'),
        text: "Quotes 3"
    },
    {
        key: 's4',
        image: require('../Images/q4.jpeg'),
        text: "Quotes 4"
    },
    {
        key: 's5',
        image: require('../Images/q7.jpeg'),
        text: "Quotes 5"
    },
    {
        key: 's6',
        image: require('../Images/q8.jpeg'),
        text: "Quotes 6"
    },
    {
        key: 's7',
        image: require('../Images/q10.jpeg'),
        text: "Quotes 7"
    },
    {
        key: 's8',
        image: require('../Images/q9.jpeg'),
        text: "Quotes 8"
    },
];


export default class HomeComponent1 extends Component {

    _renderItem = ({ item }) => {
        return (
            <View style={{ backgroundColor: "white" }}>
                <Image style={[styles.image,]} source={item.image} />
                {/* <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "bold", color: "gray" }}>{item.text}</Text> */}
            </View>
        );
    }
    _renderNextButton = () => {
        return (
            <View>
                <Icon type="AntDesign" style={{ color: 'white', fontSize: 35, }} name='rightcircle' />
            </View>
        );
    };
    _renderPrevButton = () => {
        return (
            <View>
                <Icon type="AntDesign" style={{ color: 'white', fontSize: 35, }} name='leftcircle' />
            </View>
        );
    };
    _renderDoneButton = () => {
        return (
            <View>
                {/* <Icon type="AntDesign" style={{ color: 'white', fontSize: 35, }} name='checkcircle' /> */}
            </View>
        );
    };
    render() {
        return (
            <AppIntroSlider renderItem={this._renderItem} data={slides} activeDotStyle={{ width: 18, backgroundColor: "white", }} renderNextButton={this._renderNextButton} renderPrevButton={this._renderPrevButton} renderDoneButton={this._renderDoneButton} showPrevButton="false" showDoneButton="false" />
        );
    }
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: window.height - 500,
        alignSelf: "center",
        borderRadius: 10,
        // borderTopRightRadius: 40,
        // borderBottomLeftRadius: 40,

        resizeMode: "stretch",
    }
});
