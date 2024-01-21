import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  Image,
  Pressable,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../components/landingPage/index";

function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, padding: 10 }}>
        <Landing />
      </View>
    </ScrollView>
  );
}

const HomeStack = createNativeStackNavigator();

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShadowVisible: false,
            headerLeft: () => <Text style={{ marginLeft: 10 }}>Menu</Text>,
            headerRight: () => (
              <View style={{flexDirection:'row' ,marginRight: 10}}>
                <Pressable style={{ width: 25, height: 25 ,marginRight: 10}}>
                  <Image
                    source={require("../assets/icons/heart.png")}
                    alt="image"
                    resizeMode="contain"
                    style={{ height: "100%", width: "100%" }}
                  />
                </Pressable>
                <Pressable style={{ width: 25, height: 25 ,  marginLeft: 10}}>
                  <Image
                    source={require("../assets/icons/cart.png")}
                    alt="image"
                    resizeMode="contain"
                    style={{ height: "100%", width: "100%" }}
                  />
                </Pressable>
              </View>
            ),
            headerTitleAlign: "center",
            headerTitle: () => (
              <Text style={{ fontFamily: "MBExb", fontSize: 25 }}>
                Dripsneak
              </Text>
            ),
          }}
        />
      </HomeStack.Navigator>
    </SafeAreaView>
  );
}
