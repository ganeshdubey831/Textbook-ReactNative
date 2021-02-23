import React, { Component } from 'react';
import { View, BackHandler, Image, Dimensions, KeyboardAvoidingView, ImageBackground, StyleSheet, } from 'react-native';
import Grid from '../Components/Grid'
import { Container, Tab, Tabs, Header, Item, Input, Button, Text, Icon } from 'native-base';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

const window = Dimensions.get('window')



export default class Home9std extends Component {
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
            tasks_9std_EM: [
                {
                    id: 1,
                    subject: 'English',
                    image: require('../Images/english3.jpg'),
                    filename: 'English_9_EM.pdf',
                    chapter: 'Unit 1 - Unit 4'

                },
                {
                    id: 2,
                    subject: 'Hindi',
                    image: require('../Images/hindi1.jpg'),
                    filename: 'Hindi_9_EM.pdf',
                    chapter: 'part 1 - part 2'


                },
                {
                    id: 3,
                    subject: 'Marathi',
                    image: require('../Images/book3.jpg'),
                    filename: 'Marathi_9_EM.pdf',
                    chapter: 'Unit 1 - Unit 4'

                },
                {
                    id: 4,
                    subject: 'Maths-I',
                    image: require('../Images/maths2.jpg'),
                    filename: 'Maths-Part-I_9_EM.pdf',
                    chapter: 'Chapter 1 - Chapter 7'

                },
                {
                    id: 5,
                    subject: 'Maths-II',
                    image: require('../Images/maths1.jpg'),
                    filename: 'Maths-Part-II_9_EM.pdf',
                    chapter: 'Chapter 1 - Chapter 9'

                },
                {
                    id: 6,
                    subject: 'Science',
                    image: require('../Images/science1.jpg'),
                    filename: 'Science_9_EM.pdf',
                    chapter: 'Chapter 1 - Chapter 18'

                },
                {
                    id: 7,
                    subject: 'History',
                    image: require('../Images/history1.jpg'),
                    filename: 'History_9_EM.pdf',
                    chapter: 'Chapter 1 - Chapter 10'

                },
                {
                    id: 8,
                    subject: 'Geography',
                    image: require('../Images/geography2.jpg'),
                    filename: 'Geography_9_EM.pdf',
                    chapter: 'Chapter 1 - Chapter 12'

                },
            ],
            userfilteredEM: [
                {
                    id: 1,
                    subject: 'English',
                    image: require('../Images/english3.jpg'),
                    filename: 'English_9_EM.pdf',
                    chapter: 'Unit 1 - Unit 4'

                },
                {
                    id: 2,
                    subject: 'Hindi',
                    image: require('../Images/hindi1.jpg'),
                    filename: 'Hindi_9_EM.pdf',
                    chapter: 'part 1 - part 2'


                },
                {
                    id: 3,
                    subject: 'Marathi',
                    image: require('../Images/book3.jpg'),
                    filename: 'Marathi_9_EM.pdf',
                    chapter: 'Unit 1 - Unit 4'

                },
                {
                    id: 4,
                    subject: 'Maths-I',
                    image: require('../Images/maths2.jpg'),
                    filename: 'Maths-Part-I_9_EM.pdf',
                    chapter: 'Chapter 1 - Chapter 7'

                },
                {
                    id: 5,
                    subject: 'Maths-II',
                    image: require('../Images/maths1.jpg'),
                    filename: 'Maths-Part-II_9_EM.pdf',
                    chapter: 'Chapter 1 - Chapter 9'

                },
                {
                    id: 6,
                    subject: 'Science',
                    image: require('../Images/science1.jpg'),
                    filename: 'Science_9_EM.pdf',
                    chapter: 'Chapter 1 - Chapter 18'

                },
                {
                    id: 7,
                    subject: 'History',
                    image: require('../Images/history1.jpg'),
                    filename: 'History_9_EM.pdf',
                    chapter: 'Chapter 1 - Chapter 10'

                },
                {
                    id: 8,
                    subject: 'Geography',
                    image: require('../Images/geography2.jpg'),
                    filename: 'Geography_9_EM.pdf',
                    chapter: 'Chapter 1 - Chapter 12'

                },
            ],
            tasks_9std_HM: [
                {
                    id: 1,
                    subject: 'English',
                    image: require('../Images/english3.jpg'),
                    filename: 'English_9_MM.pdf',
                    chapter: 'Unit 1 - Unit 4',
                    name: 'English'

                },
                {
                    id: 2,
                    subject: 'हिंदी',
                    image: require('../Images/hindi1.jpg'),
                    filename: 'Hindi_9_HM.pdf',
                    chapter: 'part 1 - part 2',
                    name: 'Hindi'

                },
                {
                    id: 3,
                    subject: 'मराठी',
                    image: require('../Images/book3.jpg'),
                    filename: 'Marathi_9_EM.pdf',
                    chapter: 'Unit 1 - Unit 4',
                    name: 'Marathi'

                },
                {
                    id: 4,
                    subject: 'गणित भाग 1',
                    image: require('../Images/maths2.jpg'),
                    filename: 'Maths-I_9_HM.pdf',
                    chapter: 'Chapter 1 - Chapter 7',
                    name: 'Maths1'

                },
                {
                    id: 5,
                    subject: 'गणित भाग 2',
                    image: require('../Images/maths1.jpg'),
                    filename: 'Maths-II_9_HM.pdf',
                    chapter: 'Chapter 1 - Chapter 9',
                    name: 'Maths2'

                },
                {
                    id: 6,
                    subject: 'विज्ञान और प्रौद्योगिकी',
                    image: require('../Images/science2.jpg'),
                    filename: 'Science_9_HM.pdf',
                    chapter: 'Chapter 1 - Chapter 18',
                    name: 'Science'

                },
                {
                    id: 7,
                    subject: 'इतिहास और नागरिक शास्त्र',
                    image: require('../Images/history2.jpg'),
                    filename: 'History_9_HM.pdf',
                    chapter: 'Chapter 1 - Chapter 10',
                    name: 'History'

                },
                {
                    id: 8,
                    subject: 'भूगोल',
                    image: require('../Images/geography1.jpg'),
                    filename: 'Geography_9_HM.pdf',
                    chapter: 'Chapter 1 - Chapter 12',
                    name: 'Geography'

                },
            ],
            userfilteredHM: [
                {
                    id: 1,
                    subject: 'English',
                    image: require('../Images/english3.jpg'),
                    filename: 'English_9_MM.pdf',
                    chapter: 'Unit 1 - Unit 4'

                },
                {
                    id: 2,
                    subject: 'हिंदी',
                    image: require('../Images/hindi1.jpg'),
                    filename: 'Hindi_9_HM.pdf',
                    chapter: 'part 1 - part 2'

                },
                {
                    id: 3,
                    subject: 'मराठी',
                    image: require('../Images/book3.jpg'),
                    filename: 'Marathi_9_EM.pdf',
                    chapter: 'Unit 1 - Unit 4'

                },
                {
                    id: 4,
                    subject: 'गणित भाग 1',
                    image: require('../Images/maths2.jpg'),
                    filename: 'Maths-I_9_HM.pdf',
                    chapter: 'Chapter 1 - Chapter 7'

                },
                {
                    id: 5,
                    subject: 'गणित भाग 2',
                    image: require('../Images/maths1.jpg'),
                    filename: 'Maths-II_9_HM.pdf',
                    chapter: 'Chapter 1 - Chapter 9'

                },
                {
                    id: 6,
                    subject: 'विज्ञान और प्रौद्योगिकी',
                    image: require('../Images/science2.jpg'),
                    filename: 'Science_9_HM.pdf',
                    chapter: 'Chapter 1 - Chapter 18'

                },
                {
                    id: 7,
                    subject: 'इतिहास और नागरिक शास्त्र',
                    image: require('../Images/history2.jpg'),
                    filename: 'History_9_HM.pdf',
                    chapter: 'Chapter 1 - Chapter 10'

                },
                {
                    id: 8,
                    subject: 'भूगोल',
                    image: require('../Images/geography1.jpg'),
                    filename: 'Geography_9_HM.pdf',
                    chapter: 'Chapter 1 - Chapter 12'

                },
            ],
            tasks_9std_MM: [
                {
                    id: 1,
                    subject: 'English',
                    image: require('../Images/english1.png'),
                    filename: 'English_9_MM.pdf',
                    chapter: 'Unit 1 - Unit 4',
                    name: 'English'

                },
                {
                    id: 2,
                    subject: 'हिंदी',
                    image: require('../Images/hindi2.jpg'),
                    filename: 'Hindi_9_MM.pdf',
                    chapter: 'part 1 - part 2',
                    name: 'Hindi'

                },
                {
                    id: 3,
                    subject: 'मराठी',
                    image: require('../Images/book3.jpg'),
                    filename: 'Marathi_9_MM.pdf',
                    chapter: 'Unit 1 - Unit 4',
                    name: 'Marathi'

                },
                {
                    id: 4,
                    subject: 'गणित भाग-I',
                    image: require('../Images/maths3.jpg'),
                    filename: 'Maths-I_9_MM.pdf',
                    chapter: 'Chapter 1 - Chapter 7',
                    name: 'Maths1'

                },
                {
                    id: 5,
                    subject: 'गणित भाग-II',
                    image: require('../Images/maths4.jpg'),
                    filename: 'Maths-II_9_MM.pdf',
                    chapter: 'Chapter 1 - Chapter 9',
                    name: 'maths2'

                },
                {
                    id: 6,
                    subject: 'विज्ञान आणि तंत्रज्ञान I',
                    image: require('../Images/science1.jpg'),
                    filename: 'Science-I_9_MM.pdf',
                    chapter: 'Chapter 1 - Chapter 10',
                    name: 'Science1'

                },
                {
                    id: 7,
                    subject: 'विज्ञान आणि तंत्रज्ञान II',
                    image: require('../Images/science2.jpg'),
                    filename: 'Science-II_9_MM.pdf',
                    chapter: 'Chapter 11 - Chapter 18',
                    name: 'Science2'

                },
                {
                    id: 8,
                    subject: 'इतिहास व राज्यशास्त्र',
                    image: require('../Images/history1.jpg'),
                    filename: 'History_9_MM.pdf',
                    chapter: 'Chapter 1 - Chapter 10',
                    name: 'History'

                },
                {
                    id: 9,
                    subject: 'भूगोल',
                    image: require('../Images/geography2.jpg'),
                    filename: 'Geography_9_MM.pdf',
                    chapter: 'Chapter 1 - Chapter 12',
                    name: 'Geography'

                },
            ],
            userfilteredMM: [
                {
                    id: 1,
                    subject: 'English',
                    image: require('../Images/english1.png'),
                    filename: 'English_9_MM.pdf',
                    chapter: 'Unit 1 - Unit 4',


                },
                {
                    id: 2,
                    subject: 'हिंदी',
                    image: require('../Images/hindi2.jpg'),
                    filename: 'Hindi_9_MM.pdf',
                    chapter: 'part 1 - part 2',

                },
                {
                    id: 3,
                    subject: 'मराठी',
                    image: require('../Images/book3.jpg'),
                    filename: 'Marathi_9_MM.pdf',
                    chapter: 'Unit 1 - Unit 4',

                },
                {
                    id: 4,
                    subject: 'गणित भाग-I',
                    image: require('../Images/maths3.jpg'),
                    filename: 'Maths-I_9_MM.pdf',
                    chapter: 'Chapter 1 - Chapter 7',

                },
                {
                    id: 5,
                    subject: 'गणित भाग-II',
                    image: require('../Images/maths4.jpg'),
                    filename: 'Maths-II_9_MM.pdf',
                    chapter: 'Chapter 1 - Chapter 9',

                },
                {
                    id: 6,
                    subject: 'विज्ञान आणि तंत्रज्ञान I',
                    image: require('../Images/science1.jpg'),
                    filename: 'Science-I_9_MM.pdf',
                    chapter: 'Chapter 1 - Chapter 10',

                },
                {
                    id: 7,
                    subject: 'विज्ञान आणि तंत्रज्ञान II',
                    image: require('../Images/science2.jpg'),
                    filename: 'Science-II_9_MM.pdf',
                    chapter: 'Chapter 11 - Chapter 18',

                },
                {
                    id: 8,
                    subject: 'इतिहास व राज्यशास्त्र',
                    image: require('../Images/history1.jpg'),
                    filename: 'History_9_MM.pdf',
                    chapter: 'Chapter 1 - Chapter 10',

                },
                {
                    id: 9,
                    subject: 'भूगोल',
                    image: require('../Images/geography2.jpg'),
                    filename: 'Geography_9_MM.pdf',
                    chapter: 'Chapter 1 - Chapter 12',

                },
            ],
            username: "",
            name: "",
        };
    }
    serachuserEM(text) {
        this.setState({
            userfilteredEM: this.state.tasks_9std_EM.filter(i =>
                i.subject.toLowerCase().includes(text.toLowerCase()),
            ),
        });
    }
    serachuserHM(text) {
        this.setState({
            userfilteredHM: this.state.tasks_9std_HM.filter(i =>
                i.name.toLowerCase().includes(text.toLowerCase()),
            ),
        });
    }
    serachuserMM(text) {
        this.setState({
            userfilteredMM: this.state.tasks_9std_MM.filter(i =>
                i.name.toLowerCase().includes(text.toLowerCase()),
            ),
        });
    }
    render() {
        const { tasks_9std_EM, tasks_9std_HM, tasks_9std_MM, userfilteredEM, userfilteredHM, userfilteredMM } = this.state
        return (
            <Container>
                <Tabs tabBarPosition="bottom">
                    <Tab heading="English Med.." tabStyle={{ backgroundColor: '#E9446A' }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#E9446A' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
                        <ScrollView>
                            <View style={{ padding: 0 }}>
                                <ImageBackground
                                    source={require('../Images/g-3.jpg')}
                                    style={{ width: "100%", height: window.height - 500 }}
                                    resizeMode="cover"
                                    imageStyle={{ borderBottomRightRadius: 70 }}
                                >
                                    <View style={styles.darkoverlay}></View>
                                    <View style={{ paddingTop: 90, paddingLeft: 16 }}>
                                        <Text style={{ fontSize: 32, fontWeight: "bold", color: "white", textTransform: "capitalize" }}> Hi {this.state.name},</Text>
                                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>English Medium Textbooks For class 9</Text>
                                    </View>
                                    <View>
                                        <TextInput style={styles.searchbox} placeholder="Search Books" placeholderTextColor="#666" onChangeText={text => { this.serachuserEM(text) }}>
                                        </TextInput>
                                        <Icon type="FontAwesome" style={{ color: '#666', fontSize: 22, position: 'absolute', top: 30, left: "80%" }} name='search' />
                                    </View>
                                    <Icon type="AntDesign" style={{ color: 'white', fontSize: 30, position: 'absolute', top: 20, left: "5%" }} name='arrowleft' onPress={Actions.pop} />
                                </ImageBackground>
                                <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 5, margin: 2, backgroundColor: "white" }}>
                                    {userfilteredEM.map(EM9 => {
                                        return <Grid key={EM9.id} subject={EM9.subject} filename={EM9.filename} Image={EM9.image} Chapter={EM9.chapter} />
                                    })}
                                </View>
                            </View>
                        </ScrollView>
                    </Tab>
                    <Tab heading="Hindi Med.." tabStyle={{ backgroundColor: '#E9446A' }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#E9446A' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
                        <ScrollView>
                            <View style={{ padding: 0 }}>
                                <ImageBackground
                                    source={require('../Images/g-2.png')}
                                    style={{ width: "100%", height: window.height - 500 }}
                                    resizeMode="cover"
                                    imageStyle={{ borderBottomRightRadius: 70 }}
                                >
                                    <View style={styles.darkoverlay}></View>
                                    <View style={{ paddingTop: 90, paddingLeft: 16 }}>
                                        <Text style={{ fontSize: 32, fontWeight: "bold", color: "white" }}>Hi {this.state.name},</Text>
                                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Hindi Medium Textbooks For Class 9</Text>
                                    </View>
                                    <View>
                                        <TextInput style={styles.searchbox} placeholder="Search Books" placeholderTextColor="#666" onChangeText={text => { this.serachuserHM(text) }}>
                                        </TextInput>
                                        <Icon type="FontAwesome" style={{ color: '#666', fontSize: 22, position: 'absolute', top: 30, left: "80%" }} name='search' />
                                    </View>
                                    <Icon type="AntDesign" style={{ color: 'white', fontSize: 30, position: 'absolute', top: 20, left: "5%" }} name='arrowleft' onPress={Actions.pop} />
                                </ImageBackground>
                                <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 5, margin: 2, backgroundColor: "white" }}>
                                    {userfilteredHM.map(HM9 => {
                                        return <Grid key={HM9.id} subject={HM9.subject} filename={HM9.filename} Image={HM9.image} Chapter={HM9.chapter} />
                                    })}
                                </View>
                            </View>
                        </ScrollView>
                    </Tab>
                    <Tab heading="Marathi Med.." tabStyle={{ backgroundColor: '#E9446A' }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#E9446A' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
                        <ScrollView>
                            <View style={{ padding: 0 }}>
                                <ImageBackground
                                    source={require('../Images/g-1.jpg')}
                                    style={{ width: "100%", height: window.height - 500 }}
                                    resizeMode="cover"
                                    imageStyle={{ borderBottomRightRadius: 70 }}
                                >
                                    <View style={styles.darkoverlay}></View>
                                    <View style={{ paddingTop: 90, paddingLeft: 16 }}>
                                        <Text style={{ fontSize: 32, fontWeight: "bold", color: "white" }}>Hi {this.state.name},</Text>
                                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Marathi Medium Textbooks For Class 9</Text>
                                    </View>
                                    <View>
                                        <TextInput style={styles.searchbox} placeholder="Search Books" placeholderTextColor="#666" onChangeText={text => { this.serachuserMM(text) }}>
                                        </TextInput>
                                        <Icon type="FontAwesome" style={{ color: '#666', fontSize: 22, position: 'absolute', top: 30, left: "80%" }} name='search' />
                                    </View>
                                    <Icon type="AntDesign" style={{ color: 'white', fontSize: 30, position: 'absolute', top: 20, left: "5%" }} name='arrowleft' onPress={Actions.pop} />
                                </ImageBackground>
                                <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 5, margin: 2, backgroundColor: "white" }}>
                                    {userfilteredMM.map(MM9 => {
                                        return <Grid key={MM9.id} subject={MM9.subject} filename={MM9.filename} Image={MM9.image} Chapter={MM9.chapter} />
                                    })}
                                </View>
                            </View>
                        </ScrollView>
                    </Tab>
                </Tabs>
            </Container >

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