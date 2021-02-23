import React, { Component } from 'react';
// import { BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
import { Actions } from "react-native-router-flux";

export default class Youtube extends Component {
    // componentWillMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    // }

    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    // }

    // handleBackButton = () => {
    //     Actions.pop();
    //     return true;
    // };
    render() {
        return (
            <React.Fragment>
                <WebView source={{ uri: "https://www.youtube.com/" }} />
            </React.Fragment>
        );
    }
}
