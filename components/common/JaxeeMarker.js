import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Animated,
    Image
} from 'react-native';
import MapView from 'react-native-maps';

class JaxeeMarker extends Component {

    render() {
        const {marker, cardIndex, onPress, id} = this.props;

        console.log('marker', marker.stripedEmail);
        return <View>
            <MapView.Marker style={{
                        opacity: cardIndex === id ? 1 : 0.7,
                        width: 44,
                        height: 44,
                        borderRadius: 22,
                        borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: '#5e5587',
                            transform: [
                                {scale: cardIndex === id ? 1.1 : 1},
                            ],
                        }}
                            key={id}
                            coordinate={marker.location[0]}
                            onPress={() => {
                                onPress && onPress();
                            }}
            >
                <Image
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        borderColor: '#5e5587',
                    }}
                    source={{ uri: marker.photoURL }}
                />
            </MapView.Marker>
        </View>
    }
}

JaxeeMarker.propTypes = {};


export default JaxeeMarker;