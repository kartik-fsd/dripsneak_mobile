import React from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import BrandStrip from "../Strip/Brandstrip";
import NewArrivalSection from "../Category-offers/NewArrival";
import BenefitsSection from "../BenifitSection/Benifit";
import CtaButton from "../Button/Button";
import HorizontalSneakerShowcaseScreen, { Sneaker } from "../Cards/HorizontalCard";
import SneakerItem from "../Cards/HorizontalCard";



const sneakers: Sneaker[] = [
  {
    id: 1,
    name: 'Aether Ultra Pro',
    imageUrl: "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393530/image-men-7_sxqeeb.png",
    category: 'Running',
    size: '9',
    price: 120,
    reviews : 900,
    rating: 4.3,
  },
  {
    id: 2,
    name: 'Vanguard Accelerate',
    imageUrl: "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393499/image-men-20_gelxtj.png",
    category: 'Casual',
    size: '8',
    price: 70,
    reviews : 900,
    rating: 4.2,
  },
  {
    id: 3,
    name: 'Luminary Synthesis',
    imageUrl: "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393502/image-men-31_vxocye.png",
    category: 'Running',
    size: '9',
    price: 120,
    reviews : 900,
    rating: 4.1,
  },
  {
    id: 4,
    name: 'Ascend Quantum',
    imageUrl: "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393537/image-men-22_ohmduh.png",
    category: 'Casual',
    size: '8',
    price: 70,
    reviews : 900,
    rating: 4.5,
  },
  // Add more sneakers as needed
];

const Landing: React.FC = () => {
  const renderSneakerItem = ({ item }: { item: Sneaker }) => <SneakerItem item={item} showControls={false}/>;
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
      {/* <HorizontalSneakerShowcaseScreen /> */}
      <View style={styles.Horizontalcontainer}>
      <Text style={styles.HorizontalsectionTitle}>Our Bestsellers</Text>
      <Text style={styles.HorizontalsectionDesc}>Discover the Heroic Sneaker Line that Transcends Boundaries</Text>
      <FlatList
        data={sneakers}
        renderItem={renderSneakerItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
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
  Horizontalcontainer: {
    flex: 1,
    padding: 20,
  },
  HorizontalsectionTitle: {
    fontSize: 20,
    fontFamily:"MBold",
    color: '#333',
    textAlign:"center",
  },
  HorizontalsectionDesc : {
    fontSize: 16,
    fontFamily:"MBReg",
    color: '#333',
    textAlign:"center",
    marginVertical : 10,
  },
});

export default Landing;
