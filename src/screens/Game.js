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
        this.participants = ['1SHOT', '2SHOT', '3SHOT', '4SHOT', 'NEXT', 'FREE' ];
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
            colors: this.theme.wheel,
            knobSize: 35,
            borderWidth: 5,
            borderColor: this.theme.border.pri300,
            innerRadius: 20,
            duration: 6000,
            backgroundColor: 'transparent',
            textAngle: 'horizontal',
            knobSource: require('../../assets/images/knob.png'),
            onRef: ref => (this.child = ref),
        };


        return (
            <View style={styles(this.theme).container}>
                <StatusBar barStyle={'light-content'} />
                <Text style={styles(this.theme).Header}>Spin Game</Text>
                <View style={styles(this.theme).wheel}>
                <WheelOfFortune
                    options={wheelOptions}
                    getWinner={(value, index) => {
                        this.setState({ winnerValue: value, winnerIndex: index });
                    }}
                />
                </View>

                {!this.state.started && (
                    <View style={styles(this.theme).startButtonView}>
                        <TouchableOpacity
                            onPress={() => this.buttonPress()}
                            style={styles(this.theme).startButton}>
                            <Text style={styles(this.theme).startButtonText}>Ready!!!</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {this.state.winnerIndex != null && (
                    <View style={styles(this.theme).winnerView}>
                        <Text style={styles(this.theme).winnerText}>
                            {this.participants[this.state.winnerIndex]} are lucky
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ winnerIndex: null });
                                this.child._tryAgain();
                            }}
                            style={styles(this.theme).tryAgainButton}>
                            <Text style={styles(this.theme).tryAgainText}>Spin Wheel</Text>
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
        backgroundColor: theme.background.pri100,
    },
    Header:{
        marginTop:30,
        color: theme.text.pri200,
        fontSize: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'ZenKurenaido-Regular',
        borderRadius: 15,
        borderColor: theme.border.pri200, // *** Color ***
        borderWidth: 4,
        color: '#36F2F2', // *** Color ***
        textAlign: 'center',
        paddingHorizontal:25,
        paddingVertical:10,
        shadowColor: theme.shadow.pri600, // *** Color ***
        elevation: 67,
        textShadowColor: theme.shadow.pri100, // *** Color ***
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 20,
    },
    wheel: {
        marginTop:50,
        width:330,
        height:370,
        paddingTop:46,
        borderRadius: 15,
        borderColor: '#36F2F2', // *** Color ***
        borderWidth: 4,
        borderStyle: 'dashed',
    },
    startButtonView: {
 
    },
    startButton: {
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 15,
        borderColor: theme.border.pri200, // *** Color ***
        borderWidth: 3,
        color: theme.text.pri400, // *** Color ***
        textAlign: 'center',
        fontSize: 45,
        shadowColor: theme.shadow.pri300, // *** Color ***
        elevation: 20,
    },
    startButtonText: {
        fontSize: 50,
        color: '#36F2F2',
        fontFamily: 'ZenKurenaido-Regular',
        paddingHorizontal:15,
        paddingVertical:1,
        textShadowColor: theme.shadow.pri600, // *** Color ***
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 20,

    },
    winnerView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tryAgainButton: {
        padding: 10,
    },
    winnerText: {
        marginTop:15,
        paddingHorizontal:10,
        paddingVertical:5,
        fontSize: 25,
 
        color: theme.text.pri100, // *** Color ***
        textAlign: 'center',
        fontSize: 45,
        fontFamily: 'ZenKurenaido-Regular',
        shadowColor: theme.shadow.pri300, // *** Color ***
        textShadowColor: theme.shadow.pri100, // *** Color ***
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 25,
    },
    tryAgainButton: {
        padding: 5,
    },
    tryAgainText: {
        marginTop:15,
        color: theme.text.pri200,
        fontSize: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'ZenKurenaido-Regular',
        borderRadius: 15,
        borderColor: theme.border.pri200, // *** Color ***
        borderWidth: 4,
        color: '#36F2F2', // *** Color ***
        textAlign: 'center',
        paddingHorizontal:25,
        paddingVertical:10,
        shadowColor: theme.shadow.pri300, // *** Color ***
        elevation: 35,
        textShadowColor: theme.shadow.pri100, // *** Color ***
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 20,
    },
});