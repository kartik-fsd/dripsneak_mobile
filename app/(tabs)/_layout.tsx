import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {


  return (
    <Tabs
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title : "Home",
          headerTitleAlign: "center",
          headerTitle: () => (
            <Text style={{ fontFamily: "MBExb", fontSize: 25 }}>
              Dripsneak
            </Text>
          ),
          tabBarIcon: () => <MaterialIcons name="home" size={26} color="#3A3B3C" />,
         // tabBarLabel:() => {return null},
        }}
      />
            <Tabs.Screen
      name='categories'
      options={{
        title : "Categories",
        headerTitleAlign: "center",
          headerTitle: () => (
            <Text style={{ fontFamily: "MBExb", fontSize: 25 }}>
              Dripsneak
            </Text>
          ),
        tabBarIcon : () => <MaterialIcons name="category" size={26} color="#3A3B3C" />,
       // tabBarLabel:() => {return null},
      }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Account',
          headerTitleAlign: "center",
          headerTitle: () => (
            <Text style={{ fontFamily: "MBExb", fontSize: 25 }}>
              My Account
            </Text>
          ),
          tabBarIcon: () => <MaterialIcons name="manage-accounts" size={26} color="#3A3B3C" />,
         // tabBarLabel:() => {return null},
        }}
      />
      <Tabs.Screen
      name='cart'
      options={{
        title : "Cart",
        headerTitleAlign: "center",
          headerTitle: () => (
            <Text style={{ fontFamily: "MBExb", fontSize: 25 }}>
              Dripsneak
            </Text>
          ),
        tabBarIcon : () => <MaterialCommunityIcons name="cart-heart" size={26} color="#3A3B3C" />,
      }}
      />

    </Tabs>
  );
}
