import React, {Component} from 'react';
import {
    View,
    Dimensions,
    PanResponder,
    Animated,
    Easing,
    StyleSheet
} from 'react-native';
import MapView from 'react-native-maps';
import Swiper from 'react-native-swiper';
import jaxeeData from "./data/jaxeeData";
import styling from "./data/mapStyling";
import SpCard from "./common/SpCard";
import JaxeeMarker from "./common/JaxeeMarker";


const {height, width} = Dimensions.get('window');
const FIRST_LEVEL_HEIGHT = 90;

class MainMap extends Component {

    constructor() {
        super();

        this.state = {
            items: jaxeeData.items,
            scrollEnabled: true,
            layoutHeight: 0,
            spContainerTranslateY: new Animated.Value(height),
            spContainerScaleX: new Animated.Value(0),
            spCardImageScale: new Animated.Value(0.1),
            overlayOpacityAnim: new Animated.Value(0),
            spSmallCardOpacityAnim: new Animated.Value(1),
            overlayScaleAnim: new Animated.Value(1),
            locationResult: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            cardIndex: 0,
            visibleSwiper: false
        };


        this.spContainerScaleXValue = this.state.spContainerScaleX.interpolate({
            inputRange: [0, 1],
            outputRange: [0.9, 1]
        });

        this.spCardImageScale = this.state.spCardImageScale.interpolate({
            inputRange: [0, 1],
            outputRange: [0.3, 1]
        });


        this.overlayOpacityValue = this.state.overlayOpacityAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.6]
        });

        this.spSmallCardOpacityAnim = this.state.spSmallCardOpacityAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });

        this.overlayScaleValue = this.state.overlayScaleAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0.99, 1]
        });
    }

    componentWillMount() {
        this._panResponder = (index) => {
            return PanResponder.create({
                onStartShouldSetPanResponder: (event, gestureState) => {
                    return false

                },
                onStartShouldSetPanResponderCapture: (event, gestureState) => {
                    return false
                },
                onMoveShouldSetPanResponder: (event, gestureState) => {
                    // console.log("this one", gestureState.dy, (Math.abs(gestureState.dy)) > 10);
                    return (Math.abs(gestureState.dy)) > 10;
                },
                onMoveShouldSetPanResponderCapture: (event, gestureState) => {
                    return false;
                },

                onPanResponderGrant: (event, gestureState) => {
                    this.onStart(event, gestureState, index);
                },
                onPanResponderMove: (event, gestureState) => {
                    this.onMove(event, gestureState, index);
                },
                onPanResponderRelease: (event, gestureState) => {
                    this.onEnd(event, gestureState, index);
                }
            })
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                locationResult: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }
            });
        });

        setTimeout(() => {
            this.setState({
                visibleSwiper: true
            });
        }, 100);
    }


    onStart(e, g, index) {
        this.setState({scrollEnabled: false});
    }

    onMove(e, g, index) {

        const {dy} = g;

        const {
            spContainerTranslateY,
            spContainerScaleX,
            layoutHeight,
            overlayOpacityAnim,
            overlayScaleAnim,
            spSmallCardOpacityAnim,
            spCardImageScale
        } = this.state;

        if (this.shoiuldGoToTop) {
            this.newPosition = dy;
        } else {
            this.newPosition = (layoutHeight - FIRST_LEVEL_HEIGHT) + dy;
        }

        const present = (1 - (this.newPosition / layoutHeight));


        Animated.parallel([
            Animated.timing(spContainerTranslateY, {
                duration: 0,
                toValue: this.newPosition < 0 ? 0 : this.newPosition,
                useNativeDriver: true
            }),
            Animated.timing(spContainerScaleX, {
                duration: 0,
                toValue: present > 1 ? 1 : present,
                useNativeDriver: true
            }),
            Animated.timing(spCardImageScale, {
                duration: 0,
                toValue: present > 1 ? 1 : present,
                useNativeDriver: true
            }),
            Animated.timing(overlayOpacityAnim, {
                duration: 0,
                toValue: present > 1 ? 1 : present,
                useNativeDriver: true
            }),
            Animated.timing(spSmallCardOpacityAnim, {
                duration: 10,
                toValue: 0,
                useNativeDriver: true
            }),
            Animated.timing(overlayScaleAnim, {
                duration: 0,
                toValue: present > 1 ? 0 : 1 - present,
                useNativeDriver: true
            })

        ]).start();

    }

    onEnd(e, g, index) {

        const {
            spContainerTranslateY,
            layoutHeight,
            spContainerScaleX,
            overlayOpacityAnim,
            overlayScaleAnim,
            spSmallCardOpacityAnim,
            spCardImageScale
        } = this.state;

        const duration = 200;

        if (this.shoiuldGoToTop) {
            this.shoiuldGoToTop = this.newPosition < (layoutHeight * 0.2);
        } else {
            this.shoiuldGoToTop = this.newPosition < (layoutHeight * 0.6);
        }

        Animated.parallel([
            Animated.timing(spContainerTranslateY, {
                duration,
                toValue: this.shoiuldGoToTop ? 0 : (layoutHeight - FIRST_LEVEL_HEIGHT),
                useNativeDriver: true,
                easing: Easing.out(Easing.cubic)
            }),
            Animated.timing(spContainerScaleX, {
                duration,
                toValue: this.shoiuldGoToTop ? 1 : 0,
                useNativeDriver: true
            }),
            Animated.timing(spCardImageScale, {
                duration,
                toValue: this.shoiuldGoToTop ? 1 : 0,
                useNativeDriver: true
            }),
            Animated.timing(overlayOpacityAnim, {
                duration,
                toValue: this.shoiuldGoToTop ? 1 : 0,
                useNativeDriver: true
            }),
            Animated.timing(overlayScaleAnim, {
                duration,
                toValue: this.shoiuldGoToTop ? 0 : 1,
                useNativeDriver: true
            }),

        ]).start(() => {
            Animated.timing(spSmallCardOpacityAnim, {
                duration: 0.5,
                toValue: 1,
                useNativeDriver: true
            }).start();
            if (this.shoiuldGoToTop) {
                this.setState({scrollEnabled: false});
            } else {
                this.setState({scrollEnabled: true});
            }
        });
    }


    _renderSp = () => {

        const {items} = this.state;
        return Object.keys(this.state.items).map((spItem, index) => {
            console.log("items ", spItem);
            return (<Animated.View key={index} {...this._panResponder(index).panHandlers}
                                   style={{
                                       transform: [
                                           {scale: this.spContainerScaleXValue},
                                       ],
                                       flex: 1,
                                       width: width,
                                       height: this.state.layoutHeight,
                                   }}>

                <SpCard shoiuldGoToTop={this.shoiuldGoToTop}
                        spSmallCardOpacityAnim={this.spSmallCardOpacityAnim}
                        spCardImageScale={this.spCardImageScale}
                        spItem={items[spItem]}/>

            </Animated.View>)
        });
    };

    _renderMarkers = () => {

        const {cardIndex} = this.state;
        return ( Object.keys(this.state.items).map((marker, i) => {


            return (<JaxeeMarker onPress={() => {
                    this.swiperRef.scrollBy((i - cardIndex), true);
                    this.setState({
                        cardIndex: i,
                        locationResult:  this.state.items[marker].location[0]
                    })
                }} key={i} cardIndex={cardIndex} id={i} marker={this.state.items[marker]}/>
            );
        }))

    };

    render() {
        return (
            <View onLayout={(event) => {
                const {x, y, width, height} = event.nativeEvent.layout;

                if (this.state.layoutHeight === 0) {
                    this.setState({layoutHeight: height}, () => {

                        let animationParalel = [];
                        animationParalel.push(Animated.timing(this.state.spContainerTranslateY, {
                            duration: 100,
                            toValue: height - FIRST_LEVEL_HEIGHT,
                            easing: Easing.out(Easing.cubic),
                            useNativeDriver: true
                        }));


                        Animated.parallel(animationParalel).start();

                    });
                }
            }}
                  style={{flex: 1}}>
                <MapView.Animated
                    style={{...StyleSheet.absoluteFillObject, transform: [{scale: this.overlayScaleValue}]}}
                    region={this.state.locationResult}
                    customMapStyle={styling.styles}
                >
                    {this._renderMarkers()}
                </MapView.Animated>

                <Animated.View pointerEvents={"none"}
                               style={[StyleSheet.absoluteFillObject, {
                                   backgroundColor: 'black',
                                   opacity: this.overlayOpacityValue
                               }]}/>

                <Animated.View style={{
                    ...StyleSheet.absoluteFillObject,
                    transform: [
                        {translateY: this.state.spContainerTranslateY},
                    ]
                }}>
                    {this.state.visibleSwiper ? <Swiper
                            ref={(ref) => {
                            this.swiperRef = ref;
                        }}
                            loop={false}
                            scrollEnabled={this.state.scrollEnabled}
                            showsPagination={false}
                            showsButtons={false}
                            onIndexChanged={(index) => {
                                this.setState({cardIndex: index, locationResult: this.state.items[Object.keys(this.state.items)[index]].location[0]});
                            }}
                        >
                            {this._renderSp()}
                        </Swiper> : null}
                </Animated.View>
            </View>
        );
    }
}

export default MainMap