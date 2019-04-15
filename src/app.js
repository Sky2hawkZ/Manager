import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentDidMount() {
        const config = {
            apiKey: "AIzaSyBXrsU7tXH1OcaOcA0GstcJvtgF6bUuLtU",
            authDomain: "manager-49355.firebaseapp.com",
            databaseURL: "https://manager-49355.firebaseio.com",
            projectId: "manager-49355",
            storageBucket: "manager-49355.appspot.com",
            messagingSenderId: "1057744163238"
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;