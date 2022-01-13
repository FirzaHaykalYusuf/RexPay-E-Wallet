import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, SIZES, FONTS, icons, images} from '../constants';

const SignUp = () => {
  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SIZES.padding * 1,
          paddingHorizontal: SIZES.padding * 2,
        }}
        onPress={() => console.log('SignUp')}>
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{
            width: 40,
            height: 30,
            tintColor: COLORS.white,
          }}></Image>
      </TouchableOpacity>
    );
  }

  function renderTextRegister() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 1,
          height: 120,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h5,
            position: 'absolute',
            textAlign: 'center',
          }}>
          Mudahkan transaksimu dengan RexPay, hanya dengan registrasi.
        </Text>
      </View>
    );
  }

  function renderForm() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 0.5,
          marginHorizontal: SIZES.padding * 3,
        }}>
        {/* Username */}
        <View style={{marginTop: SIZES.padding * 3}}>
          <Text style={{color: COLORS.white, ...FONTS.body3}}>Username</Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
              ...FONTS.body3,
            }}
            placeholder="Masukan Username"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
          />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.Android === 'android' ? 'padding' : null}
      style={{flex: 1}}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={{flex: 1}}>
        <ScrollView>
          {renderHeader()}
          {renderTextRegister()}
          {renderForm()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
