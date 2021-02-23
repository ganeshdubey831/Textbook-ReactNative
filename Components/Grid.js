import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, } from 'react-native';
import FileViewer from 'react-native-file-viewer';
import RNFS from 'react-native-fs';
export default class Grid extends Component {
    pdfview = () => {
        //   const file = ; // this is your file name and save in android assest
        // feel free to change main path according to your requirements
        const destPath = `${RNFS.DocumentDirectoryPath}/${this.props.filename}`;

        RNFS.copyFileAssets(this.props.filename, destPath)
            .then(() => FileViewer.open(destPath))
            .then(() => {
                console.log('success');
            })
            .catch(error => {
                console.log(error)
            });
    }
    render() {
        return (
            <View style={{ width: "49%", height: 205, borderColor: "gray", borderWidth: 1, marginVertical: 5, marginHorizontal: 1, borderRadius: 10, backgroundColor: "white" }}>
                <TouchableOpacity onPress={this.pdfview}>
                    <View style={{
                        width: '100%', height: 145, padding: 2, overflow: "hidden",
                    }}>
                        <Image style={{ width: '100%', height: 145, borderRadius: 10, resizeMode: "cover" }} source={this.props.Image} />
                    </View>
                    <View>
                        <Text style={{ color: "black", fontSize: 13, fontWeight: "bold", alignSelf: "center", marginTop: 10 }}>{this.props.subject}</Text>
                        <Text style={{ color: "gray", fontSize: 10, fontWeight: "bold", alignSelf: "center", marginTop: 10 }}>{this.props.Chapter}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
