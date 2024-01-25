import FillHeart from "@/assets/icons/Fillheart";
import Heart from "@/assets/icons/heart";
import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";

type NewArrival = {
  id: string; // Add appropriate type for actual identifier
  image: string; // URL or path to image
  name: string;
  rating: number;
  original_price: number;
  size?: string;
  category?: string;
  discounted_price?: number; // Optional property for discount
  reviews: number;
};

const NewArrivalCard: React.FC<{ item: NewArrival }> = ({ item }) => {
  const {
    image,
    name,
    rating,
    original_price,
    discounted_price,
    reviews,
    size,
    category,
  } = item;

  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed((prev) => !prev);
  };

  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <Pressable style={styles.heartIconContainer} onPress={handlePress}>
      {isPressed ? <FillHeart /> : <Heart />}
      </Pressable>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.sneakerCate}>
          {`${category} ${size ? `| Size ${size}` : ""} `}
        </Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>
            {rating} ⭐({reviews}) reviews
          </Text>
        </View>
        <View style={styles.priceContainer}>
          {discounted_price ? (
            <>
              <Text style={styles.originalPrice}>${original_price}</Text>
              <Text style={styles.discounted_price}>${discounted_price}</Text>
            </>
          ) : (
            <Text style={styles.price}>${original_price}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%",
    marginBottom: 15,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#F7EBD5",
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    position: "relative",
  },
  heartIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1, // Ensure the heart icon is on top of other content
  },
  cardImage: {
    width: "100%",
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: "MBMid",
    color: "#333",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  sneakerCate: {
    fontSize: 14,
    color: "#888",
    fontFamily: "MBReg",
    marginVertical: 5,
  },
  ratingText: {
    fontSize: 14,
    color: "#777",
    fontFamily: "MBReg",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontFamily: "MBReg",
    color: "#333",
  },
  discounted_price: {
    fontSize: 20,
    fontFamily: "MBold",
    marginLeft: 5,
    color: "#006600", // Discounted price color
  },
  originalPrice: {
    fontSize: 16,
    fontFamily: "MBold",
    color: "#555",
    textDecorationLine: "line-through",
  },
});

export default NewArrivalCard;
