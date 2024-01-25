import SneakerItem, { Sneaker } from "@/components/Cards/HorizontalCard";
import React, { useState } from "react";
import {
  Image,
  View,
  FlatList,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";

const sneakers: Sneaker[] = [
  {
    id: 1,
    name: "Aether Ultra Pro",
    imageUrl:
      "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393530/image-men-7_sxqeeb.png",
    category: "Running",
    size: "9",
    price: 120,
  },
  {
    id: 2,
    name: "Vanguard Accelerate",
    imageUrl:
      "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393499/image-men-20_gelxtj.png",
    category: "Casual",
    size: "8",
    price: 70,
  },
  {
    id: 3,
    name: "Luminary Synthesis",
    imageUrl:
      "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393502/image-men-31_vxocye.png",
    category: "Running",
    size: "9",
    price: 120,
  },
  {
    id: 4,
    name: "Ascend Quantum",
    imageUrl:
      "https://res.cloudinary.com/dnv5dhp9h/image/upload/v1688393537/image-men-22_ohmduh.png",
    category: "Casual",
    size: "8",
    price: 70,
  },
  // Add more sneakers as needed
];

function Cart() {
  const [isEmptyCart, setIsEmptyCart] = useState(true);


  //setIsEmptyCart(sneakers.length === 0)

  const renderSneakerItem = ({ item }: { item: Sneaker }) => (
    <SneakerItem item={item} />
  );

  return (
    <View style={styles.container}>
      {isEmptyCart ? (
        <View style={styles.ImgContainer}>
        <Image
          source={require("@/assets/icons/emtCart.png")}
          style={styles.emptyCartImage}
        />
        <Text style={styles.emptyCartText}>Oops! Looks like your cart is taking a nap . Add some sneakers to wake it up!</Text>
        </View>
      ) : (
        <View style={styles.flatListContainer}>
          <FlatList
            data={sneakers}
            renderItem={renderSneakerItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}

      {!isEmptyCart && (
        <View style={styles.checkoutCard}>
          <Text style={styles.checkoutCardTitle}>Checkout Summary</Text>

          <View style={styles.checkoutCardSummary}>
            <Text style={styles.checkoutCardSummaryLabel}>
              Items ({sneakers.length})
            </Text>
            <Text style={styles.checkoutCardSummaryValue}>$190.00</Text>
          </View>

          <View style={styles.checkoutCardSummary}>
            <Text style={styles.checkoutCardSummaryLabel}>Shipping</Text>
            <Text style={styles.checkoutCardSummaryValue}>$5.00</Text>
          </View>

          <View style={styles.checkoutCardSummary}>
            <Text style={styles.checkoutCardSummaryLabel}>Total</Text>
            <Text style={styles.checkoutCardSummaryValue}>$195.00</Text>
          </View>

          <Pressable style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  ImgContainer :{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  emptyCartText: {
    fontSize: 18,
    fontFamily: 'MBold',
    textAlign: 'center',
  },
  emptyCartImage: {
    width: 300,
    height: 300,
    marginVertical:10
  },
  flatListContainer: {
    marginBottom: 20, // Add some margin to separate FlatList and checkoutCard
  },
  checkoutCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  checkoutCardTitle: {
    fontSize: 18,
    fontFamily: "MBold",
    marginBottom: 10,
  },
  checkoutCardSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10, // Increase vertical spacing between each item
  },
  checkoutCardSummaryLabel: {
    fontSize: 16,
    fontFamily: "MBMid",
  },
  checkoutCardSummaryValue: {
    fontSize: 16,
    fontFamily: "MBold",
  },
  checkoutButton: {
    backgroundColor: '#D2A064',
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10, // Add some top margin
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "MBold",
  },
});

export default Cart;

