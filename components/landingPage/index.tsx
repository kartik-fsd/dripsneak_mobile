import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import BrandStrip from "../Strip/Brandstrip";
import NewArrivalSection from "../Category-offers/NewArrival";
import BenefitsSection from "../BenifitSection/Benifit";
import CtaButton from "../Button/Button";

const Landing: React.FC = () => {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>
          The <Text style={styles.highlight}>Best</Text>
        </Text>
        <Text style={styles.title}>Collection</Text>
        <Text style={styles.title}>
          of <Text style={styles.highlight}>Sneakers</Text>
        </Text>
      </View>
      <Image
        source={require("@/assets/images/Br-Sneak2.png")}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
        <BrandStrip />
        <NewArrivalSection />
        <BenefitsSection />
        <CtaButton text="shop now" onPress={() => {}} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#ECD9B8",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    padding: 15, 
    margin: 10,
  },
  image: {
    width: 220,
    height: 220,
  },
  textWrapper: {
    marginHorizontal: 5, 
  },
  title: {
    fontSize: 40,
    color: "#333",
    fontFamily: "MBold",
    lineHeight: 50,
  },
  highlight: {
    fontSize: 40,
    color: "#7674C3",
    fontFamily: "MBold",
  },
});

export default Landing;
