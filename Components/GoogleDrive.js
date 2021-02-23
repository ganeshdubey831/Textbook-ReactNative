import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
export default class GoogleDrive extends Component {


    render() {
        return (
            <React.Fragment>
                <WebView source={{ uri: this.props.Url }} />
            </React.Fragment>

        );
    }
}
