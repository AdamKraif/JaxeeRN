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

class MainMap extends Component {

    constructor() {
        super();

        this.state = {
            items: [{name: 'אני עובד'}, {name: 'אני עובד'}],
            scrollEnabled: true,
            layoutHeight: 0,
            spContainerTranslateY: []
        }
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
                    return gestureState.dy < -1
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

        let animatedTranslateX = [];
        for (let i = 0; this.state.items.length > i; i++) {
            animatedTranslateX.push(new Animated.Value(height));
        }

        this.setState({spContainerTranslateY: animatedTranslateX});
    }


    onStart(e, g, index) {
        this.setState({scrollEnabled: false});
        const {locationY} = e.nativeEvent;
        this.startingPoint = locationY + 30;
    }

    onMove(e, g, index) {

        const {dy} = g;
        const {locationY} = e.nativeEvent;
        console.log(dy);

        const {spContainerTranslateY, layoutHeight} = this.state;
        Animated.timing(spContainerTranslateY[index], {
            duration: 0,
            toValue: (layoutHeight - 30  ) + dy,
            useNativeDriver: true
        }).start();
    }

    onEnd(e, g, index) {

        const {spContainerTranslateY, layoutHeight} = this.state;

        Animated.timing(spContainerTranslateY[index], {
            duration: 100,
            toValue: (layoutHeight - 30),
            useNativeDriver: true,
            easing: Easing.out(Easing.cubic)
        }).start(() => {});
        this.setState({scrollEnabled: true});
    }

    _renderSp = () => {

        const {spContainerTranslateY} = this.state;
        return this.state.items.map((item, index) => {
            return (<Animated.View key={index} {...this._panResponder(index).panHandlers}
                                   style={{
                                       transform: [{translateY: spContainerTranslateY[index]}],
                                       width: width - 50,
                                       height: this.state.layoutHeight,
                                       backgroundColor: 'red',
                                       marginHorizontal: 10
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
                                toValue: height - 30,
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
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />

                <ScrollView scrollEnabled={this.state.scrollEnabled} horizontal showsHorizontalScrollIndicator={false}
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