import React  from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    Animated,
} from 'react-native';

class AnimatedMarker extends React.Component {
    render() {
        const { amount, selected, style } = this.props;
        let background, border;
        if (selected) {
             background = selected.interpolate({
                inputRange: [0, 1],
                outputRange: ['#FF5A5F', '#4da2ab'],
            });

             border = selected.interpolate({
                inputRange: [0, 1],
                outputRange: ['#D23F44', '#007a87'],
            });
        }

        return (
            <Animated.View style={[styles.container, style]}>
                <Animated.View
                    style={[
            styles.bubble,
            {
              backgroundColor: background || '#5e5587',
              borderColor: border || '#5e4599',
            },
          ]}
                >
                    <Text style={styles.dollar}>$</Text>
                    <Text style={styles.amount}>{amount}</Text>
                </Animated.View>
                <Animated.View
                    style={[styles.arrowBorder, { borderTopColor: border }]}
                />
                <Animated.View
                    style={[styles.arrow, { borderTopColor: background }]}
                />
            </Animated.View>
        );
    }
}

AnimatedMarker.propTypes = {
    amount: PropTypes.number.isRequired,
    selected: PropTypes.object,
    style: PropTypes.any,
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
    },
    bubble: {
        flex: 0,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: '#5e5587',
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 50,
        borderColor: '#5e4599',
        borderWidth: 0.5,
    },
    dollar: {
        color: '#fff',
        fontSize: 10,
    },
    amount: {
        color: '#fff',
        fontSize: 13,
    },
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 4,
        borderTopColor: '#FF5A5F',
        alignSelf: 'center',
        marginTop: -9,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 4,
        borderTopColor: '#D23F44',
        alignSelf: 'center',
        marginTop: -0.5,
    },
    selectedBubble: {
        backgroundColor: '#4da2ab',
        borderColor: '#007a87',
    },
    selectedArrow: {
        borderTopColor: '#4da2ab',

    },
    selectedArrowBorder: {
        borderTopColor: '#007a87',
    },
});

export default AnimatedMarker;