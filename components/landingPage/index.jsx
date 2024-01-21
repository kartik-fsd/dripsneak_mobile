import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Landing = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ECD9B8',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 10,
  },
  image: {
    width: 250,
    height: 200,
  },
  textWrapper: {
    marginTop: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  highlight: {
    color: '#7674C3',
  },
});

export default Landing;
