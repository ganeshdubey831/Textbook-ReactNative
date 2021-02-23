import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import { Button, Icon } from 'native-base';

const window = Dimensions.get('window');

export default class Registerpage extends Component {

    componentDidMount = async () => {
        await AsyncStorage.getItem('username').then((value) => this.setState({ 'username': value }));
        await AsyncStorage.getItem('password').then((value) => this.setState({ 'password': value }));
        await AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }));
    }
    setusername = (value) => {
        AsyncStorage.setItem('username', value);
        this.setState({ 'username': value });
    }
    setpassword = (value) => {
        AsyncStorage.setItem('password', value);
        this.setState({ 'password': value });
    }
    setname = (value) => {
        AsyncStorage.setItem('name', value);
        this.setState({ 'name': value });
    }
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            name: "",
            secureTextEntry: true,
            IconName: "eye",
        };
    }
    onIconPress = () => {
        let IconName = (this.state.secureTextEntry) ? "eye-with-line" : "eye";
        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
            IconName: IconName
        })
    }
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: "10%" }}>
                    <View style={{ flex: 1, justifyContent: "center", width: "100%" }}>
                        {/* <View style={{ width: 350, height: 300 }}>
                        <LottieView source={require('../Animation/cofee.json')} autoPlay loop></LottieView>
                    </View> */}
                        <View style={{ borderRadius: 50, backgroundColor: "white", marginVertical: 10, alignItems: "center" }}>
                            <Image style={{ width: window.width, height: 180, resizeMode: "contain", marginVertical: 20, }} source={require('../Images/savedata.png')} />
                        </View>
                        <View style={styles.form}>
                            <KeyboardAvoidingView>
                                <View style={{ marginTop: 0 }}>
                                    <Text style={styles.inputtitle}>Name</Text>
                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize="none"
                                        value={this.state.name}
                                        onChangeText={this.setname}
                                    />
                                </View>
                                <View style={{ marginTop: 15 }}>
                                    <Text style={styles.inputtitle}>Email</Text>
                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize="none"
                                        value={this.state.username}
                                        onChangeText={this.setusername}
                                    />
                                </View>
                                <View style={{ marginTop: 15 }}>
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
                                        onChangeText={inputpassword => this.setState({ inputpassword })}
                                        value={this.state.password}
                                        onChangeText={this.setpassword}
                                        secureTextEntry={this.state.secureTextEntry}
                                    />
                                </View>
                            </KeyboardAvoidingView>

                        </View>
                        <TouchableOpacity style={styles.button} onPress={Actions.Login} >
                            <Text style={{ color: "#FFF", fontWeight: "bold" }}>Save Data</Text>
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
        marginVertical: 40,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: 'center',
    },
});
