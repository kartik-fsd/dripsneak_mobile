import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity ,FlatList, ScrollView} from "react-native";
import NewArrivalCard from "../Cards/Card";

type NewArrival = {
  id: string; // Add appropriate type for actual identifier
  image: string; // URL or path to image
  name: string;
  rating: number;
  original_price: number;
  category: string;
  size?: string;
  discounted_price?: number; // Optional property for discount
  reviews: number;
};

const NewArrivalSection: React.FC = () => {
  const [newArrivals, setNewArrivals] = React.useState<NewArrival[]>([]);

  React.useEffect(() => {
    // Mock data for example
    setNewArrivals([
      {
        id: "1",
        image:
          "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393528/image-men-29_prja4e.png",
        name: "Running Shoe X",
        rating: 4.5,
        original_price: 100,
        discounted_price: 80,
        category: "Sport",
        reviews: 900,
      },
      {
        id: "2",
        image:
          "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393528/image-men-16_plunul.png",
        name: "Casual Shoe Y",
        rating: 4.2,
        original_price: 75,
        discounted_price: 70,
        category: "sport",
        reviews: 790,
      },
      // Add more items as needed
    ]);
  }, []);

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>New Arrivals 🔥</Text>
      <View style={styles.cardContainer}>
        {newArrivals.map((item) => (
          <NewArrivalCard key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 10,
    margin: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "MBold",
    marginBottom: 15,
    color: "#333",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

});

export default NewArrivalSection;
