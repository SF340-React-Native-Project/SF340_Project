import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Button,
    TouchableOpacity,
} from 'react-native';


import { connect } from 'react-redux';
import WheelOfFortune from 'react-native-wheel-of-fortune-dp';


class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            winnerValue: null,
            winnerIndex: null,
            started: false,
        };
        this.child = null;
        this.participants = props.data;
        this.theme = props.theme;

    }

    buttonPress = () => {
        this.setState({
            started: true,
        });
        this.child._onPress();
    };

    render() {
        const wheelOptions = {
            rewards: this.participants,
            knobSize: 50,
            borderWidth: 5,
            borderColor: '#fff',
            innerRadius: 20,
            duration: 6000,
            backgroundColor: 'transparent',
            textAngle: 'vertical',
            knobSource: require('../../assets/images/knob.png'),
            onRef: ref => (this.child = ref),
        };


        return (
            <View style={styles(this.theme).container}>
                <StatusBar barStyle={'light-content'} />
                <WheelOfFortune
                    options={wheelOptions}
                    getWinner={(value, index) => {
                        this.setState({ winnerValue: value, winnerIndex: index });
                    }}
                />
                {!this.state.started && (
                    <View style={styles(this.theme).startButtonView}>
                        <TouchableOpacity
                            onPress={() => this.buttonPress()}
                            style={styles(this.theme).startButton}>
                            <Text style={styles(this.theme).startButtonText}>Spin to win!</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {this.state.winnerIndex != null && (
                    <View style={styles(this.theme).winnerView}>
                        <Text style={styles(this.theme).winnerText}>
                            You win {this.participants[this.state.winnerIndex]}
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ winnerIndex: null });
                                this.child._tryAgain();
                            }}
                            style={styles(this.theme).tryAgainButton}>
                            <Text style={styles(this.theme).tryAgainText}>TRY AGAIN</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const dataTemp = state.data.nameList
    const theme = state.theme.theme


    return {
        data: dataTemp,
        theme: theme
    }
}

export default connect(mapStateToProps)(Game);

const styles = (theme) => StyleSheet.create({
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