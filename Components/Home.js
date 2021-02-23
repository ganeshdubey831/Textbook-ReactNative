import React, { Component, } from 'react';
import { View, Text, StyleSheet, BackHandler, Alert, TouchableOpacity, Dimensions, ImageBackground, LogBox } from 'react-native';
import { Drawer, Button, Icon, Form } from 'native-base';
import Sidebar from './Sidebar';
import HomeComponent1 from './HomeComponent1';
import HomeComponent2 from './HomeComponent2';
import { ScrollView } from 'react-native-gesture-handler';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
// console.disableYellowBox = true;
LogBox.ignoreAllLogs()
const window = Dimensions.get('window')

export default class Home extends Component {
    openDrawer = () => {
        this._drawer._root.open();
    }
    closeDrawer = () => {
        this._drawer._root.close();
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        Alert.alert("Hold on!", "Are you sure you want to Exit this App?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };
    // digest = () => {
    //     const localFile = `${RNFS.DocumentDirectoryPath}/Maths2-compressed.pdf`;
    //     const url = 'https://github.com/ganeshdubey831/digest/blob/main/9std%20EM%20Maths2-compressed.pdf';

    //     const options = {
    //         fromUrl: url,
    //         toFile: localFile
    //     };
    //     RNFS.downloadFile(options).promise
    //         .then(() => FileViewer.open(localFile))
    //         .then(() => {
    //             console.log("open")
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         });
    // }



    render() {
        return (
            <View style={styles.box}>

                <Drawer ref={(ref) => { this._drawer = ref; }}
                    content={<Sidebar close={this.closeDrawer} />}
                    onClose={() => this.closeDrawer()}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Button transparent onPress={this.openDrawer}>
                                <Icon type="Entypo" style={{ color: 'black', fontSize: 35, }} name='menu' />
                            </Button>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10, color: 'black', marginHorizontal: 50 }}>BOOK STORE</Text>
                        </View>
                    </View>
                    <ScrollView style={{ paddingHorizontal: 5 }}>
                        <HomeComponent1 />
                        <HomeComponent2 />
                        {/* <TouchableOpacity style={styles.custombutton} onPress={this.digest} >
                            <Text style={{ color: "#FFF", fontWeight: "bold" }}>DIGEST</Text>
                        </TouchableOpacity> */}
                    </ScrollView>
                </Drawer>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    box: {
        flex: 1,
    },
    container: {
        backgroundColor: 'white',
        padding: 5,
    },
    header: {
        margin: 10,
        borderRadius: 10,
        elevation: 3,
        flexDirection: "row",
        backgroundColor: 'white',
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