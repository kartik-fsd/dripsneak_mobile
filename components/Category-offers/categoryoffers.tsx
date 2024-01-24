import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import NewArrivalSection from "./NewArrival";



type CategoryData = {
  title: string;
  imageUrl: string;
};

type OfferData = {
  title: string;
  description: string;
  imageUrl: string;
};
// Assume you have some data for featured categories and special offers
const featuredCategoriesData :CategoryData[] = [
  {
    title: "Running Shoes",
    imageUrl: "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393528/image-men-29_prja4e.png",
  },
  {
    title: "Casual Shoes",
    imageUrl: "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393528/image-men-16_plunul.png",
  },
  // Add more categories as needed
];

const specialOffersData :OfferData[] = [
  {
    title: "Limited Time Offer",
    description: "Get 20% off on selected items. Hurry, offer ends soon!",
    imageUrl: "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393527/image-kids-7_ckccbg.png",
  },
  // Add more special offers as needed
];

const FeaturedCategoriesSection: React.FC = () => {
  return (
    <>
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Explore Styles</Text>
      <View style={styles.categoryGrid}>
        {featuredCategoriesData.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <Image source={{ uri: category.imageUrl }} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
      <NewArrivalSection />
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#ECD9B8",
    elevation: 5,
    shadowColor: "#52006A",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    margin: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#222',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '48%',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
  },
  categoryImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
    marginTop: 8,
  },
  offerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  offerItem: {
    width: '48%',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
  },
  offerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  offerContent: {
    padding: 10,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  offerDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 18,
  },
});

export default FeaturedCategoriesSection;
