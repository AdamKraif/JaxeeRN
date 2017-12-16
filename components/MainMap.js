import React, {Component} from 'react';
import {
    View,
    Dimensions,
    Text,
    ScrollView,
    PanResponder,
    Animated,
    Easing
} from 'react-native';
import MapView from 'react-native-maps';
import Swiper from 'react-native-swiper';

const {height, width} = Dimensions.get('window');
const FIRST_LEVEL_HEIGHT = 80;

class MainMap extends Component {

    constructor() {
        super();

        this.state = {
            items: [{name: 'אני עובד'}, {name: 'אני עובד'}],
            scrollEnabled: true,
            layoutHeight: 0,
            spContainerTranslateY: new Animated.Value(height),
            spContainerScaleX: new Animated.Value(0),
            spContainerOpacity: [],
            test: false
        };

        this.locationResult = {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        };

        this.spContainerScaleXValue = this.state.spContainerScaleX.interpolate({
            inputRange: [0, 1],
            outputRange: [0.9, 1]
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
        }

        let animatedOpacity = [];
        for (let i = 0; this.state.items.length > i; i++) {
            animatedOpacity.push(new Animated.Value(1))

        }

        this.setState({
            spContainerOpacity: animatedOpacity
        });
    }

    componentDidMount() {
        // this.getLocationAsync();
        navigator.geolocation.getCurrentPosition((position) => {
            this.locationResult = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            };
            // console.log("position", position);

        });
    }


    // getLocationAsync = async () => {
    //     let { status } = await Permissions.askAsync(Permissions.LOCATION);
    //     if (status !== 'granted') {
    //         this.setState({
    //             locationResult: 'Permission to access location was denied',
    //         });
    //     }
    //
    //     let location = await Location.getCurrentPositionAsync({});
    //     this.setState({ locationResult: JSON.stringify(location) });
    // };


    onStart(e, g, index) {
        this.setState({scrollEnabled: false});
        // this.scrollViewRef.scrollTo({
        //     x: width * index,
        //     y: 0,
        //     animation: false
        // });
        // this.shouldChangeScroll = true;
    }

    onMove(e, g, index) {

        const {dy} = g;
        const {locationY} = e.nativeEvent;

        const {spContainerTranslateY, spContainerScaleX, layoutHeight, spContainerOpacity} = this.state;
        if (this.shoiuldGoToTop) {
            this.newPosition = dy;
        } else {
            this.newPosition = (layoutHeight - FIRST_LEVEL_HEIGHT) + dy;
        }


        // if (this.shouldChangeScroll) {
        //     this.scrollViewRef.scrollTo({
        //         x: width * index,
        //         y: 0,
        //         animation: false
        //     });
        //     this.shouldChangeScroll = false;
        // }

        const present = (1 - (this.newPosition / layoutHeight));


        let opacityArrayAnim = [];
        spContainerOpacity.map((item, i) => {
            opacityArrayAnim.push(Animated.timing(item, {
                duration: 0,
                toValue: index === i ? 1 : (1 - present),
                useNativeDriver: true
            }))

        });

        Animated.parallel([
            ...opacityArrayAnim,
            Animated.timing(spContainerTranslateY, {
                duration: 0,
                toValue: this.newPosition < 0 ? 0 : this.newPosition,
                useNativeDriver: true
            }),
            Animated.timing(spContainerScaleX, {
                duration: 0,
                toValue: present > 1 ? 1 : present,
                useNativeDriver: true
            })
        ]).start();

    }

    onEnd(e, g, index) {

        const {spContainerTranslateY, layoutHeight, spContainerScaleX, spContainerOpacity} = this.state;
        const duration = 200;

        if (this.shoiuldGoToTop) {
            this.shoiuldGoToTop = this.newPosition < (layoutHeight * 0.2);
        } else {
            this.shoiuldGoToTop = this.newPosition < (layoutHeight * 0.6);
        }

        // console.log("this.shoiuldGoToTop", this.shoiuldGoToTop);

        let opacityArrayAnim = [];
        spContainerOpacity.map((item, i) => {
            opacityArrayAnim.push(Animated.timing(item, {
                duration,
                toValue: 1,
                useNativeDriver: true
            }))

        });
        Animated.parallel([
            ...opacityArrayAnim,
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
            })]).start(() => {
        });
        if (this.shoiuldGoToTop) {
            this.setState({scrollEnabled: false});
        } else {
            this.setState({scrollEnabled: true});
        }
    }

    _renderSp = () => {

        const {spContainerOpacity} = this.state;
        return this.state.items.map((item, index) => {
            return (<Animated.View key={index} {...this._panResponder(index).panHandlers}
                                   style={{
                                       transform: [
                                           {scale: this.spContainerScaleXValue},
                                       ],
                                       opacity: spContainerOpacity[index],
                                       width: width,
                                       height: this.state.layoutHeight,
                                       backgroundColor: 'red',
                                   }}>

                <Text>{item.name}</Text>
            </Animated.View>)
        });
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
                        }))


                        Animated.parallel(animationParalel).start();

                    });
                }
            }}
                  style={{flex: 1}}>
                <MapView
                    style={{width, height}}
                    initialRegion={this.locationResult}
                />
                <Animated.View style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,top:0,
                    transform: [
                        {translateY: this.state.spContainerTranslateY},
                    ]
                }}>
                <Swiper
                    scrollEnabled={this.state.scrollEnabled}
                    showsPagination={false}
                    showsButtons={false}>
                    {this._renderSp()}
                </Swiper>
                </Animated.View>


                {/*<Animated.ScrollView */}
                {/* pointerEvents={this.state.test ? "none" : "auto"} ref={(ref) => {*/}
                {/*this.scrollViewRef = ref;*/}
                {/*}} scrollEnabled={this.state.scrollEnabled} horizontal showsHorizontalScrollIndicator={false}*/}
                {/*style={{position: 'absolute', bottom: 0, left: 0, right: 0,*/}

                {/*transform: [*/}
                {/*{translateY: this.state.spContainerTranslateY},*/}
                {/*],*/}


                {/*}}>*/}
                {/*<View style={{flexDirection: 'row'}}>*/}
                {/*{this._renderSp()}*/}
                {/*</View>*/}
                {/*</Animated.ScrollView>*/}
            </View>
        );
    }
}

export default MainMap