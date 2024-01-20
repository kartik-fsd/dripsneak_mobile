import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Button } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 , justifyContent:"center",alignItems:"center" }}>
          <Text style={{fontFamily : "MBold" }}>
            Hey welcome to my shoes world
          </Text>
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
          headerLeft: () => (
            <Text >
              Menu
            </Text>
          ),
          headerRight: () => (
            <Button title="profile"  color="#f194ff" />
          ),
          headerTitleAlign:"center",
          headerTitle: () => (<Text style={{fontFamily : "MBExb" ,fontSize : 25}}>Dripsneak</Text>),
        }}
      />
    </HomeStack.Navigator>
    </SafeAreaView>
  );
}
