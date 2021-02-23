import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
import { Actions } from "react-native-router-flux";

export default class Github extends Component {
    UNSAFE_componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    UNSAFE_componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        Actions.pop();
        return true;
    };
    render() {
        return (
            <React.Fragment>
                <WebView source={{ uri: "https://github.com/" }} />
            </React.Fragment>
        );
    }
}
