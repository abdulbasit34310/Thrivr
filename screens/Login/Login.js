import * as React from "react";
import { useFonts } from "expo-font";
import { Image, StyleSheet, Text, TextInput, Keyboard, TouchableOpacity, View } from 'react-native';
import { useCallback, useState } from "react";
import { Ionicons, } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Maitree_400Regular,
  Maitree_500Medium,
} from "@expo-google-fonts/maitree";
import * as SplashScreen from "expo-splash-screen";
import Constants from 'expo-constants';

import { StatusBar } from 'expo-status-bar';

import CustomButton from "./components/CustomButton";
import SocialButton from "./components/SocialButton";
import CustomAlert from "./components/CustomAlert";
import Divider from "./components/Divider";

import thrivrLogo from "../../assets/thrivrLogo.png";
import Mail from "../../assets/mail.png";
import Lock from "../../assets/lock.png";
import Google from "../../assets/gogle.png";
import Apple from "../../assets/apple.png";

SplashScreen.preventAutoHideAsync();

const Login = ({ route, navigation }) => {

  const [showError, setShowError] = useState(false);
  

  const [isFocused, setFocused] = React.useState(false);
  const [isFocused1, setFocused1] = React.useState(false);

  const f = [{ source: Google }, { source: Apple },]

  const [data, setData] = React.useState({
    email: "",
    password: "",
    checkemailChange: false,
    checkPasswordChange: false,
    Validemail: true,
    ValidPassword: true,
    secureTextEntry: true,
  });

  const emailChange = (val) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(String(val).toLowerCase())) {
      setData({
        ...data,
        email: val,
        checkEmailChange: true,
        ValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        checkEmailChange: false,
        ValidEmail: false,
      });
    }
  };

  const passwordChange = (text) => {
    if (text.length >= 8) {
      setData({
        ...data,
        password: text,
        ValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: text,
        ValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const [fontsLoaded, error] = useFonts({
    Maitree_400Regular,
    Maitree_500Medium,
  });

  const onLayoutRootView = useCallback(async () => {
    if (true) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }



  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <StatusBar style="light" />

      <LinearGradient
        colors={['#0D0D0D', '#0F0F0F', '#000000']}
        style={styles.background}
      />

      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 25, fontFamily: "Maitree_500Medium", fontWeight: '500', }}>Thrivr</Text>
        <Text style={{ color: '#FBAF00', fontSize: 22, fontFamily: "Maitree_500Medium", fontWeight: '400', }}>Login</Text>
      </View>

      <Text style={styles.title}>Email</Text>

      <View style={[styles.action, {
        borderColor: isFocused || data.email
          ? '#FBAF00'
          : '#0D0D0D',
        borderWidth: 1,
      }]}>

        <Image source={Mail} style={{ height: 18, width: 18 }} />

        <TextInput
          style={styles.ti}
          placeholderTextColor='#515151'
          placeholder="Email goes here.."
          onChangeText={(text) => emailChange(text)}
          onFocus={() => {
            setFocused(true)
          }}
          onBlur={() => {
            setFocused(false)
          }}
        />


      </View>

      <Text style={styles.title}>Password</Text>

      <View style={[styles.action, {
        borderColor: isFocused1 || data.password
          ? '#FBAF00'
          : '#0D0D0D',
        borderWidth: 1,
      }]}>

        <Image source={Lock} style={{ height: 18, width: 18 }} />

        <TextInput
          style={styles.ti}
          placeholderTextColor='#515151'
          placeholder="Password goes here.."
          secureTextEntry={data.secureTextEntry ? true : false}
          onChangeText={(text) => passwordChange(text)}
          onFocus={() => {
            setFocused1(true)
          }}
          onBlur={() => {
            setFocused1(false)
          }}
        />

        <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ? (
            <Ionicons name="md-eye-sharp" color="grey" size={17} />
          ) : (
            <Ionicons name="md-eye-off-sharp" color="grey" size={17} />
          )}
        </TouchableOpacity>

      </View>


      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 49 }}>
        {f.map((x, idx) => (
          <SocialButton source={x.source} key={idx} />
        ))}
      </View>

      <Divider />

      <View style={{ marginTop: 26, }}>

        {
          data.email && data.password ? (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <CustomButton label={'Create Account'} width={162} color={'#FBAF00'} />
              <CustomButton label={'Continue'} width={162} color={'black'} btnTextColor={'#FBAF00'} borderWidth={1} borderColor={'#FBAF00'} data={data} setShowError={setShowError} />
            </View>
          ) : data.email || data.password ? (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <CustomButton label={'Create Account'} width={162} color={'#FBAF00'} />
              <CustomButton label={'Continue'} width={162} color={'#282828'} btnTextColor={'#5E5E5E'} data={data} setShowError={setShowError} />
            </View>
          ) : (
            <CustomButton label={'Create Account'} width={'100%'} color={'#C38800'} />
          )
        }

      </View>

      <Text style={{ alignSelf: 'center', marginTop: 22, color: '#5E5E5E', fontFamily: "Maitree_500Medium", }}>Forgot Password</Text>

      {showError && (
        <CustomAlert title={'Email or Password invalid'} text={'Make sure you write a valid email, aswell as a strong password'} />
      )}

      <Image
        style={styles.bottomLogo}
        source={thrivrLogo}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 17,
    marginTop: 29,
    fontFamily: "Maitree_500Medium",
    color: 'rgba(255, 255, 255, 0.65)'
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 2,
    backgroundColor: "#E0EFF6",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  thrivrLogo: {
    alignSelf: "center",
    width: 175,
    height: 150,
  },
  bottomLogo: {
    width: 50,
    height: 30,
    alignSelf: 'center',
    marginTop: 65,
  },
  action: {
    flexDirection: "row",
    marginTop: 15,
    borderRadius: 25,
    backgroundColor: "#171717",
    alignItems: 'center',
    padding: 15,
  },
  ti: {
    fontFamily: "Maitree_500Medium",
    flex: 1,
    paddingLeft: 9,
    fontSize: 15,
    color: '#FFFFFF'
  },
  socialButton: {
    width: 153,
    height: 47,
    paddingHorizontal: 35,
    paddingVertical: 13,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: '#282828',
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 5,
    color: '#5E5E5E',
    fontFamily: "Maitree_500Medium",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 33,

    position: 'relative',

  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 790,
  },
});

export default Login;
