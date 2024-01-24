import { StyleSheet } from
 
'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f1f1f1',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: "#F0ECE4", // Add a subtle background color
    elevation: 3, // Android shadow,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    overflow: "hidden",
    borderRadius: 15,
    padding: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    backgroundColor:"#F0ECE4",
    fontFamily : "MBMid"
  },
  searchIcon: {
    marginLeft: 10,
  },
  filterCapsules: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  filterCapsule: {
    backgroundColor: '#B38F7B',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  filterCapsuleText: {
    color: '#fff',
    fontSize: 15,
    fontFamily : "MBMid",
    letterSpacing  :1
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});