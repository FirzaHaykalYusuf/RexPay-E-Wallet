import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {COLORS} from '../constants';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('SignUp');
  }, 3000);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../splash/RexPay-Icon.png')}
        style={{width: 182, height: 207}}
      />
      <Text
        style={{
          color: COLORS.white,
          position: 'absolute',
          bottom: 72,
          textAlign: 'center',
        }}>
        Pay with{'\n'} RexPay for easy life
      </Text>
    </View>
  );
};

export default Splash;
