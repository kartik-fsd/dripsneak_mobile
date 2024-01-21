import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  VirtualizedList,
} from "react-native";
import { Marquee } from "@animatereactnative/marquee";
interface BrandItem {
    brand: string;
  }
  
  const brands: BrandItem[] = [
    { brand: "Nike" },
    { brand: "Puma" },
    { brand: "Adidas" },
    { brand: "Fila" },
    { brand: "Reebok" },
  ];

const BrandStrip: React.FC = () => {
  return (
    <SafeAreaView style={styles.stripContainer}>
      <Marquee spacing={10} speed={0.6}>
        <VirtualizedList
        data={brands}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        getItemCount={() => brands.length}
        getItem={(data, index) => data[index]}
        renderItem={({ item }: { item: BrandItem }) => (
          <View style={styles.brandBox}>
            <Text style={styles.brandText}>{item.brand}</Text>
          </View>
        )}
      />
      </Marquee>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  stripContainer: {
    height: 50,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 15,
  },
  brandBox: {
    width: 100,
    height: 40,
    backgroundColor: "#B38F7A",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  brandText: {
    fontSize: 16,
    fontFamily:"MBMid",
    color:"#f1f1f1"
  },
  pauseButton: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginTop: 10,
  },
});

export default BrandStrip;
