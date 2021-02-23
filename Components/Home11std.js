import React, { Component } from 'react';
import { View, BackHandler, Image, Dimensions, ImageBackground, StyleSheet, Text, TextInput } from 'react-native';
import Grid from '../Components/Grid'
import { Container, Header, Content, Tab, Tabs, Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

const window = Dimensions.get('window')



export default class Home11std extends Component {
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
            tasks_11std_Sci: [
                {
                    id: 1,
                    subject: 'Physic',
                    image: require('../Images/phy4.jpg'),
                    filename: 'physic_11sci.pdf'

                },
                {
                    id: 2,
                    subject: 'Chemistry',
                    image: require('../Images/chem1.jpg'),
                    filename: 'chemistry_11sci.pdf'

                },
                {
                    id: 3,
                    subject: 'Biology',
                    image: require('../Images/bio3.jpg'),
                    filename: 'biology_11sci.pdf'

                },
                {
                    id: 4,
                    subject: 'Maths-I',
                    image: require('../Images/mat6.jpg'),
                    filename: 'maths-I_11sci.pdf'

                },
                {
                    id: 5,
                    subject: 'Maths-II',
                    image: require('../Images/mat5.jpg'),
                    filename: 'maths-II_11sci.pdf'

                },
                {
                    id: 6,
                    subject: 'English',
                    image: require('../Images/english1.png'),
                    filename: 'English_11.pdf'

                },
                {
                    id: 7,
                    subject: 'Information & Technology',
                    image: require('../Images/IT-11.jpg'),
                    filename: 'IT_11.pdf'

                },
            ],
            userfilteredSci: [
                {
                    id: 1,
                    subject: 'Physic',
                    image: require('../Images/phy4.jpg'),
                    filename: 'physic_11sci.pdf'

                },
                {
                    id: 2,
                    subject: 'Chemistry',
                    image: require('../Images/chem1.jpg'),
                    filename: 'chemistry_11sci.pdf'

                },
                {
                    id: 3,
                    subject: 'Biology',
                    image: require('../Images/bio3.jpg'),
                    filename: 'biology_11sci.pdf'

                },
                {
                    id: 4,
                    subject: 'Maths-I',
                    image: require('../Images/mat6.jpg'),
                    filename: 'maths-I_11sci.pdf'

                },
                {
                    id: 5,
                    subject: 'Maths-II',
                    image: require('../Images/mat5.jpg'),
                    filename: 'maths-II_11sci.pdf'

                },
                {
                    id: 6,
                    subject: 'English',
                    image: require('../Images/english1.png'),
                    filename: 'English_11.pdf'

                },
                {
                    id: 7,
                    subject: 'Information & Technology',
                    image: require('../Images/IT-11.jpg'),
                    filename: 'IT_11.pdf'

                },
            ],
            tasks_11std_Com: [
                {
                    id: 1,
                    subject: 'Book Keeping',
                    image: require('../Images/accounts1.jpg'),
                    filename: 'bk_11com.pdf'

                },
                {
                    id: 2,
                    subject: 'Secretarial Practical ',
                    image: require('../Images/sp1.jpg'),
                    filename: 'sp_11com.pdf'

                },
                {
                    id: 3,
                    subject: 'Organisation of Commerce',
                    image: require('../Images/oc1.jpeg'),
                    filename: 'oc_11com.pdf'

                },
                {
                    id: 4,
                    subject: 'Economics',
                    image: require('../Images/eco1.jpg'),
                    filename: 'eco_11com.pdf'

                },
                {
                    id: 5,
                    subject: 'Maths-I',
                    image: require('../Images/mat5.jpg'),
                    filename: 'maths-I_11com.pdf'

                },
                {
                    id: 6,
                    subject: 'Maths-II',
                    image: require('../Images/mat6.jpg'),
                    filename: 'maths-II_11com.pdf'

                },
                {
                    id: 7,
                    subject: 'English',
                    image: require('../Images/english3.jpg'),
                    filename: 'English_11.pdf'

                },
                {
                    id: 8,
                    subject: 'Information & Technology',
                    image: require('../Images/IT-12.jpg'),
                    filename: 'IT_11.pdf'

                },
            ],
            userfilteredCom: [
                {
                    id: 1,
                    subject: 'Book Keeping',
                    image: require('../Images/accounts1.jpg'),
                    filename: 'bk_11com.pdf'

                },
                {
                    id: 2,
                    subject: 'Secretarial Practical ',
                    image: require('../Images/sp1.jpg'),
                    filename: 'sp_11com.pdf'

                },
                {
                    id: 3,
                    subject: 'Organisation of Commerce',
                    image: require('../Images/oc1.jpeg'),
                    filename: 'oc_11com.pdf'

                },
                {
                    id: 4,
                    subject: 'Economics',
                    image: require('../Images/eco1.jpg'),
                    filename: 'eco_11com.pdf'

                },
                {
                    id: 5,
                    subject: 'Maths-I',
                    image: require('../Images/mat5.jpg'),
                    filename: 'maths-I_11com.pdf'

                },
                {
                    id: 6,
                    subject: 'Maths-II',
                    image: require('../Images/mat6.jpg'),
                    filename: 'maths-II_11com.pdf'

                },
                {
                    id: 7,
                    subject: 'English',
                    image: require('../Images/english3.jpg'),
                    filename: 'English_11.pdf'

                },
                {
                    id: 8,
                    subject: 'Information & Technology',
                    image: require('../Images/IT-12.jpg'),
                    filename: 'IT_11.pdf'

                },
            ],
            username: "",
            name: "",



        };
    }
    serachuserSci(text) {
        this.setState({
            userfilteredSci: this.state.tasks_11std_Sci.filter(i =>
                i.subject.toLowerCase().includes(text.toLowerCase()),
            ),
        });
    }
    serachuserCom(text) {
        this.setState({
            userfilteredCom: this.state.tasks_11std_Com.filter(i =>
                i.subject.toLowerCase().includes(text.toLowerCase()),
            ),
        });
    }
    render() {
        const { tasks_11std_Sci, tasks_11std_Com, userfilteredSci, userfilteredCom } = this.state
        return (
            <Container>
                <Tabs tabBarPosition="bottom">
                    <Tab heading="Science" tabStyle={{ backgroundColor: '#be79df' }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#be79df' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
                        <ScrollView>
                            <View style={{ padding: 0 }}>
                                <ImageBackground
                                    source={require('../Images/a-1.jpg')}
                                    style={{ width: "100%", height: window.height - 500 }}
                                    resizeMode="cover"
                                    imageStyle={{ borderBottomRightRadius: 70 }}
                                >
                                    <View style={styles.darkoverlay}></View>
                                    <View style={{ paddingTop: 90, paddingLeft: 16 }}>
                                        <Text style={{ fontSize: 32, fontWeight: "bold", color: "white", textTransform: "capitalize" }}> Hi {this.state.name},</Text>
                                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Science Stream Textbooks For class 11</Text>
                                    </View>
                                    <View>
                                        <TextInput style={styles.searchbox} placeholder="Search Books" placeholderTextColor="#666" onChangeText={text => { this.serachuserSci(text) }}>
                                        </TextInput>
                                        <Icon type="FontAwesome" style={{ color: '#666', fontSize: 22, position: 'absolute', top: 30, left: "80%" }} name='search' />
                                    </View>
                                    <Icon type="AntDesign" style={{ color: 'white', fontSize: 30, position: 'absolute', top: 20, left: "5%" }} name='arrowleft' onPress={Actions.pop} />
                                </ImageBackground>
                                <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 5, margin: 2, backgroundColor: "white" }}>
                                    {userfilteredSci.map(EM10 => {
                                        return <Grid key={EM10.id} subject={EM10.subject} filename={EM10.filename} Image={EM10.image} />
                                    })}
                                </View>
                            </View>
                        </ScrollView>
                    </Tab>
                    <Tab heading="Commerce" tabStyle={{ backgroundColor: '#be79df' }} textStyle={{ color: 'white' }} activeTabStyle={{ backgroundColor: '#be79df' }} activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
                        <ScrollView>
                            <View style={{ padding: 0 }}>
                                <ImageBackground
                                    source={require('../Images/a-2.jpg')}
                                    style={{ width: "100%", height: window.height - 500 }}
                                    resizeMode="cover"
                                    imageStyle={{ borderBottomRightRadius: 70 }}
                                >
                                    <View style={styles.darkoverlay}></View>
                                    <View style={{ paddingTop: 90, paddingLeft: 16 }}>
                                        <Text style={{ fontSize: 32, fontWeight: "bold", color: "white", textTransform: "capitalize" }}> Hi {this.state.name},</Text>
                                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Commerce Stream Textbooks For class 11</Text>
                                    </View>
                                    <View>
                                        <TextInput style={styles.searchbox} placeholder="Search Books" placeholderTextColor="#666" onChangeText={text => { this.serachuserCom(text) }}>
                                        </TextInput>
                                        <Icon type="FontAwesome" style={{ color: '#666', fontSize: 22, position: 'absolute', top: 30, left: "80%" }} name='search' />
                                    </View>
                                    <Icon type="AntDesign" style={{ color: 'white', fontSize: 30, position: 'absolute', top: 20, left: "5%" }} name='arrowleft' onPress={Actions.pop} />
                                </ImageBackground>
                                <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 5, margin: 2, backgroundColor: "white" }}>
                                    {userfilteredCom.map(EM10 => {
                                        return <Grid key={EM10.id} subject={EM10.subject} filename={EM10.filename} Image={EM10.image} />
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
