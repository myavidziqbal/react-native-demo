// /** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import Splash from './components/Splash';
// import Login from './components/Login';

// class Main extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { currentScreen: 'Splash'}
//         console.log('Start Doing Some task for abaout 3 seconds')
//         setTimeout(() => {
//             console.log('Done Some task for abaout 3 seconds')
//             this.setState({ currentScreen: 'Login'})
//         }, 3000)
//     }
//     render() {
//         const { currentScreen } = this.state
//         let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />
//         return mainScreen
        
//     }
// }

// AppRegistry.registerComponent('MyProject', () => Main);

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import App from './App'
import Login from './components/Login'
import Splash from './components/Splash'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'Splash' };
        console.log('Start doing some tasks for about 3 seconds')
        setTimeout(()=>{
            console.log('Done some tasks for about 3 seconds')
            this.setState({ currentScreen: 'Login' })
        }, 3000)
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />
        return mainScreen
    }
}
AppRegistry.registerComponent('MyProject', () => Main)