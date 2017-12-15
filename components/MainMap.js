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

const {height, width} = Dimensions.get('window');
const FIRST_LEVEL_HEIGHT = 80;

class MainMap extends Component {

    constructor() {
        super();

        this.state = {
            items: [{name: 'אני עובד'}, {name: 'אני עובד'}],
            scrollEnabled: true,
            layoutHeight: 0,
            spContainerTranslateY: [],
            spContainerScaleX: [],
            spContainerOpacity: [],
            locationResult: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        };

        this.spContainerScaleXValue = [];
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

        let animatedTranslateY = [];
        let animatedScaleX = [];
        let animatedOpacity = [];
        for (let i = 0; this.state.items.length > i; i++) {
            animatedTranslateY.push(new Animated.Value(height));
            animatedScaleX.push(new Animated.Value(0.9));
            animatedOpacity.push(new Animated.Value(1))

        }

        this.setState({
            spContainerTranslateY: animatedTranslateY,
            spContainerScaleX: animatedScaleX,
            spContainerOpacity: animatedOpacity
        }, () => {
            for (let i = 0; this.state.items.length > i; i++) {
                this.spContainerScaleXValue.push(animatedScaleX[i].interpolate({
                    inputRange: [0, 0.9, 1],
                    outputRange: [0.9, 0.9, 1]
                }));
            }
        });
    }

    componentDidMount() {
        // this.getLocationAsync();
        navigator.geolocation.getCurrentPosition((position) => {
            let pos = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            };
            // console.log("position", position);
            this.setState({ locationResult: pos });
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
        this.scrollViewRef.scrollTo({
            x: width * index,
            y: 0,
            animation: false
        });
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
            Animated.timing(spContainerTranslateY[index], {
                duration: 0,
                toValue: this.newPosition < 0 ? 0 : this.newPosition,
                useNativeDriver: true
            }),
            Animated.timing(spContainerScaleX[index], {
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
            if (this.newPosition < (layoutHeight * 0.2)) {
                this.shoiuldGoToTop = true;
            } else {
                this.shoiuldGoToTop = false;
            }
        } else {
            if (this.newPosition < (layoutHeight * 0.6)) {
                this.shoiuldGoToTop = true;
            } else {
                this.shoiuldGoToTop = false;
            }
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
            Animated.timing(spContainerTranslateY[index], {
                duration,
                toValue: this.shoiuldGoToTop ? 0 : (layoutHeight - FIRST_LEVEL_HEIGHT),
                useNativeDriver: true,
                easing: Easing.out(Easing.cubic)
            }),
            Animated.timing(spContainerScaleX[index], {
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

        const {spContainerTranslateY, spContainerOpacity} = this.state;
        return this.state.items.map((item, index) => {
            return (<Animated.View key={index} {...this._panResponder(index).panHandlers}
                                   style={{
                                       transform: [
                                           {translateY: spContainerTranslateY[index]},
                                           {scale: this.spContainerScaleXValue.length > 0 ? this.spContainerScaleXValue[index] : 0},
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
                        this.state.spContainerTranslateY.map((item) => {
                            animationParalel.push(Animated.timing(item, {
                                duration: 100,
                                toValue: height - FIRST_LEVEL_HEIGHT,
                                easing: Easing.out(Easing.cubic),
                                useNativeDriver: true
                            }))
                        });

                        Animated.parallel(animationParalel).start();

                    });
                }
            }}
                  style={{flex: 1}}>
                <MapView
                    style={{width, height}}
                    initialRegion={this.state.locationResult}
                />

                <ScrollView ref={(ref) => {
                    this.scrollViewRef = ref;
                }} scrollEnabled={this.state.scrollEnabled} horizontal showsHorizontalScrollIndicator={false}
                            style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
                    <View style={{flexDirection: 'row'}}>
                        {this._renderSp()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default MainMap