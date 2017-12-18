import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Animated,
    Image,
    ScrollView
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../redux/actions'

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: null
        };

    }


    componentWillMount() {
        this.props.jobsQuery();
    }

    renderJobs = () => {
        const {serviceProviders} = this.props;
        if (!serviceProviders) return null;

        return Object.keys(serviceProviders).map((key, i) => {
            return <Text key={i}>{serviceProviders[key].jobName}</Text>
        })
    };

    render() {
        const {serviceProviders} = this.props;
        return (
            <View style={[{flex: 1}, {backgroundColor: '#ff4081'}]}>
                {serviceProviders ? <ScrollView>{this.renderJobs()}</ScrollView> : null}
            </View>
        )
    }
}

HomeView.propTypes = {};


function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        serviceProviders: state.firebaseQueries.jobs,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);