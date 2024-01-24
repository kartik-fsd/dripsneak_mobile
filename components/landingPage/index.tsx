import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import BrandStrip from "../Strip/Brandstrip";
import NewArrivalSection from "../Category-offers/NewArrival";
import BenefitsSection from "../BenifitSection/Benifit";
import CtaButton from "../Button/Button";
import HorizontalSneakerShowcaseScreen from "../Cards/HorizontalCard";

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
      <View style={styles.heroDescriptionContainer}>
        <Text style={styles.HeroDescTitle}>Sneak into Extraordinary</Text>
        <Text style={styles.HeroDesc}>
          Where Adventure Meets Style in Quirky Sneaker Bliss
        </Text>
      </View>

      <NewArrivalSection />
      <HorizontalSneakerShowcaseScreen />
      <BenefitsSection />
      <Text style={styles.Register}>Become a member to unlock exclusive discounts and offers.</Text>
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
  heroDescriptionContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  HeroDescTitle: {
    fontSize: 24,
    color: "#333",
    fontFamily: "MBold",
    lineHeight: 30,
    textAlign: "center",
  },
  HeroDesc: {
    fontSize: 16,
    color: "#555",
    fontFamily: "MBMid",
    textAlign: "center",
    marginVertical:10,
  },
  Register: {
    fontFamily: "MBMid",
    fontSize: 16,
    textAlign :"center"
  },
});

export default Landing;
