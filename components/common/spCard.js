import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Animated,
} from 'react-native';

class SpCard extends Component {

    render() {
        const {spItem, spContainerImageWidth, spContainerImageHeight} = this.props;
        return <View style={{
            flex: 1,
            flexDirection: this.shoiuldGoToTop ? 'column' : 'row',

            backgroundColor: '#5e5587',
        }}>
            <Animated.Image
                style={{
                    width: spContainerImageWidth,
                    height: spContainerImageHeight
                }}
                source={{uri: spItem.photoURL}}
            />
            <Text style={{
                color: 'white',
                marginLeft: 15
            }}>{spItem.name + " " + spItem.lastname}</Text>
        </View>
    }
}

SpCard.propTypes = {};


export default SpCard;