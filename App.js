/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import HomePage from "./src/components/HomePage";

import { Provider } from 'react-redux';
import store from './src/redux/store';

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <HomePage/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
