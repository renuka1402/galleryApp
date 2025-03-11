// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import Feather from '@expo/vector-icons/Feather';
// const Navbar = ({ navigation }) => {
//   return (
//      <View style={{ flex: 1, backgroundColor: "#000", padding: 15 }}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>PICTORIA</Text>
//         <Feather name="camera" size={24} color="white" />
//       </View>
      
//    <View style={styles.toggleContainer}>
//         <TouchableOpacity style={styles.photoButton}            onPress={() => navigation.navigate("photo")}>
//           <Text style={styles.photoText}>Photo</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.albumButton}          onPress={() => navigation.navigate("Album")}>
//           <Text style={styles.albumText}>Album</Text>
//         </TouchableOpacity>
//       </View>
//       </View>
      
//   );
// };

// const styles = StyleSheet.create({
//   navbar: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     backgroundColor: "#007bff",
//     padding: 15,
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//   },
//   navItem: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   toggleContainer: {
//     flexDirection: "row",
//     backgroundColor: "#30302E",
//     borderRadius: 10,
//     width:"91%",
//     padding: 5,
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom:20,
//     height:55,
//     marginLeft:10,
//   },
//   photoButton: {
//     flex: 1,
//     backgroundColor: "#30302E",
//     paddingVertical: 10,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   albumButton: {
//     flex: 1,
//     backgroundColor: "#D8D95F",
//     paddingVertical: 10,
//     borderRadius: 10,
//     alignItems: "center",
//     height:40,margin:5,
   
//   },
//   photoText: {
//     color:  "#D8D95F",
//     fontWeight: "bold",
//     fontSize:17,
//   },
//   albumText: {
//     color: "white",
//     fontWeight: "bold", fontSize:17,
//   }, 
//    headerContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 30,
//     marginTop:30,
//     marginLeft:14,
//     marginRight:23,
//     fontFamily: "Poppins",
//   },
//   headerText: {
//     color: "white",
//     fontSize: 24,
//     fontWeight: "bold",
//   },
  
// });

// export default Navbar;
