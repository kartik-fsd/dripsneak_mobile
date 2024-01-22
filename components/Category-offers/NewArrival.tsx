import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

type NewArrival = {
  id: string; // Add appropriate type for actual identifier
  image: string; // URL or path to image
  name: string;
  rating: number;
  price: number;
  discountedPrice?: number; // Optional property for discount
};

const NewArrivalCard: React.FC<{ item: NewArrival }> = ({ item }) => {
  const { image, name, rating, price, discountedPrice } = item;

  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{name}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{rating} ⭐</Text>
        </View>
        <View style={styles.priceContainer}>
          {discountedPrice ? (
            <>
              <Text style={styles.originalPrice} >${price}</Text>
              <Text style={styles.discountedPrice}>${discountedPrice}</Text>
            </>
          ) : (
            <Text style={styles.price}>${price}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const NewArrivalSection: React.FC = () => {
  const [newArrivals, setNewArrivals] = React.useState<NewArrival[]>([]);

  // Fetch or receive new arrival data here and update state
  // Replace this with your actual data fetching logic

  React.useEffect(() => {
    // Mock data for example
    setNewArrivals([
      {
        id: '1',
        image: "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393528/image-men-29_prja4e.png",
        name: 'Running Shoe X',
        rating: 4.5,
        price: 100,
        discountedPrice: 80,
      },
      {
        id: '2',
        image: "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393528/image-men-16_plunul.png",
        name: 'Casual Shoe Y',
        rating: 4.2,
        price: 75,
        discountedPrice: 70,
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
    margin:10,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily:"MBold",
    marginBottom: 15,
    color: '#333',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F7EBD5',
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily:"MBMid",
    color: '#333',
    marginBottom: 5, 
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 14,
    color: '#777',
    fontFamily :"MBLig",
    fontWeight :"600"
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontFamily:"MBReg",
    color: '#333',
  },
  discountedPrice: {
    fontSize: 20,
    fontFamily:"MBold",
    marginLeft: 5,
    color: '#006600', // Discounted price color
  },
  originalPrice: {
    fontSize: 16,
    fontFamily:"MBold",
    color: '#555',
    textDecorationLine: 'line-through',
  },
});

export default NewArrivalSection;
