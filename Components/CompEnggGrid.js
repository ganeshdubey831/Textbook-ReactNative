import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import GoogleDrive from './GoogleDrive'
import { WebView } from 'react-native-webview';
export default class CompEnggGrid extends Component {
    render() {
        return (
            <View style={{ width: "49%", height: 205, borderColor: "gray", borderWidth: 1, marginVertical: 5, marginHorizontal: 1, borderRadius: 10, backgroundColor: "white" }}>
                <TouchableOpacity onPress={() => { Actions.GoogleDrive({ Url: this.props.URL }) }}>
                    <View style={{
                        width: '100%', height: 145, padding: 2, overflow: "hidden",
                    }}>
                        <Image style={{ width: '100%', height: 145, borderRadius: 10, resizeMode: "contain" }} source={this.props.Image} />
                    </View>
                    <View>
                        <Text style={{ color: "black", fontSize: 13, fontWeight: "bold", alignSelf: "center", marginTop: 10 }}>{this.props.Sem}</Text>
                        <Text style={{ color: "gray", fontSize: 10, fontWeight: "bold", alignSelf: "center", marginTop: 10 }}>Computer Engineering</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
