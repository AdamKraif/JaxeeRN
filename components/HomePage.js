import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback,
    Text,
    Platform,
    ScrollView,
    LayoutAnimation,
    NativeModules
} from 'react-native';
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import MainMap from "./MainMap";

const {UIManager} = NativeModules;


const {height, width} = Dimensions.get('window');

const FirstRoute = () => <View style={[styles.container, {backgroundColor: '#ff4081'}]}/>;
const SecondRoute = () => <MainMap/>
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class HomePage extends Component {
    state = {
        index: 0,
        routes: [
            {key: 'first', title: 'First'},
            {key: 'second', title: 'Second'},
        ],
        test: false,
        inputsHeight: 0
    };

    _handleIndexChange = index => this.setState({index});

    _renderHeader = props => <TabBar {...props} />;

    _renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    render() {
        return (
            <View style={{flex: 1}}>
                <TabViewAnimated
                    swipeEnabled={false}
                    style={styles.container}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onIndexChange={this._handleIndexChange}
                    initialLayout={{
                        height: 0,
                        width
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});