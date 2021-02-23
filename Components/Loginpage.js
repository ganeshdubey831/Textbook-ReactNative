import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert, ToastAndroid } from 'react-native';
import LottieView from 'lottie-react-native';
import { Actions } from "react-native-router-flux";
import AsyncStorage from '@react-native-community/async-storage';
import { Button, Icon } from 'native-base';


export default class Loginpage extends Component {
    componentDidMount = async () => {
        await AsyncStorage.getItem('username').then((value) => this.setState({ 'username': value }));
        await AsyncStorage.getItem('password').then((value) => this.setState({ 'password': value }));
        await AsyncStorage.getItem('islogin').then((value) => this.setState({ 'logincheck': value }));
        // await AsyncStorage.getItem('islogin').then(Actions.SplashScreen);
        // AsyncStorage.getItem('islogin');
        let check = await AsyncStorage.getItem('islogin')
        if (check == 'yes') {
            Actions.SplashScreen()
            ToastAndroid.show(" Auto Login Sucessfull", ToastAndroid.SHORT);
        }

    }
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            inputusername: "",
            inputpassword: "",
            secureTextEntry: true,
            IconName: "eye",
            logincheck: ""

        };
    }
    onIconPress = () => {
        let IconName = (this.state.secureTextEntry) ? "eye-with-line" : "eye";
        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
            IconName: IconName
        })
    }
    myValidate = () => {
        const { inputusername, inputpassword } = this.state;
        const myusername = this.state.username;
        const mypassword = this.state.password;

        if (inputusername == "" && inputpassword == "") {
            Alert.alert("Error!", "Please Fill Email And Password", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "OK", onPress: () => null, }
            ]);
        }
        else if (inputusername == myusername && inputpassword == "") {
            Alert.alert("Error!", "Please Fill Password", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "OK", onPress: () => null, }
            ]);
        }
        else if (inputusername == "" && inputpassword == mypassword) {
            Alert.alert("Error!", "Please Fill Email", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "OK", onPress: () => null, }
            ]);
        }
        else if (inputusername == myusername && inputpassword == mypassword) {
            AsyncStorage.setItem('islogin', 'yes');
            Actions.SplashScreen()
            ToastAndroid.show("Login Sucessfull", ToastAndroid.SHORT);


        }
        else {
            Alert.alert("Data Not Found OR Save Data Again")
        }
    }


    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <View style={{ flex: 1, justifyContent: "center", width: "100%" }}>
                        <View style={{ width: 350, height: 300 }}>
                            <LottieView source={require('../Animation/learn.json')} autoPlay loop></LottieView>
                        </View>
                        <View style={styles.form}>
                            <KeyboardAvoidingView>
                                <Text style={styles.inputtitle}>Email Address</Text>
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize="none"
                                    onChangeText={inputusername => this.setState({ inputusername })}

                                />
                                <View style={{ marginTop: 30 }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ flex: 4 }}>
                                            <Text style={styles.inputtitle}>Password</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                            <Button transparent onPress={this.onIconPress}>
                                                <Icon type="Entypo" style={{ color: "#E9446A", fontSize: 20, }} name={this.state.IconName} />
                                            </Button></View>
                                    </View>

                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize="none"
                                        secureTextEntry={this.state.secureTextEntry}
                                        onChangeText={inputpassword => this.setState({ inputpassword })}
                                    />

                                </View>
                            </KeyboardAvoidingView>

                        </View>
                        <TouchableOpacity style={styles.button} onPress={this.myValidate} >
                            <Text style={{ color: "#FFF", fontWeight: "bold" }}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Actions.Register}>
                            <View style={{ alignItems: "center", marginVertical: 20 }}>
                                <Text style={{ fontSize: 13, letterSpacing: 2 }}>New To App ?<Text style={{ color: "#E9446A", letterSpacing: 2 }}>Save Data</Text></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    form: {
        // marginVertical: 20,
        marginHorizontal: 30
    },
    inputtitle: {
        color: "#8a8f9e",
        fontSize: 18,
        // textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#E9446A",
        borderBottomWidth: 1.5,
        height: 45,
        fontSize: 18,
        color: "black",
        fontWeight: "bold",

    },
    button: {
        marginHorizontal: 30,
        marginVertical: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: 'center',
    },
});
