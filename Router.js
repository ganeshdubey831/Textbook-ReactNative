import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Components/Home'
import SplashScreen from './Components/SplashScreen'
import Home9std from './Components/Home9std'
import Home10std from './Components/Home10std'
import Home11std from './Components/Home11std'
import Home12std from './Components/Home12std'
import BookData9 from './Components/BookData9'
import BookData10 from './Components/BookData10'
import BookData11 from './Components/BookData11'
import BookData12 from './Components/BookData12'
import CompEnggHome from './Components/CompEnggHome'
import GoogleDrive from './Components/GoogleDrive'
import Google from './Components/Google'
import Youtube from './Components/Youtube'
import Linkedin from './Components/Linkedin'
import Github from './Components/Github'
import Loginpage from './Components/Loginpage'
import Registerpage from './Components/Registerpage'





export default class RouterComponent extends Component {
    render() {
        return (
            <Router navigationBarStyle={{ backgroundColor: "white" }} titleStyle={{ color: 'black', fontWeight: "bold", fontSize: 15, }}>
                <Scene key='root' >
                    <Scene key='SplashScreen' component={SplashScreen} hideNavBar />
                    <Scene key='Home' component={Home} hideNavBar />
                    <Scene key='Home9std' component={Home9std} title="9-STD TEXTBOOK" hideNavBar />
                    <Scene key='Home10std' component={Home10std} title="10-STD TEXTBOOK" hideNavBar />
                    <Scene key='Home11std' component={Home11std} title="11-STD TEXTBOOK" hideNavBar />
                    <Scene key='Home12std' component={Home12std} title="12-STD TEXTBOOK" hideNavBar />
                    <Scene key='BookData9' component={BookData9} title="9th Std Available Books" />
                    <Scene key='BookData10' component={BookData10} title="10th Std Available Books" />
                    <Scene key='BookData11' component={BookData11} title="11th Std Available Books" />
                    <Scene key='BookData12' component={BookData12} title="12th Std Available Books" />
                    <Scene key='CompEnggHome' component={CompEnggHome} title="Computer Engineering Books" hideNavBar />
                    <Scene key='GoogleDrive' component={GoogleDrive} title="Google Drive" />
                    <Scene key='Google' component={Google} title="Google Search" />
                    <Scene key='Youtube' component={Youtube} title="Youtube Search" />
                    <Scene key='Linkedin' component={Linkedin} title="Linkedin Search" />
                    <Scene key='Github' component={Github} title="Github Search" />
                    <Scene key='Login' component={Loginpage} hideNavBar initial />
                    <Scene key='Register' component={Registerpage} hideNavBar />
                </Scene>
            </Router>
        )
    }
}
