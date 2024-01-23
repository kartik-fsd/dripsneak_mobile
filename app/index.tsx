// import React from "react";
// import {
//   View,
//   Text,
//   SafeAreaView,
//   ScrollView,
//   Image,
//   Pressable,
// } from "react-native";
// import Landing from "../components/landingPage/index";
// import { Stack } from "expo-router";


// const HomeScreen = () => {
//   return (
//     <ScrollView
//       showsVerticalScrollIndicator={false}
//       nestedScrollEnabled
//       bouncesZoom
//     >
//       <View style={{ flex: 1, padding: 10 }}>
//         <Landing />
//       </View>
//     </ScrollView>
//   );
// };
// export default function Home() {
//   return (
//     <>
//         <SafeAreaView style={{ flex: 1 }}>
//           <Stack.Screen
//             options={{
//               headerStyle: {
//                 backgroundColor: "#f1f1f1",
//               },
//               headerShadowVisible: false,
//               headerLeft: () => <Text>Menu</Text>,
//               headerRight: () => (
//                 <View style={{ flexDirection: "row", marginRight: 10 }}>
//                   <Pressable style={{ width: 25, height: 25, marginRight: 10 }}>
//                     <Image
//                       source={require("../assets/icons/heart.png")}
//                       alt="image"
//                       resizeMode="contain"
//                       style={{ height: "100%", width: "100%" }}
//                     />
//                   </Pressable>
//                   <Pressable style={{ width: 25, height: 25, marginLeft: 10 }}>
//                     <Image
//                       source={require("../assets/icons/cart.png")}
//                       alt="image"
//                       resizeMode="contain"
//                       style={{ height: "100%", width: "100%" }}
//                     />
//                   </Pressable>
//                 </View>
//               ),
//               headerTitleAlign: "center",
//               headerTitle: () => (
//                 <Text style={{ fontFamily: "MBExb", fontSize: 25 }}>
//                   Dripsneak
//                 </Text>
//               ),
//             }}
//           />
//           <HomeScreen/>
//         </SafeAreaView>
//     </>
//   );
// }
