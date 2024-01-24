
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MyAccountScreen = () => {

  interface User {
    name : string;
    email : string;
    profileImage : any;
  }
  const user :User = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileImage:  require('@/assets/images/Bg-Sneak.jpg'), // Replace with your image path
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={user.profileImage} style={styles.profileImage} />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionItem}>
          <MaterialCommunityIcons name="history" size={24} color="#333" />
          <Text style={styles.sectionItemText}>Order History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <MaterialCommunityIcons name="map-marker" size={24} color="#333" />
          <Text style={styles.sectionItemText}>Shipping Address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <MaterialCommunityIcons name="credit-card" size={24} color="#333" />
          <Text style={styles.sectionItemText}>Payment Methods</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionItem}>
          <MaterialCommunityIcons name="cog" size={24} color="#333" />
          <Text style={styles.sectionItemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <MaterialCommunityIcons name="lock" size={24} color="#333" />
          <Text style={styles.sectionItemText}>Privacy & Security</Text>
        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 22,
    fontFamily :"MBold",
    marginBottom: 5,
    color: '#333',
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    fontFamily:"MBMid"
  },
  section: {
    marginBottom: 40,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2, // for Android shadow
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  sectionItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionItemText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
    fontFamily:"MBReg"
  },
  logoutButton: {
    backgroundColor: '#D2A064',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily:"MBold"
  },
});

export default MyAccountScreen;
