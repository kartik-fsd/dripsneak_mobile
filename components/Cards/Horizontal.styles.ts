import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  sneakerCard: {
    flexDirection: 'row',
    borderRadius: 15,
    marginVertical: 10,
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#F7EBD4',
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  sneakerImage: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  sneakerDetailsContainer: {
    marginLeft: 15,
    flex: 1,
  },
  sneakerName: {
    fontSize: 18,
    fontFamily:"MBold", 
    marginBottom: 5,
    color: '#333',
  },
  sneakerDetails: {
    fontSize: 16,
    color: '#888',
    fontFamily : "MBReg"
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  ratingText: {
    fontSize: 14,
    color: '#777',
    fontFamily :"MBReg",
  },

  quantityControls: {
    flexDirection: 'row',
    alignItems:"center",
    marginTop: 10,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 18,
    fontFamily: 'MBReg',
    color: '#333',
  },
  deleteIconContainer: {
    marginVertical: 10,  
    alignItems:"center",
    paddingHorizontal:20
  },
});