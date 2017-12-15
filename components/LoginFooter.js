import React, {Component} from 'react';
import {View, Icon} from 'native-base';
import {Dimensions, Keyboard, Animated, Easing, Image} from 'react-native'
import {TabViewAnimated, TabBar} from 'react-native-tab-view';

const {height, width} = Dimensions.get('window');

class LoginFooter extends Component {

    constructor(props) {
        super(props);

        props.routes.map((item, index) => {
            if (!item.key) {
                props.routes[index].key = "" + index
            }
        });

        this.state = {
            index: props.routes.findIndex(i => i.key === props.activeLoginMethod),
            routes: props.routes,
            keyboardUp: false,
            marginBottomAnim: new Animated.Value(0),
            opacityAnim: new Animated.Value(1)

        };


        this.marginBottomValue = this.state.marginBottomAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [calcSize(-60), 0]
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.activeLoginMethod !== this.props.activeLoginMethod) {
            const newIndex = this.props.routes.findIndex(i => i.key === nextProps.activeLoginMethod);
            this.setState({index: newIndex});
        }

        if (nextProps.hideFooter !== this.props.hideFooter) {
            this._hideFooter(nextProps.hideFooter)
        }


    }


    _hideFooter = (action) => {

        const marinAnimConst = Animated.timing(this.state.marginBottomAnim, {
            toValue: action ? 1 : 0,
            useNativeDriver: true,
            duration: 300
        });

        const opacityAnimConst = Animated.timing(this.state.opacityAnim, {
            toValue: action ? 0 : 1,
            useNativeDriver: true,
            duration: 0
        });

        if (action) {
            marinAnimConst.start(() => {
                opacityAnimConst.start();
            });
        } else {
            opacityAnimConst.start(() => {
                marinAnimConst.start();
            });
        }


    };

    _renderScene = ({route}) => {
        // if (route.key === this.props.activeLoginMethod) {

        return (
            route.view(this.props)
        );
        // }
    };

    _renderBadge = ({route}) => {
        if (route.register) {
            return (
                <View style={styles.badge}>
                    <Icon style={styles.badgeIcon} name="md-checkmark"/>
                </View>
            );
        }
        return null;
    };


    _renderLabel = (route) => {

        return (
            <View style={styles.labelContainer}>

                <Image resizeMode='contain'
                       source={route.route.key === this.props.activeLoginMethod ? route.route.icon : route.route.disableIcon}
                       style={{
                           height: calcSize(30),
                           width: calcSize(60),
                       }}
                />

                <AIText ellipsizeMode='tail' numberOfLines={1} style={[styles.labelText, {
                    color: route.route.key === this.props.activeLoginMethod ? getConfig().styles_defaultTextBlue : getConfig().styles_defaultTextBlack,
                    width: (width) / this.state.routes.length
                }]}>
                    {route.route.title}
                </AIText>
            </View>
        );
    };

    render() {

        return (
            <TabViewAnimated
                navigationState={this.state}
                swipeEnabled={false}
                renderScene={this._renderScene}
                renderFooter={props => {
                    return (<TabBar
                        style={[styles.container, {
                            opacity: this.state.opacityAnim,
                            transform: [{translateY: this.marginBottomValue}]
                        }]}
                        tabStyle={{height: calcSize(60)}}
                        renderBadge={this._renderBadge}
                        renderLabel={this._renderLabel}
                        indicatorStyle={styles.indicator}
                        {...props} />)
                }}
                onIndexChange={
                    index => {
                        if (!this.props.loginButtonsLoader && !this.props.otpLoader && !this.props.hideFooter) {
                            this.props.setActiveLoginMethod(this.state.routes[index].key);

                            if (this.state.routes[index].onPress) {
                                this.state.routes[index].onPress(this.props);
                            }
                        }

                    }
                }
                onPositionChange={Keyboard.dismiss}
            />
        );
    }
}

const styles = ({
    container: {
        backgroundColor: getConfig().styles_defaultLightGreyBackground
    },
    badge: {
        marginTop: calcSize(10),
        marginRight: calcSize(12),
        backgroundColor: '#00a027',
        height: calcSize(24),
        width: calcSize(24),
        borderRadius: calcSize(12),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    badgeIcon: {
        color: getConfig().styles_defaultTextBlack,
        fontSize: calcSize(14),
        fontWeight: 'bold',
    },
    labelContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    labelText: {
        textAlign: 'center',
        fontSize: calcSize(14)
    },
    indicator: {
        backgroundColor: getConfig().styles_defaultTextBlue,
        top: 0
    }
});

export default LoginFooter;