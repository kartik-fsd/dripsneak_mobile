// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// type CtaProps = {
//   text: string;
//   onPress: () => void;
// };

// const CtaButton: React.FC<CtaProps> = ({ text, onPress }) => {
//   return (
//     <TouchableOpacity style={styles.ctaButton} onPress={onPress}>
//       <Text style={styles.ctaText}>{text}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   ctaButton: {
//     backgroundColor: '#D2A064', // Dusty Orange
//     borderRadius: 8,

//     marginVertical:10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   ctaText: {
//     fontSize: 18,
//     color: '#fff', // White
//     fontWeight: 'bold',
//   },
// });

// export default CtaButton;

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface CTAProps {
  text: string;
  onPress: () => void;
}

const CtaButton: React.FC<CTAProps> = ({ text, onPress }) => {
  return (
   <>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.8} // Add slight translucency on press
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
   </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#D2A064', // Use your main color
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12, // Increased corner radius for modern feel
    elevation: 3,
    shadowColor: '#000', // Slight shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'MBold', // Use your preferred font family
    color: '#fff',
    textTransform: 'uppercase', // Consider lowercase depending on your brand
  },
});


export default CtaButton;
