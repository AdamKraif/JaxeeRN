import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Animated,
    Image,
    ScrollView
} from 'react-native';
import firebase from 'react-native-firebase';

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: null
        };

    }


    componentWillMount() {
        firebase.database().ref("test/orders").orderByChild("orderMadeBy").equalTo("adamkraifgmailcom").on("value", (data) => {
            let orders = data.val();
            if (orders != null) {
                this.setState({orders: orders});
            }
        });
    }

    renderJobs = () => {
        const {orders} = this.state;
        return Object.keys(this.state.orders).map((key, i) => {
            return <Text key={i}>{this.state.orders[key].jobType}</Text>
        })
    };

    render() {
        const {orders} = this.state;
        return (
            <View style={[{flex: 1}, {backgroundColor: '#ff4081'}]}>
                {orders ? <ScrollView>{this.renderJobs()}</ScrollView> : null}
            </View>
        )
    }
}

HomeView.propTypes = {};


export default HomeView;