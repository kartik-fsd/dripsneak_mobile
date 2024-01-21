import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const benefitsData = [
    {
        title: "Find Your Perfect Fit",
        description: "Discover shoes that match your style and comfort needs.",
        icon: require("@/assets/icons/footprints.png"),
      },
      {
        title: "Huge Selection of Brands",
        description: "Shop from hundreds of top collections and styles in one place.",
        icon: require("@/assets/icons/shoe-rack.png"),
      },
      {
        title: "Environmental-Friendly",
        description: "Explore eco-friendly options and make a positive impact on the environment.",
        icon: require("@/assets/icons/ecology.png"),
      },
      {
        title: "Exclusive Discounts",
        description: "Enjoy special discounts and offers on premium shoe brands.",
        icon: require("@/assets/icons/coupon.png"),
      },
];

const BenefitsSection: React.FC = () => {
  return (
    <View style={styles.Benifitcontainer}>
      {benefitsData.map((benefit, index) => (
        <View key={index} style={styles.benefitItem}>
          <Image source={benefit.icon} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{benefit.title}</Text>
            <Text style={styles.description}>{benefit.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    Benifitcontainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      padding: 20,
      width:'auto',
    },
    benefitItem: {
      flexBasis: "45%", // Adjust as needed for desired width
      alignItems: "center",
      padding: 15,
      marginVertical: 10,
      borderRadius: 8,
      backgroundColor: "#F0ECE4", // Add a subtle background color
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    icon: {
      width: 50,
      height: 50,
      marginBottom: 15,
    },
    textContainer: {
      alignItems: "center",
    },
    title: {
      fontSize: 16,
      marginBottom: 5,
      fontFamily:"MBMid",
      fontWeight:"600"
    },
    description: {
      fontSize: 14,
      color: "#555",
      textAlign: "center",
      fontFamily:'MBReg',
      lineHeight: 18, 
    },
  });

export default BenefitsSection;
