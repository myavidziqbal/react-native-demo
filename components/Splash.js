// import React, {Component} from 'react';
// import { StyleSheet, Text, View} from 'react-native';


// export default class Splash extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { timer: 0}
//         setInterval(() => {
//             this.setState({ timer: this.state.timer + 1})
//         }, 1000)
//     }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>{`Welcome to myApp: ${this.state.timer}`}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     flex: 1
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black'
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('ReactNativeProject', () => Main)

import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
export default class Splash extends Component {
    constructor(props) {
        super(props)
        this.state = { timer: 0}
        
        setInterval(() => {            
            this.setState({ timer: this.state.timer + 1 })
        }, 1000)
        
    }

    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{`Welcome to myApp: ${this.state.timer}`}</Text>
                {/* <Text style={styles.title}>{`Hello Splash`}</Text> */}
            </View>
            
        )
    }
} 
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(32, 53, 70)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        color: 'white'
    }
})