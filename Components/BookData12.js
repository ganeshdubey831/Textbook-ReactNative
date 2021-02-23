import React, { Component } from 'react';
import { View, Text, BackHandler, FlatList, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LottieView from 'lottie-react-native';

export default class BookData12 extends Component {
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
        var Sci = [
            { key: "1.Physic" },
            { key: "2.Chemistry" },
            { key: "3.Biology" },
            { key: "4.Maths-I" },
            { key: "5.Maths-II" },
            { key: "6.English" },
            { key: "7.Information & Technology(IT)" }
        ];
        var Com = [
            { key: "1.Book Keeping" },
            { key: "2.Secretarial Practical" },
            { key: "3.Organisation Of Commerce" },
            { key: "4.Economics" },
            { key: "5.Maths-I" },
            { key: "6.Maths-II" },
            { key: "7.English" },
        ];
        return (
            <View style={{ flex: 1, justifyContent: "center" }}>
                <ScrollView>
                    {/* first div  */}
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 30, borderBottomColor: "blue", borderBottomWidth: 5, width: "40%", marginLeft: 20, alignSelf: "center" }}>SCIENCE</Text>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                            <FlatList
                                data={Sci}
                                renderItem={
                                    ({ item }) => <View style={{ marginTop: 5, alignSelf: "center" }}><Text style={{ marginTop: 10, marginHorizontal: 20, fontWeight: "bold", fontSize: 10, color: 'gray' }}>{item.key}</Text></View>
                                }
                            >
                            </FlatList>
                        </View>
                        <View style={{ flex: 1, marginTop: 20 }}>
                            <View style={{ width: "100%", height: "100%" }}>
                                <LottieView source={require('../Animation/rocket.json')} autoPlay loop></LottieView>
                            </View>
                        </View>
                    </View>
                    {/* second div */}
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 70, borderBottomColor: "blue", borderBottomWidth: 5, width: "40%", marginLeft: 20, alignSelf: "center" }}>COMMERCE</Text>
                    <View style={{ flex: 1, flexDirection: "row", marginBottom: 20 }}>
                        <View style={{ flex: 1, marginTop: 20 }}>
                            <View style={{ width: "100%", height: "100%" }}>
                                <LottieView source={require('../Animation/learn.json')} autoPlay loop></LottieView>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <FlatList
                                data={Com}
                                renderItem={
                                    ({ item }) => <View style={{ marginTop: 5, alignSelf: "center" }}><Text style={{ marginTop: 10, marginHorizontal: 20, fontWeight: "bold", fontSize: 10, color: 'gray' }}>{item.key}</Text></View>
                                }
                            >
                            </FlatList>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
