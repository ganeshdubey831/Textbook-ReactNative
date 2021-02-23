import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import HomeGrid from './HomeGrid';
import { Actions } from 'react-native-router-flux';

export default class HomeComponent2 extends Component {
    state = {
        tasks_std: [
            {
                id: 1,
                std: "9th Standard",
                image: require('../Images/phy1.jpg'),
                action: Actions.BookData9
            },
            {
                id: 2,
                std: "10th Standard",
                image: require('../Images/phy2.jpg'),
                action: Actions.BookData10
            },
            {
                id: 3,
                std: "11th Standard",
                image: require('../Images/phy3.jpg'),
                action: Actions.BookData11
            },
            {
                id: 4,
                std: "12th Standard",
                image: require('../Images/phy6.jpg'),
                action: Actions.BookData12
            },
        ],
    };

    render() {
        const { tasks_std } = this.state
        return (
            <View style={{ flex: 1 }}>
                {/* <ScrollView> */}
                <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 5, margin: 0, backgroundColor: "white" }}>
                    {tasks_std.map(std => {
                        return <HomeGrid key={std.id} std={std.std} Image={std.image} actions={std.action} />
                    })}
                </View>
                {/* </ScrollView> */}
            </View>
        );
    }
}
