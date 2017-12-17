import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Animated,
    Dimensions,
    ScrollView
} from 'react-native';
import StarRating from 'react-native-star-rating';


const {height, width} = Dimensions.get('window');

class SpCard extends Component {

    constructor() {
        super();
        this.state = {
            rating: parseInt(Math.random() * 5) || 1
        }
    }

    componentWillMount() {

    }

    render() {
        const {spItem, shoiuldGoToTop, spSmallCardOpacityAnim, spCardImageScale} = this.props;
        return <View style={{
            flex: 1,
            flexDirection: shoiuldGoToTop ? 'column' : 'row',

            backgroundColor: 'white',
        }}>
            <Animated.Image
                style={{
                    width: width,
                    height: height * 0.35,
                    zIndex: 9,
                    transform: [
                                           {scale: spCardImageScale},
                                       ],
                }}
                source={{uri: spItem.photoURL}}
            />
            <Animated.View style={{
                position: 'absolute', top: shoiuldGoToTop ? height * 0.36 : 0,
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                paddingTop: 5, paddingBottom: 0,
                justifyContent: 'space-between',
                opacity: spSmallCardOpacityAnim
            }}>
                <View style={{flex: 1, flexDirection: 'column', marginRight: 20}}>
                    <Animated.Text style={{
                    color: '#333333',
                    fontSize: 20,}}>

                        {spItem.name + " " + spItem.lastname}
                    </Animated.Text>
                    <Animated.Text style={{
                    color: '#333333',
                    fontSize: 14,
                    opacity: 0.8}}>

                        {spItem.jobs[0].jobName}
                    </Animated.Text>
                </View>
                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={this.state.rating}
                    starColor={'#5e5587'}
                />
            </Animated.View>
        </View>
    }
}

SpCard.propTypes = {};


export default SpCard;