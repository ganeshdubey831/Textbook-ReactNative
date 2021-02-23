import React, { Component } from 'react';
import { BackHandler, StyleSheet, Image, ScrollView, ImageBackground, View, Dimensions, Text, TouchableOpacity, ToastAndroid, Platform, AlertIOS, Alert } from 'react-native';
import { Actions } from "react-native-router-flux";
import { List, ListItem, Icon } from 'native-base';
import { Button, } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import { SocialIcon } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';

const window = Dimensions.get('window')


export default class Sidebar extends Component {

    componentDidMount = async () => {
        await AsyncStorage.getItem('username').then((value) => this.setState({ 'username': value }));
        await AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }));
    }
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            name: "",
        };
    }
    // UNSAFE_componentWillMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    // }

    // UNSAFE_componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    // }

    // handleBackButton = () => {
    //     Alert.alert("Hold on!", "Are you sure you want to Exit this App by?", [
    //         {
    //             text: "Cancel",
    //             onPress: () => null,
    //             style: "cancel"
    //         },
    //         { text: "YES", onPress: () => BackHandler.exitApp() }
    //     ]);
    //     return true;
    // };
    notifyMessage9std() {
        if (Platform.OS === 'android') {
            ToastAndroid.show("9 STD TEXTBOOK", ToastAndroid.SHORT);
            Actions.Home9std()


        } else {
            AlertIOS.alert("message");
            Actions.Home9std()
        }
    }
    notifyMessage10std() {
        if (Platform.OS === 'android') {
            ToastAndroid.show("10 STD TEXTBOOK", ToastAndroid.SHORT);
            Actions.Home10std()


        } else {
            AlertIOS.alert("message");
            Actions.Home10std()
        }
    }
    notifyMessage11std() {
        if (Platform.OS === 'android') {
            ToastAndroid.show("11 STD TEXTBOOK", ToastAndroid.SHORT);
            Actions.Home11std()


        } else {
            AlertIOS.alert("message");
            Actions.Home11std()
        }
    }
    notifyMessage12std() {
        if (Platform.OS === 'android') {
            ToastAndroid.show("12 STD TEXTBOOK", ToastAndroid.SHORT);
            Actions.Home12std()


        } else {
            AlertIOS.alert("message");
            Actions.Home12std()
        }
    }
    notifyMessagecomps() {
        if (Platform.OS === 'android') {
            ToastAndroid.show("Computer Engineering Books", ToastAndroid.SHORT);
            Actions.CompEnggHome()


        } else {
            AlertIOS.alert("message");
            Actions.CompEnggHome()
        }
    }
    logout = () => {

        Alert.alert("Alert!", "Are You Sure You Want To Logout!!", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "OK", onPress: this.dologout, }
        ]);
    }
    dologout = async () => {
        await AsyncStorage.setItem('islogin', 'no');
        Actions.Login();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#f4f4f4" }}>
                {/* <ImageBackground style={{ width: '100%', height: "100%", flex: 1, alignItems: "center", justifyContent: "center" }} source={require('../Images/square.jpeg')}> */}
                <ScrollView>
                    <TouchableOpacity onPress={() => this.props.close()} >
                        <Icon type="AntDesign" style={{ color: 'black', fontSize: 35, padding: 10, left: "80%" }} name='close' />
                    </TouchableOpacity>

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ marginHorizontal: 20 }}>
                            <Icon type="MaterialIcons" style={{ color: '#E9446A', fontSize: 35, }} name='account-circle' />
                        </View>
                        <View style={{ marginHorizontal: 5 }}>
                            <Text style={{ fontWeight: "700", fontSize: 12, color: "black" }}>Welcome!</Text>
                            <Text style={{ fontWeight: "700", fontSize: 18, color: "#E9446A" }}>{this.state.name}</Text>
                            <Text style={{ fontWeight: "700", color: "black" }}>{this.state.username}</Text>
                        </View>

                    </View>

                    <View style={{ borderRadius: 50, backgroundColor: "white", marginVertical: 10, marginHorizontal: 8, elevation: 5 }}>
                        <Image style={{ width: window.width - 450, height: 180, resizeMode: "contain", marginVertical: 20, }} source={require('../Images/thought.png')} />


                    </View>
                    {/* <View style={{ borderRadius: 40, backgroundColor: "#f4f4f4", padding: 0, marginHorizontal: 10, marginVertical: 5 }}>
                        <LottieView style={{ width: '100%', }} source={require('../Animation/multitask.json')} autoPlay loop></LottieView>
                    </View> */}
                    <List>
                        <Text style={{ alignSelf: 'center', fontWeight: "bold", color: '#E9446A', fontSize: 20, backgroundColor: "transparent", padding: 10, borderRadius: 10, }}>Select Class</Text>
                        <ListItem style={{ alignSelf: "center", }}>
                            <Button buttonStyle={styles.button} type="outline" title="9 Class" onPress={this.notifyMessage9std} />
                        </ListItem>
                        <ListItem style={{ alignSelf: "center" }}>
                            <Button buttonStyle={styles.button} type="outline" title="10 Class" onPress={this.notifyMessage10std} />
                        </ListItem>
                        <ListItem style={{ alignSelf: "center" }}>
                            <Button buttonStyle={styles.button} type="outline" title="11 Class" onPress={this.notifyMessage11std} />
                        </ListItem>
                        <ListItem style={{ alignSelf: "center" }}>
                            <Button buttonStyle={styles.button} type="outline" title="12 Class" onPress={this.notifyMessage12std} />
                        </ListItem>
                        <Text style={{ alignSelf: 'center', fontWeight: "bold", color: '#E9446A', fontSize: 20, backgroundColor: "transparent", padding: 10, borderRadius: 10 }}>Engineering Stream</Text>
                        <ListItem style={{ alignSelf: "center" }}>
                            <Button buttonStyle={styles.button} type="outline" title="Computer Engineering" onPress={this.notifyMessagecomps} />
                        </ListItem>
                        <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                            <SocialIcon
                                type='google'
                                onPress={Actions.Google}
                            />
                            <SocialIcon
                                type='youtube'
                                onPress={Actions.Youtube}
                            />
                            <SocialIcon
                                type='linkedin'
                                onPress={Actions.Linkedin}
                            />
                            <SocialIcon
                                type='github'
                                onPress={Actions.Github}
                            />
                        </View>
                        <TouchableOpacity style={styles.custombutton} onPress={this.logout} >
                            <Text style={{ color: "#FFF", fontWeight: "bold" }}>LOGOUT</Text>
                        </TouchableOpacity>

                    </List>
                </ScrollView>
                {/* </ImageBackground> */}
            </View >

        );
    }
}
const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 5,
        backgroundColor: "white",
    },
    custombutton: {
        marginHorizontal: 30,
        marginVertical: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: 'center',
        elevation: 10
    },
});