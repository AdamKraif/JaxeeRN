import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Animated,
    Dimensions,
    ScrollView,
    StyleSheet,
    findNodeHandle
} from 'react-native';
import { BlurView } from 'react-native-blur';
import StarRating from 'react-native-star-rating';


const {height, width} = Dimensions.get('window');

class SpCard extends Component {

    constructor() {
        super();
        this.state = {
            rating: parseInt(Math.random() * 5) || 1,
            viewRef: null
        }
    }

    componentWillMount() {

    }

    imageLoaded() {
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
    }


    render() {
        const {spItem, shoiuldGoToTop, spSmallCardOpacityAnim, spCardImageScale} = this.props;
        return <View style={{
            flex: 1,
            flexDirection: shoiuldGoToTop ? 'column' : 'row',

            backgroundColor: 'white',
        }}>
            <Animated.Image
                ref={(img) => { this.backgroundImage = img; }}
                style={[{
                    width: width,
                    height: height * 0.35,

                }, styles.absolute]}
                onLoadEnd={this.imageLoaded.bind(this)}
                source={{uri: spItem.photoURL}}
            />

                {shoiuldGoToTop ? null  : this.state.viewRef ? <BlurView
                style={[styles.absolute, {
                    width: width,
                    height: height * 0.35,
                }]}
                viewRef={this.state.viewRef}
                blurType="dark"
                blurAmount={10}
            /> : null}
            <Animated.View style={{
                position: 'absolute', top: shoiuldGoToTop ? height * 0.36 : 0,
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'transparent',
                padding: 10,
                paddingTop: 5, paddingBottom: 0,
                justifyContent: 'space-between',
                opacity: spSmallCardOpacityAnim
            }}>
                {shoiuldGoToTop ? null : <Animated.Image
                    style={{
                    width: 44,
                    height: 44,
                    borderRadius: 22,
                    borderColor: '#5e5587',
                    borderWidth: 1,
                    marginRight: 15,
                }}
                    source={{uri: spItem.photoURL}}
                />}
                <View style={{flex: 1, flexDirection: 'column', marginRight: 15, backgroundColor: 'transparent'}}>
                    <Animated.Text style={{
                    color: shoiuldGoToTop ? '#333333' : 'white',
                    fontSize: 20,}}>

                        {spItem.name + " " + spItem.lastname}
                    </Animated.Text>
                    <Animated.Text style={{
                    color: shoiuldGoToTop ? '#333333' : 'white',
                    fontSize: 14,
                    opacity: 0.8}}>

                        {spItem.jobs[0].jobName}
                    </Animated.Text>
                </View>
                <StarRating
                    starSize={shoiuldGoToTop ? 45 : 30}
                    disabled={true}
                    maxStars={5}
                    rating={this.state.rating}
                    starColor={shoiuldGoToTop ? '#5e5587' : 'white'}
                />
            </Animated.View>
        </View>
    }
}

SpCard.propTypes = {};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    absolute: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
    },
});

export default SpCard;