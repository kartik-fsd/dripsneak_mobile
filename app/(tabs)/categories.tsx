import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {styles} from "./categories.styles"
import NewArrivalCard from '@/components/Cards/Card';
import { SegmentedButtons } from 'react-native-paper';


type NewArrival = {
  id: string; // Add appropriate type for actual identifier
  image: string; // URL or path to image
  name: string;
  category: string;
  rating: number;
  original_price: number;
  size: string;
  discounted_price?: number; // Optional property for discount
  reviews : number,
};




const SneakerShowcaseScreen: React.FC = () => {
  const [newArrivals, setNewArrivals] = React.useState<NewArrival[]>([]);

  React.useEffect(() => {
    // Mock data for example
    setNewArrivals([
      {
        id: '1',
        image: "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393528/image-men-29_prja4e.png",
        name: 'Running Shoe X',
        rating: 4.5,
        original_price: 100,
        discounted_price: 80,
        category: 'Casual',
        size: '8',
        reviews : 890,
      },
      {
        id: '2',
        image: "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393528/image-men-16_plunul.png",
        name: 'Casual Shoe Y',
        rating: 4.2,
        original_price: 75,
        discounted_price: 70,
        category: 'Running',
        size: '9',
        reviews : 910,
      },
      {
        id: '3',
        name: 'Chuck Taylor',
        image: "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393528/image-men-16_plunul.png",
        category: 'Casual',
        size: '8',
        original_price: 70,
        rating: 4.8,
        reviews : 190,
      },
      // Add more items as needed
    ]);
  }, []);

  return (
    <View style={styles.container}>
      {/* Search Box */}
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search sneakers..."
          placeholderTextColor="#888"
        />
        <MaterialCommunityIcons
          name="magnify"
          size={24}
          color="#888"
          style={styles.searchIcon}
        />
      </View>

      {/* Filter Capsules */}
      <View style={styles.filterCapsules}>
        <TouchableOpacity style={styles.filterCapsule}>
          <Text style={styles.filterCapsuleText}>Price</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterCapsule}>
          <Text style={styles.filterCapsuleText}>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterCapsule}>
          <Text style={styles.filterCapsuleText}>Size</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterCapsule}>
          <Text style={styles.filterCapsuleText}>Ratings</Text>
        </TouchableOpacity>
      </View>

      {/* Sneaker List */}
            <View style={styles.cardContainer}>
        {newArrivals.map((item) => (
          <NewArrivalCard key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};
export default SneakerShowcaseScreen;
