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
                        borderStyle: 'solid',
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
                    source={{ uri: marker.photoURL && marker.photoURL != '' ? marker.photoURL : (marker.picture_large && marker.picture_large != '' ? marker.picture_large : (marker.picture && marker.picture != '' ? marker.picture : 'https://firebasestorage.googleapis.com/v0/b/jaxee-276a7.appspot.com/o/Jaxee%2FApp%20Store%20Images%20-%20FinalArtboard%201%20copy.jpg?alt=media&token=0f024375-c092-44e8-a265-fbd558977954'))}}
                />
            </MapView.Marker>
        </View>
    }
}

JaxeeMarker.propTypes = {};


export default JaxeeMarker;