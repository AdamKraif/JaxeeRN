import React, {Component} from 'react';
import {
    View,
    Animated,
    Dimensions,
    StyleSheet,
    findNodeHandle, Image,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import {getConfig} from "../utilities/utilities";


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

    render() {
        const {spItem, shoiuldGoToTop, spSmallCardOpacityAnim, spSmallCardOpacityAnim2} = this.props;
        return <View style={{
            flex: 1,
            flexDirection: shoiuldGoToTop ? 'column' : 'row',

            backgroundColor: 'white',
        }}>
            <Image
                style={[{
                    width: width,
                    height: height * 0.35,
                }, styles.absolute]}
                source={{uri: spItem.photoURL && spItem.photoURL != '' ? spItem.photoURL : (spItem.picture_large && spItem.picture_large != '' ? spItem.picture_large : (spItem.picture && spItem.picture != '' ? spItem.picture : 'https://firebasestorage.googleapis.com/v0/b/jaxee-276a7.appspot.com/o/Jaxee%2FApp%20Store%20Images%20-%20FinalArtboard%201%20copy.jpg?alt=media&token=0f024375-c092-44e8-a265-fbd558977954'))}}
            />

            {this.state.viewRef ? <Animated.View style={[styles.absolute, {
                    width: width,
                    height: height * 0.35,
                    opacity: spSmallCardOpacityAnim2
                }]}/> : null}
            <Animated.View style={{
                position: 'absolute', right:0, left: 0, top: shoiuldGoToTop ? height * 0.36 : 0,
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
                    marginRight: 10,
                    borderRadius: 22,
                    borderColor: getConfig().mainColor,
                    borderWidth: 1,
                }}
                        source={{uri: spItem.photoURL && spItem.photoURL != '' ? spItem.photoURL : (spItem.picture_large && spItem.picture_large != '' ? spItem.picture_large : (spItem.picture && spItem.picture != '' ? spItem.picture : 'https://firebasestorage.googleapis.com/v0/b/jaxee-276a7.appspot.com/o/Jaxee%2FApp%20Store%20Images%20-%20FinalArtboard%201%20copy.jpg?alt=media&token=0f024375-c092-44e8-a265-fbd558977954'))}}
                    />}
                <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'transparent'}}>
                    <Animated.Text style={{
                    color: shoiuldGoToTop ? '#333333' : 'white',
                    fontSize: shoiuldGoToTop ? 18 : 19}}>

                        {spItem.name + " " + spItem.lastname}
                    </Animated.Text>
                    <Animated.Text style={{
                    color: shoiuldGoToTop ? '#333333' : 'white',
                    fontSize: 14,
                    opacity: 0.8}}>

                        {spItem.jobs ? spItem.jobs[0].jobName : ""}
                    </Animated.Text>
                </View>
                <View style={{position: 'absolute', right: 8, top: shoiuldGoToTop ? 0 : 8}}>
                    <StarRating
                        starSize={shoiuldGoToTop ? 40 : 25}
                        disabled={true}
                        maxStars={5}
                        rating={this.state.rating}
                        starColor={shoiuldGoToTop ? getConfig().mainColor : 'white'}
                    />
                </View>
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