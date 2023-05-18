import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login/Login";


const RegistrationStack = createNativeStackNavigator();

const RegistrationNavigator = ({ navigation }) => (
  <RegistrationStack.Navigator initialRouteName={"Login"} headerMode="none">
   
    <RegistrationStack.Screen
      options={{ headerShown: false, title: "Login" }}
      name="Login"
      component={Login}
    />

  </RegistrationStack.Navigator>
);
export default RegistrationNavigator;