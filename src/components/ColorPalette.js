import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { changeTheme, themeOptions } from '../redux/actions/themeActions';

export class ColorPalette extends Component {


    renderSwitch = (color) => (
        <Switch
            trackColor={{ false: "#81b0ff", true: "#81b0ff" }}
            thumbColor={color !== 'light' ? "#FF3CBE" : '#0CF4FF'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => this.props.changeTheme(color === 'light' ? 'dark' : 'light')}
            value={color !== 'light' ? true : false}
        />


    );

    render() {
        return (
            <View style={styles.box1}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.topic}>Theme :  </Text>
                    {this.renderSwitch(this.props.color.name)}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topic: {
        color: '#000',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    box1: {
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
    }
});


const mapStateToProps = (state) => {
    return {
        color: state.theme.theme
    }
}

export default connect(mapStateToProps, { changeTheme })(ColorPalette);