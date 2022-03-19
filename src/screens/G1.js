import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Button,
    TouchableOpacity,
} from 'react-native';

import WheelOfFortune from 'react-native-wheel-of-fortune-dp';

export default function Game() {
    const [winnerValue, setWinnerValue] = useState(null);
    const [winnerIndex, setWinnerIndex] = useState(null);
    const [started, setStarted] = useState(false);
    const child = null;

    const buttonPress = () => {
        setStarted(true);
        child._onPress();
    };

    const wheelOptions = {
        rewards: participants,
        knobSize: 30,
        borderWidth: 5,
        borderColor: '#fff',
        innerRadius: 30,
        duration: 6000,
        backgroundColor: 'transparent',
        textAngle: 'horizontal',
        knobSource: require('../../assets/images/knob.png'),
        onRef: ref => (child = ref),
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <WheelOfFortune
                options={wheelOptions}
                getWinner={(value, index) => {
                    setWinnerIndex(index);
                    setWinnerValue(value);
                }}
            />
            {!started && (
                <View style={styles.startButtonView}>
                    <TouchableOpacity
                        onPress={() => buttonPress()}
                        style={styles.startButton}>
                        <Text style={styles.startButtonText}>Spin to win!</Text>
                    </TouchableOpacity>
                </View>
            )}
            {winnerIndex != null && (
                <View style={styles.winnerView}>
                    <Text style={styles.winnerText}>
                        You win {participants[winnerIndex]}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            setWinnerIndex(null);
                            child._tryAgain();
                        }}
                        style={styles.tryAgainButton}>
                        <Text style={styles.tryAgainText}>TRY AGAIN</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E74C3C'
    },
    startButtonView: {
        position: 'absolute',
    },
    startButton: {
        backgroundColor: 'rgba(0,0,0,.5)',
        marginTop: 50,
        padding: 5,
    },
    startButtonText: {
        fontSize: 50,
        color: '#fff',
        fontWeight: 'bold',
    },
    winnerView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tryAgainButton: {
        padding: 10,
    },
    winnerText: {
        fontSize: 30,
    },
    tryAgainButton: {
        padding: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    tryAgainText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});