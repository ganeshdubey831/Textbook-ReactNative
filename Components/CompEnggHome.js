import React, { Component } from 'react';
import { View, BackHandler, Image, Dimensions, ImageBackground, StyleSheet, Text, TextInput } from 'react-native';
import CompEnggGrid from './CompEnggGrid';
import Grid from './Grid';
import { Container, Tab, Tabs, Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
const window = Dimensions.get('window')


export default class CompEnggHome extends Component {
    componentDidMount = async () => {
        await AsyncStorage.getItem('username').then((value) => this.setState({ 'username': value }));
        await AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }));
    }

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
    constructor(props) {
        super(props);
        this.state = {
            Comps: [
                {
                    id: 1,
                    sem: 'SEM 1',
                    image: require('../Images/sem1.png'),
                    url: ''

                },
                {
                    id: 2,
                    sem: 'SEM 2',
                    image: require('../Images/sem2.png'),
                    url: "https://drive.google.com/drive/u/0/mobile/folders/1D9wKDljQ_HQAy6By-KlNGvgK_pCvayia?usp=sharing"


                },
                {
                    id: 3,
                    sem: 'SEM 3',
                    image: require('../Images/sem3.png'),
                    url: "https://drive.google.com/drive/u/0/mobile/folders/1oc-GsqGFiLpuz_5Y8MOelCc5A_Icsu8u"

                },
                {
                    id: 4,
                    sem: 'SEM 4',
                    image: require('../Images/sem4.png'),
                    url: "https://drive.google.com/drive/u/0/mobile/folders/1PlwCbWDcPJtD6tzKR9NHCvh0V8htJJY5?usp=drive_open"

                },
                {
                    id: 5,
                    sem: 'SEM 5',
                    image: require('../Images/sem5.png'),
                    url: "https://drive.google.com/drive/u/0/mobile/folders/10kxxVdGynhfEPZjwYeBZirdZpjpk9-oC"

                },
                {
                    id: 6,
                    sem: 'SEM 6',
                    image: require('../Images/sem6.jpg'),
                    url: "https://drive.google.com/drive/folders/1EUSl0kC-V4aOpbvAzDzhe8_hJJBY5675?usp=sharing"

                },
                {
                    id: 7,
                    sem: 'SEM 7',
                    image: require('../Images/sem7.jpg'),
                    url: "https://drive.google.com/folderview?id=1-6ecXe3M8LD6OGJw0bcxO4JGHFUhQUyV",

                },
                {
                    id: 8,
                    sem: 'SEM 8',
                    image: require('../Images/sem8.png'),
                    url: "https://drive.google.com/drive/u/0/mobile/folders/14aTs38___yVdZ2pfqM10kCS3M8U_atqm"

                },
            ],
            Syllabus: [
                {
                    id: 1,
                    subject: 'SEM 1 - SEM 2',
                    image: require('../Images/syllabus1.jpg'),
                    filename: 'FE-COMPS.pdf',
                    chapter: 'First Year'
                },
                {
                    id: 2,
                    subject: 'SEM 3 - SEM 4',
                    image: require('../Images/syllabus2.jpg'),
                    filename: 'SE-COMPS.pdf',
                    chapter: 'Second Year'
                },
                {
                    id: 3,
                    subject: 'SEM 5 - SEM 8',
                    image: require('../Images/syllabus3.jpg'),
                    filename: 'TE-BE-COMPS.pdf',
                    chapter: 'Third & Fourth year'
                },
            ],
            username: "",
            name: "",

        };
    }

    render() {
        const { Comps, Syllabus } = this.state
        return (
            <Container>
                <Tabs tabBarPosition="bottom">
                    <Tab heading="BOOKS" tabStyle={{ backgroundColor: '#be79df' }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#be79df' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
                        <ScrollView>
                            <View style={{ flex: 1, padding: 0 }}>
                                <ImageBackground
                                    source={require('../Images/E-learning.png')}
                                    style={{ width: "100%", height: window.height - 500 }}
                                    resizeMode="cover"
                                    imageStyle={{ borderBottomRightRadius: 70 }}
                                >
                                    <View style={styles.darkoverlay}></View>
                                    <View style={{ paddingTop: 90, paddingLeft: 16 }}>
                                        <Text style={{ fontSize: 32, fontWeight: "bold", color: "white", textTransform: "capitalize" }}> Hi {this.state.name},</Text>
                                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Computer Engineering Notes</Text>
                                    </View>
                                    {/* <View>
                                        <TextInput style={styles.searchbox} placeholder="Search Books" placeholderTextColor="#666" onChangeText={text => { }}>
                                        </TextInput>
                                        <Icon type="FontAwesome" style={{ color: '#666', fontSize: 22, position: 'absolute', top: 30, left: "80%" }} name='search' />
                                    </View> */}
                                    <Icon type="AntDesign" style={{ color: 'white', fontSize: 30, position: 'absolute', top: 20, left: "5%" }} name='arrowleft' onPress={Actions.pop} />
                                </ImageBackground>
                                <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 5, margin: 2, backgroundColor: "white" }}>
                                    {Comps.map(EM9 => {
                                        return <CompEnggGrid key={EM9.id} Sem={EM9.sem} Image={EM9.image} URL={EM9.url} />
                                    })}
                                </View>
                            </View>
                        </ScrollView>
                    </Tab>
                    <Tab heading="SYLLABUS" tabStyle={{ backgroundColor: '#be79df' }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#be79df' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
                        <ScrollView>
                            <View style={{ flex: 1, padding: 0 }}>
                                <ImageBackground
                                    source={require('../Images/syllabus.jpg')}
                                    style={{ width: "100%", height: window.height - 500 }}
                                    resizeMode="cover"
                                    imageStyle={{ borderBottomRightRadius: 70 }}
                                >
                                    <View style={styles.darkoverlay}></View>
                                    <View style={{ paddingTop: 90, paddingLeft: 16 }}>
                                        <Text style={{ fontSize: 32, fontWeight: "bold", color: "white", textTransform: "capitalize" }}> Hi {this.state.name},</Text>
                                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Computer Engineering Syllabus</Text>
                                    </View>
                                </ImageBackground>
                                <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 5, margin: 2, backgroundColor: "white" }}>
                                    {Syllabus.map(EM9 => {
                                        return <Grid key={EM9.id} subject={EM9.subject} filename={EM9.filename} Image={EM9.image} Chapter={EM9.chapter} />
                                    })}
                                </View>
                            </View>
                        </ScrollView>
                    </Tab>
                </Tabs>
            </Container>

        );
    }
}
const styles = StyleSheet.create({
    darkoverlay: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        height: window.height - 500,
        opacity: 0.3,
        backgroundColor: "#000",
        borderBottomRightRadius: 70
    },
    searchbox: {
        marginTop: 16,
        backgroundColor: "#fff",
        paddingLeft: 24,
        padding: 12,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        width: "90%",
        fontWeight: "bold"
    },
});
