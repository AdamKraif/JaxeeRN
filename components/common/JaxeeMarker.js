import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Animated,
} from 'react-native';
import MapView from 'react-native-maps';
import AnimatedMarker from "./AnimatedMarker";


class JaxeeMarker extends Component {

    render() {
        const {marker, cardIndex, onPress} = this.props;

        return <View>
            <MapView.Marker style={{
                opacity: cardIndex === marker.id ? 1 : 0.7,
                transform: [
                    {scale: cardIndex === marker.id ? 1.1 : 1},
                ],
            }} key={marker.id}
                            coordinate={marker.coordinate}
                            onPress={() => {
                                onPress && onPress();
                            }}
            >
                <AnimatedMarker

                    amount={marker.amount}
                />
            </MapView.Marker>
        </View>
    }
}

JaxeeMarker.propTypes = {};


export default JaxeeMarker;