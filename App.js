import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Router from './Router';
import { StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

const window = Dimensions.get('window')

const slides = [
  {
    key: 's1',
    title: 'Easy To Use',
    text: 'easy to use and easy to learn ',
    image: require('./Animation/school.json'),
    backgroundColor: ['#fc00ff', '#00dbde'],
  },
  {
    key: 's2',
    title: 'E-Learning',
    text: 'every instructor has his or her own method of teaching.',
    image: require('./Animation/E-learning.json'),
    backgroundColor: ['#ee0979', '#ff6a00'],
  },
  {
    key: 's3',
    title: 'Offline Books',
    text: 'let hangout and enjoy together with special place and special deal',
    image: require('./Animation/read.json'),
    backgroundColor: ['#ff00cc', '#333399'],
  },
  {
    key: 's4',
    title: ' Consistent',
    text: ' Your not lonly anymore',
    image: require('./Animation/search.json'),
    backgroundColor: ['#00c9ff', '#92fe9d'],
  }
];


export default class App extends Component {
  state = {
    showRealApp: false
  }
  _onDone = () => {
    this.setState({ showRealApp: true });
  }
  _onSkip = () => {
    this.setState({ showRealApp: true });
  }
  _renderItem = ({ item }) => {
    return (
      <ScrollView>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <LinearGradient colors={item.backgroundColor} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <View style={{
            height: window.height,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}>
            <View style={{ width: "100%", height: "50%" }}>
              <LottieView source={item.image} autoPlay loop></LottieView>
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </LinearGradient>
      </ScrollView>
    );
  }
  _renderNextButton = () => {
    return (
      <View>
        <Icon type="AntDesign" style={{ color: 'white', fontSize: 35, }} name='rightcircle' />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View>
        <Icon type="AntDesign" style={{ color: 'white', fontSize: 35, }} name='checkcircle' />
      </View>
    );
  };
  render() {
    if (this.state.showRealApp) {
      return (
        <React.Fragment>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <Router />
        </React.Fragment>
      );
    } else {
      return (
        <AppIntroSlider renderItem={this._renderItem} data={slides} activeDotStyle={{ width: 20, backgroundColor: "white", }} onDone={this._onDone} onSkip={this._onSkip} renderNextButton={this._renderNextButton} renderDoneButton={this._renderDoneButton} showSkipButton />
      );
    }
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontWeight: "bold",
    marginVertical: 20
  },
  text: {
    color: 'white',
    fontSize: 15,
    marginVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"

  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
    // // borderWidth: 3,
    // // borderColor: "white",
    // borderRadius: 50,
  }
});

