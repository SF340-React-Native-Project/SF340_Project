import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Blink from '../components/Blink';


const Welcome = ({ navigation }) => {
  const { theme } = useSelector(state => state.theme);

  return (
    <View style={styles(theme).container}>
      <Image style={styles(theme).tinyLogo} source={require('./../../assets/images/newbg.png')} />
      <View style={{ flexDirection: 'row' }}>
        <Image style={styles(theme).label} source={require('./../../assets/images/label.png')} />
        <Image
          style={styles(theme).pinkbeer}
          source={require('./../../assets/images/pinkbeer.png')}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Blink duration={250}>
          <Text
            style={styles(theme).textbut}
            onPress={() => navigation.navigate('Home')}>
            {' '}
            {'HANG \nOUT!!'}{' '}
          </Text>
        </Blink>

        <Image style={styles(theme).beerimg} source={require('./../../assets/images/beer2.png')} />
      </View>
    </View>
  );
};

const styles = (theme) => StyleSheet.create({
  tinyLogo: {
    width: '90%',
    height: 200,
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(15,35,45)', // *** Color ***
  },
  label: {
    width: 125,
    height: 125,
    transform: [{ rotate: '5deg' }, { translateX: 170 }, { translateY: 90 }],
    zIndex: -1,
  },
  textbut: {
    fontSize: 40,
    fontFamily: 'ZenKurenaido-Regular',
    letterSpacing: 2,
    borderRadius: 25,
    height: 'auto',
    color: 'rgb(242,197,4)', // *** Color ***
    borderWidth: 2.5,
    borderColor: 'rgb(214,28,255)', // *** Color ***
    shadowColor: 'rgb(214,28,255)', // *** Color ***
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 5,
    shadowRadius: 16.0,
    elevation: 50,
    transform: [{ translateX: 15 }, { translateY: -50 }, { rotate: '-8deg' }],
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 140,
    textShadowColor: '#f50abe',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 22,
  },
  beerimg: {
    width: 200,
    height: 200,
    marginTop: 50,
    transform: [{ translateY: -20 }, { translateX: 35 }, { rotate: '10deg' }],
    zIndex: -1,
  },
  pinkbeer: {
    width: 150,
    height: 150,
    transform: [{ translateY: 250 }, { translateX: -150 }, { rotate: '-10deg' }],
  },
});

export default Welcome;