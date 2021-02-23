import React, { Component } from 'react';
import { View, Text, BackHandler, FlatList, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LottieView from 'lottie-react-native';

export default class BookData10 extends Component {
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
        var EM = [
            { key: "1.Maths-I" },
            { key: "2.Maths-II" },
            { key: "3.Science" },
            { key: "4.History" },
            { key: "5.Geography" },
        ];
        var HM = [
            { key: "1.गणित भाग 1" },
            { key: "2.गणित भाग 2" },
            { key: "3.विज्ञान और प्रौद्योगिकी" },
            { key: "4.इतिहास और नागरिक शास्त्र" },
            { key: "5.भूगोल" },
        ];
        var MM = [
            { key: "1.गणित भाग-I" },
            { key: "2.गणित भाग-II" },
            { key: "3.विज्ञान आणि तंत्रज्ञान" },
            { key: "4.इतिहास व राज्यशास्त्र" },
            { key: "5.भूगोल" },
        ];
        return (
            <View style={{ flex: 1, justifyContent: "center" }}>
                <ScrollView>
                    {/* first div  */}
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 30, borderBottomColor: "blue", borderBottomWidth: 5, width: "40%", marginLeft: 20, alignSelf: "center" }}>English Medium</Text>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                            <FlatList
                                data={EM}
                                renderItem={
                                    ({ item }) => <View style={{ marginTop: 5, alignSelf: "center" }}><Text style={{ marginTop: 10, marginHorizontal: 20, fontWeight: "bold", fontSize: 12, color: 'gray' }}>{item.key}</Text></View>
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
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 30, borderBottomColor: "blue", borderBottomWidth: 5, width: "40%", marginLeft: 20, alignSelf: "center" }}>Hindi Medium</Text>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, marginTop: 20 }}>
                            <View style={{ width: "100%", height: "100%" }}>
                                <LottieView source={require('../Animation/2.json')} autoPlay loop></LottieView>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <FlatList
                                data={HM}
                                renderItem={
                                    ({ item }) => <View style={{ marginTop: 5, alignSelf: "center" }}><Text style={{ marginTop: 10, marginHorizontal: 20, fontWeight: "bold", fontSize: 12, color: 'gray' }}>{item.key}</Text></View>
                                }
                            >
                            </FlatList>
                        </View>
                    </View>
                    {/* third div */}
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 30, borderBottomColor: "blue", borderBottomWidth: 5, width: "40%", marginLeft: 20, alignSelf: "center" }}>Marathi Medium</Text>
                    <View style={{ flex: 1, flexDirection: "row", marginBottom: 20 }}>
                        <View style={{ flex: 1 }}>
                            <FlatList
                                data={MM}
                                renderItem={
                                    ({ item }) => <View style={{ marginTop: 5, alignSelf: "center" }}><Text style={{ marginTop: 10, marginHorizontal: 20, fontWeight: "bold", fontSize: 12, color: 'gray' }}>{item.key}</Text></View>
                                }
                            >
                            </FlatList>
                        </View>
                        <View style={{ flex: 1, marginTop: 20 }}>
                            <View style={{ width: "100%", height: "100%" }}>
                                <LottieView source={require('../Animation/1.json')} autoPlay loop></LottieView>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
