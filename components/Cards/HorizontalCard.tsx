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
import { styles } from './Horizontal.styles';

interface Sneaker {
    id: number;
    name: string;
    imageUrl: string;
    category: string;
    size: string;
    price: number;
    rating: number;
    reviews : number,
  }
  
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
const HorizontalSneakerShowcaseScreen: React.FC = () => {
  const renderSneakerItem = ({ item }: { item: Sneaker }) => (
    <TouchableOpacity style={styles.sneakerCard}>
      <Image source={{ uri: item.imageUrl }} style={styles.sneakerImage} />
      <View style={styles.sneakerDetailsContainer}>
        <Text style={styles.sneakerName}>{item.name}</Text>
        <Text style={styles.sneakerDetails}>
          {`${item.category} | Size ${item.size} | $${item.price}`}
        </Text>

        <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>{item.rating} ⭐({item.reviews}) reviews</Text>
          </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Our Bestsellers</Text>
      <Text style={styles.sectionDesc}>Discover the Heroic Sneaker Line that Transcends Boundaries</Text>
      <FlatList
        data={sneakers}
        renderItem={renderSneakerItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
export default HorizontalSneakerShowcaseScreen;


