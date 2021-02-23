import React, { Component } from 'react';
import { View, BackHandler, Image, Dimensions, ImageBackground, StyleSheet, Text, TextInput } from 'react-native';
import Grid from '../Components/Grid'
import { Container, Tab, Tabs, Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

const window = Dimensions.get('window')



export default class Home10std extends Component {
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
            tasks_10std_EM: [
                {
                    id: 7,
                    subject: 'English',
                    image: require('../Images/english3.jpg'),
                    filename: 'English_10_EM.pdf'

                },
                {
                    id: 8,
                    subject: 'Hindi',
                    image: require('../Images/hindi1.jpg'),
                    filename: 'Hindi_10_EM_MM.pdf'

                },
                {
                    id: 9,
                    subject: 'Marathi',
                    image: require('../Images/book3.jpg'),
                    filename: 'Marathi_10_EM_HM'

                },
                {
                    id: 1,
                    subject: 'Maths-I',
                    image: require('../Images/maths2.jpg'),
                    filename: 'Maths-I_10_EM.pdf'

                },
                {
                    id: 2,
                    subject: 'Maths-II',
                    image: require('../Images/maths1.jpg'),
                    filename: 'Maths-II_10_EM.pdf'

                },
                {
                    id: 3,
                    subject: 'Science-I',
                    image: require('../Images/science1.jpg'),
                    filename: 'Science-I_10_EM.pdf'

                },
                {
                    id: 4,
                    subject: 'Science-II',
                    image: require('../Images/science2.jpg'),
                    filename: 'Science-II_10_EM.pdf'

                },
                {
                    id: 5,
                    subject: 'History',
                    image: require('../Images/history1.jpg'),
                    filename: 'History_10_EM.pdf'

                },
                {
                    id: 6,
                    subject: 'Geography',
                    image: require('../Images/geography2.jpg'),
                    filename: 'Geography_10_EM.pdf'

                },
            ],
            userfilteredEM: [
                {
                    id: 7,
                    subject: 'English',
                    image: require('../Images/english3.jpg'),
                    filename: 'English_10_EM.pdf'

                },
                {
                    id: 8,
                    subject: 'Hindi',
                    image: require('../Images/hindi1.jpg'),
                    filename: 'Hindi_10_EM_MM.pdf'

                },
                {
                    id: 9,
                    subject: 'Marathi',
                    image: require('../Images/book3.jpg'),
                    filename: 'Marathi_10_EM_HM'

                },
                {
                    id: 1,
                    subject: 'Maths-I',
                    image: require('../Images/maths2.jpg'),
                    filename: 'Maths-I_10_EM.pdf'

                },
                {
                    id: 2,
                    subject: 'Maths-II',
                    image: require('../Images/maths1.jpg'),
                    filename: 'Maths-II_10_EM.pdf'

                },
                {
                    id: 3,
                    subject: 'Science-I',
                    image: require('../Images/science1.jpg'),
                    filename: 'Science-I_10_EM.pdf'

                },
                {
                    id: 4,
                    subject: 'Science-II',
                    image: require('../Images/science2.jpg'),
                    filename: 'Science-II_10_EM.pdf'

                },
                {
                    id: 5,
                    subject: 'History',
                    image: require('../Images/history1.jpg'),
                    filename: 'History_10_EM.pdf'

                },
                {
                    id: 6,
                    subject: 'Geography',
                    image: require('../Images/geography2.jpg'),
                    filename: 'Geography_10_EM.pdf'

                },
            ],
            tasks_10std_HM: [
                {
                    id: 7,
                    subject: 'English',
                    image: require('../Images/english1.png'),
                    filename: 'English_10_HM_MM.pdf',
                    name: "English"
                },
                {
                    id: 8,
                    subject: 'Hindi',
                    image: require('../Images/hindi1.jpg'),
                    filename: 'Hindi_10_HM.pdf',
                    name: "Hindi"

                },
                {
                    id: 9,
                    subject: 'Marathi',
                    image: require('../Images/book3.jpg'),
                    filename: 'Marathi_10_EM_HM',
                    name: "Marathi"

                },
                {
                    id: 1,
                    subject: 'गणित भाग 1',
                    image: require('../Images/maths2.jpg'),
                    filename: 'Maths-I_10_HM.pdf',
                    name: "Maths1"

                },
                {
                    id: 2,
                    subject: 'गणित भाग 2',
                    image: require('../Images/maths3.jpg'),
                    filename: 'Maths-II_10_HM.pdf',
                    name: "Maths2"

                },
                {
                    id: 3,
                    subject: 'विज्ञान और प्रौद्योगिकी-I',
                    image: require('../Images/science1.jpg'),
                    filename: 'Science-I_10_HM.pdf',
                    name: "Science1"

                },
                {
                    id: 4,
                    subject: 'विज्ञान और प्रौद्योगिकी-II',
                    image: require('../Images/science2.jpg'),
                    filename: 'Science-II_10_HM.pdf',
                    name: "Science2"

                },
                {
                    id: 5,
                    subject: 'इतिहास और नागरिक शास्त्र',
                    image: require('../Images/history2.jpg'),
                    filename: 'History_10_HM.pdf',
                    name: "History"

                },
                {
                    id: 6,
                    subject: 'भूगोल',
                    image: require('../Images/geography1.jpg'),
                    filename: 'Geography_10_HM.pdf',
                    name: "Geography"

                },
            ],
            userfilteredHM: [
                {
                    id: 7,
                    subject: 'English',
                    image: require('../Images/english1.png'),
                    filename: 'English_10_HM_MM.pdf'

                },
                {
                    id: 8,
                    subject: 'हिंदी',
                    image: require('../Images/hindi1.jpg'),
                    filename: 'Hindi_10_HM.pdf'

                },
                {
                    id: 9,
                    subject: 'मराठी',
                    image: require('../Images/book3.jpg'),
                    filename: 'Marathi_10_EM_HM'

                },
                {
                    id: 1,
                    subject: 'गणित भाग 1',
                    image: require('../Images/maths2.jpg'),
                    filename: 'Maths-I_10_HM.pdf'

                },
                {
                    id: 2,
                    subject: 'गणित भाग 2',
                    image: require('../Images/maths3.jpg'),
                    filename: 'Maths-II_10_HM.pdf'

                },
                {
                    id: 3,
                    subject: 'विज्ञान और प्रौद्योगिकी-I',
                    image: require('../Images/science1.jpg'),
                    filename: 'Science-I_10_HM.pdf'

                },
                {
                    id: 4,
                    subject: 'विज्ञान और प्रौद्योगिकी-II',
                    image: require('../Images/science2.jpg'),
                    filename: 'Science-II_10_HM.pdf'

                },
                {
                    id: 5,
                    subject: 'इतिहास और नागरिक शास्त्र',
                    image: require('../Images/history2.jpg'),
                    filename: 'History_10_HM.pdf'

                },
                {
                    id: 6,
                    subject: 'भूगोल',
                    image: require('../Images/geography1.jpg'),
                    filename: 'Geography_10_HM.pdf'

                },
            ],
            tasks_10std_MM: [
                {
                    id: 7,
                    subject: 'English',
                    image: require('../Images/english3.jpg'),
                    filename: 'English_10_HM_MM.pdf',
                    name: 'English',

                },
                {
                    id: 8,
                    subject: 'Hindi',
                    image: require('../Images/hindi1.jpg'),
                    filename: 'Hindi_10_EM_MM.pdf',
                    name: 'Hindi',

                },
                {
                    id: 9,
                    subject: 'Marathi',
                    image: require('../Images/book3.jpg'),
                    filename: 'Marathi_10_MM.pdf',
                    name: 'Marathi',

                },
                {
                    id: 1,
                    subject: 'गणित भाग-I',
                    image: require('../Images/maths3.jpg'),
                    filename: 'Maths-I_10_MM.pdf',
                    name: 'Maths1',

                },
                {
                    id: 2,
                    subject: 'गणित भाग-II',
                    image: require('../Images/maths4.jpg'),
                    filename: 'Maths-II_10_MM.pdf',
                    name: 'Maths2',

                },
                {
                    id: 3,
                    subject: 'विज्ञान आणि तंत्रज्ञान I',
                    image: require('../Images/science1.jpg'),
                    filename: 'Science-I_10_MM.pdf',
                    name: 'Science1',

                },
                {
                    id: 4,
                    subject: 'विज्ञान आणि तंत्रज्ञान II',
                    image: require('../Images/science2.jpg'),
                    filename: 'Science-II_10_MM.pdf',
                    name: 'Science2',

                },
                {
                    id: 5,
                    subject: 'इतिहास व राज्यशास्त्र',
                    image: require('../Images/history1.jpg'),
                    filename: 'History_10_MM.pdf',
                    name: 'History',

                },
                {
                    id: 6,
                    subject: 'भूगोल',
                    image: require('../Images/geography2.jpg'),
                    filename: 'Geography_10_MM.pdf',
                    name: 'Geography',
                },
            ],
            userfilteredMM: [
                {
                    id: 7,
                    subject: 'English',
                    image: require('../Images/english3.jpg'),
                    filename: 'English_10_HM_MM.pdf'

                },
                {
                    id: 8,
                    subject: 'हिंदी',
                    image: require('../Images/hindi1.jpg'),
                    filename: 'Hindi_10_EM_MM.pdf'

                },
                {
                    id: 9,
                    subject: 'मराठी',
                    image: require('../Images/book3.jpg'),
                    filename: 'Marathi_10_MM.pdf'

                },
                {
                    id: 1,
                    subject: 'गणित भाग-I',
                    image: require('../Images/maths3.jpg'),
                    filename: 'Maths-I_10_MM.pdf'

                },
                {
                    id: 2,
                    subject: 'गणित भाग-II',
                    image: require('../Images/maths4.jpg'),
                    filename: 'Maths-II_10_MM.pdf'

                },
                {
                    id: 3,
                    subject: 'विज्ञान आणि तंत्रज्ञान I',
                    image: require('../Images/science1.jpg'),
                    filename: 'Science-I_10_MM.pdf'

                },
                {
                    id: 4,
                    subject: 'विज्ञान आणि तंत्रज्ञान II',
                    image: require('../Images/science2.jpg'),
                    filename: 'Science-II_10_MM.pdf'

                },
                {
                    id: 5,
                    subject: 'इतिहास व राज्यशास्त्र',
                    image: require('../Images/history1.jpg'),
                    filename: 'History_10_MM.pdf'

                },
                {
                    id: 6,
                    subject: 'भूगोल',
                    image: require('../Images/geography2.jpg'),
                    filename: 'Geography_10_MM.pdf'

                },
            ],
            username: "",
            name: "",
        };
    }
    serachuserEM(text) {
        this.setState({
            userfilteredEM: this.state.tasks_10std_EM.filter(i =>
                i.subject.toLowerCase().includes(text.toLowerCase()),
            ),
        });
    }
    serachuserHM(text) {
        this.setState({
            userfilteredHM: this.state.tasks_10std_HM.filter(i =>
                i.name.toLowerCase().includes(text.toLowerCase()),
            ),
        });
    }
    serachuserMM(text) {
        this.setState({
            userfilteredMM: this.state.tasks_10std_MM.filter(i =>
                i.name.toLowerCase().includes(text.toLowerCase()),
            ),
        });
    }
    render() {
        const { tasks_10std_EM, tasks_10std_HM, tasks_10std_MM, userfilteredHM, userfilteredEM, userfilteredMM } = this.state
        return (
            <Container>
                <Tabs tabBarPosition="bottom">
                    <Tab heading="English Med.." tabStyle={{ backgroundColor: '#be79df' }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#be79df' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
                        <ScrollView>
                            <View style={{ padding: 0 }}>
                                <ImageBackground
                                    source={require('../Images/g-4.jpg')}
                                    style={{ width: "100%", height: window.height - 500 }}
                                    resizeMode="cover"
                                    imageStyle={{ borderBottomRightRadius: 70 }}
                                >
                                    <View style={styles.darkoverlay}></View>
                                    <View style={{ paddingTop: 90, paddingLeft: 16 }}>
                                        <Text style={{ fontSize: 32, fontWeight: "bold", color: "white", textTransform: "capitalize" }}> Hi {this.state.name},</Text>
                                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>English Medium Textbooks For class 10</Text>
                                    </View>
                                    <View>
                                        <TextInput style={styles.searchbox} placeholder="Search Books" placeholderTextColor="#666" onChangeText={text => { this.serachuserEM(text) }}>
                                        </TextInput>
                                        <Icon type="FontAwesome" style={{ color: '#666', fontSize: 22, position: 'absolute', top: 30, left: "80%" }} name='search' />
                                    </View>
                                    <Icon type="AntDesign" style={{ color: 'white', fontSize: 30, position: 'absolute', top: 20, left: "5%" }} name='arrowleft' onPress={Actions.pop} />
                                </ImageBackground>
                                <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 5, margin: 2, backgroundColor: "white" }}>
                                    {userfilteredEM.map(EM10 => {
                                        return <Grid key={EM10.id} subject={EM10.subject} filename={EM10.filename} Image={EM10.image} />
                                    })}
                                </View>
                            </View>
                        </ScrollView>
                    </Tab>
                    <Tab heading="Hindi Med.." tabStyle={{ backgroundColor: '#be79df' }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#be79df' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
                        <ScrollView>
                            <View style={{ padding: 0 }}>
                                <ImageBackground
                                    source={require('../Images/g-5.jpg')}
                                    style={{ width: "100%", height: window.height - 500 }}
                                    resizeMode="cover"
                                    imageStyle={{ borderBottomRightRadius: 70 }}
                                >
                                    <View style={styles.darkoverlay}></View>
                                    <View style={{ paddingTop: 90, paddingLeft: 16 }}>
                                        <Text style={{ fontSize: 32, fontWeight: "bold", color: "white", textTransform: "capitalize" }}> Hi {this.state.name},</Text>
                                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Hindi Medium Textbooks For class 10</Text>
                                    </View>
                                    <View>
                                        <TextInput style={styles.searchbox} placeholder="Search Books" placeholderTextColor="#666" onChangeText={text => { this.serachuserHM(text) }}>
                                        </TextInput>
                                        <Icon type="FontAwesome" style={{ color: '#666', fontSize: 22, position: 'absolute', top: 30, left: "80%" }} name='search' />
                                    </View>
                                    <Icon type="AntDesign" style={{ color: 'white', fontSize: 30, position: 'absolute', top: 20, left: "5%" }} name='arrowleft' onPress={Actions.pop} />
                                </ImageBackground>
                                <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 5, margin: 2, backgroundColor: "white" }}>
                                    {userfilteredHM.map(HM10 => {
                                        return <Grid key={HM10.id} subject={HM10.subject} filename={HM10.filename} Image={HM10.image} />
                                    })}
                                </View>
                            </View>
                        </ScrollView>
                    </Tab>
                    <Tab heading="Marathi Med.." tabStyle={{ backgroundColor: '#be79df' }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#be79df' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
                        <ScrollView>
                            <View style={{ padding: 0 }}>
                                <ImageBackground
                                    source={require('../Images/g-6.jpg')}
                                    style={{ width: "100%", height: window.height - 500 }}
                                    resizeMode="cover"
                                    imageStyle={{ borderBottomRightRadius: 70 }}
                                >
                                    <View style={styles.darkoverlay}></View>
                                    <View style={{ paddingTop: 90, paddingLeft: 16 }}>
                                        <Text style={{ fontSize: 32, fontWeight: "bold", color: "white", textTransform: "capitalize" }}> Hi {this.state.name},</Text>
                                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Marathi Medium Textbooks For class 10</Text>
                                    </View>
                                    <View>
                                        <TextInput style={styles.searchbox} placeholder="Search Books" placeholderTextColor="#666" onChangeText={text => { this.serachuserMM(text) }}>
                                        </TextInput>
                                        <Icon type="FontAwesome" style={{ color: '#666', fontSize: 22, position: 'absolute', top: 30, left: "80%" }} name='search' />
                                    </View>
                                    <Icon type="AntDesign" style={{ color: 'white', fontSize: 30, position: 'absolute', top: 20, left: "5%" }} name='arrowleft' onPress={Actions.pop} />
                                </ImageBackground>
                                <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 5, margin: 2, backgroundColor: "white" }}>
                                    {userfilteredMM.map(MM10 => {
                                        return <Grid key={MM10.id} subject={MM10.subject} filename={MM10.filename} Image={MM10.image} />
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