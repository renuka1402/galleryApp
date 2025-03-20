// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import Feather from "react-native-vector-icons/Feather";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons"; 
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; 
// import AntDesign from "react-native-vector-icons/AntDesign"; 
// import Ionicons from '@expo/vector-icons/Ionicons';
// const SignUpScreen = ({ navigation }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");



//   const handleSignUp = () => {
//     if (!name || !email || !password || !confirmPassword) {
//       Alert.alert("Error", "All fields are required!");
//       return;
//     }
//     if (password !== confirmPassword) {
//       Alert.alert("Error", "Passwords do not match!");
//       return;
//     }


//     Alert.alert("Success", "Account Created Successfully!");
//     navigation.navigate("Login"); 
//   };

//   return (

//       <View style={styles.container}>
//       <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()} style={styles.arrow}>
//         <Ionicons name="chevron-back" size={20} color="gray"  />
//         </TouchableOpacity>
//         <Text style={styles.title}>Sign Up</Text>

    
//         <Text style={styles.label}>Name</Text>
//         <View style={styles.inputContainer}>
//         <Feather name="user" size={20} color="#555" style={styles.icon} />

//           <TextInput  placeholder="Enter Name Here"style={styles.input} placeholderTextColor="gray"  value={name} onChangeText={setName}
//           />
//         </View>

   
//         <Text style={styles.label}>E-mail</Text>
//         <View style={styles.inputContainer}>
//           <Icon name="envelope" size={20} color="#555" style={styles.icon} />
//           <TextInput   placeholder="Your Email Address"
//             style={styles.input}  keyboardType="email-address"    placeholderTextColor="gray"   value={email} onChangeText={setEmail}
//           />
//         </View>

//         <Text style={styles.label}>Password</Text>
//         <View style={styles.inputContainer}>
//         <MaterialCommunityIcons name="lock-outline" size={20} color="#555" style={styles.icon} />
//           <TextInput  placeholder="Enter Your Password"   style={styles.input}  secureTextEntry placeholderTextColor="gray" value={password}    onChangeText={setPassword}
//           />
//         </View>

    
//         <Text style={styles.label}>Re-Type Password</Text>
//         <View style={styles.inputContainer}>
//         <MaterialCommunityIcons name="lock-outline" size={20} color="#555" style={styles.icon} />
//           <TextInput
//           KeyboardAvoidingView ="false"
//             placeholder="Re-Type Your Password"
//             style={styles.input}
//             secureTextEntry
//             placeholderTextColor="gray"
//             value={confirmPassword}
//             onChangeText={setConfirmPassword}
            
//           />
//         </View>

        // <TouchableOpacity style={styles.checkboxContainer} >
     
        //   <Text style={styles.checkboxText}> I agree with the <Text style={styles.linkText}>terms and conditions</Text></Text>
        // </TouchableOpacity>


//         <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//           <Text style={styles.signUpText}>Sign Up</Text>
//         </TouchableOpacity>


        // <Text style={styles.orText}>Or Sign Up with</Text>
        // <View style={styles.socialContainer}>
        //   <FontAwesome5 name="facebook" size={35} color="#007BFF" style={styles.socialIcon} />
        //   <Image source={require("../../assets/images/Google__G__logo.svg.png")} style={styles.icon1} />
        // </View>

      
        // <Text style={styles.loginText}>
        //   Already have an account?{" "}
        //   <Text style={styles.linkText} onPress={() => navigation.navigate("Login")}>Log In</Text>
        // </Text>
//       </View>
  
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },
  // arrow:{
  //   padding:5,
  //     borderRadius: 10,
  //     backgroundColor: '#fff',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     position: "absolute",
  //   top: 50,
  //   left: 20,
   
  //     shadowRadius: 5,
  //     elevation: 1,
  //   },
  // title: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   marginBottom: 20,
  // },
  // backButton: {
  //   position: "absolute",
  //   top: 50,
  //   left: 20,
  //   zIndex: 10, 
  // },
  // label: {
  //   alignSelf: "flex-start",
  //   fontSize: 15,
  //   color: "black",
  //   marginBottom: 10,
  //   fontWeight: "bold",
  //   marginLeft: 12,
  // },
  // inputContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   backgroundColor: "#fff",
  //   borderRadius: 30,
  //   paddingHorizontal: 15,
  //   borderWidth: 1,
  //   borderColor: "#D1D1D1",
  //   width: "95%",
  //   height: 52,
  //   marginBottom: 10,
  // },
  // icon: {
  //   marginRight: 10,
  // },
  // input: {
  //   flex: 1,
  //   fontSize: 14,
  //   color: "#000",
  // },
  // checkboxContainer: {
  //   flexDirection: "row",
  //   marginRight: 60,
  //   marginBottom: 15,
  // },
  // checkboxText: {
  //   fontSize: 13,
  //   marginLeft: 5,
  // },
  // linkText: {
  //   color: "#007BFF",
  //   fontWeight: "bold",
  // },
  // signUpButton: {
  // backgroundColor: '#007BFF',
  //   paddingVertical: 12,
  //   borderRadius: 30,
  //   width: "95%",
  //   height: 50,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // signUpText: {
  //   color: "#fff",
  //   fontSize: 16,
  // },
  // orText: {
  //   marginTop: 50,
  //   marginBottom: 15,
  //   fontSize: 14,
  //   fontWeight: "bold",
  // },
  // socialContainer: {
  //   flexDirection: "row",
  //   gap: 20,
  // },
  // icon1: {
  //   width: 35,
  //   height: 35,
  //   marginTop:3,
  // },
  // loginText: {
  //   marginTop: 20,
  //   fontSize: 14,
  //   fontWeight: "bold",
  // },
// });

// export default SignUpScreen;
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const SignUpScreen = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required!");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    Alert.alert("Success", "Account Created Successfully!");
    navigation.navigate("Login"); 
  };

  const pickImageFromCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Required", "Camera access is needed to take a photo.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const pickImageFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Required", "Gallery access is needed to select a photo.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrow}>
        <Ionicons name="chevron-back" size={20} color="gray" />
      </TouchableOpacity>

      <Text style={styles.title}>Sign Up</Text>

     
      <TouchableOpacity onPress={pickImageFromGallery} style={styles.imageContainer}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <Feather name="user" size={50} color="#888" />
        )}
      </TouchableOpacity>


      <View style={styles.imageButtons}>
        <TouchableOpacity style={styles.imageButton} onPress={pickImageFromCamera}>
          <Feather name="camera" size={18} color="white" />
          <Text style={styles.imageButtonText}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.imageButton} onPress={pickImageFromGallery}>
          <Feather name="image" size={18} color="white" />
          <Text style={styles.imageButtonText}>Gallery</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Name</Text>
      <View style={styles.inputContainer}>
        <Feather name="user" size={20} color="#555" style={styles.icon} />
        <TextInput placeholder="Enter Name Here" style={styles.input} value={name} onChangeText={setName} />
      </View>

      <Text style={styles.label}>E-mail</Text>
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#555" style={styles.icon} />
        <TextInput placeholder="Your Email Address" style={styles.input} keyboardType="email-address" value={email} onChangeText={setEmail} />
      </View>

      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="lock-outline" size={20} color="#555" style={styles.icon} />
        <TextInput placeholder="Enter Your Password" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
      </View>

      <Text style={styles.label}>Re-Type Password</Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="lock-outline" size={20} color="#555" style={styles.icon} />
        <TextInput placeholder="Re-Type Your Password" style={styles.input} secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
      </View>
      <TouchableOpacity style={styles.checkboxContainer} >
     
     <Text style={styles.checkboxText}> I agree with the <Text style={styles.linkText}>terms and conditions</Text></Text>
   </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
      

      <Text style={styles.orText}>Or Sign Up with</Text>
        <View style={styles.socialContainer}>
          <FontAwesome5 name="facebook" size={35} color="#007BFF" style={styles.socialIcon} />
          <Image source={require("../../assets/images/Google__G__logo.svg.png")} style={styles.icon1} />
        </View>

      
        <Text style={styles.loginText}>
          Already have an account?{" "}
          <Text style={styles.linkText} onPress={() => navigation.navigate("Login")}>Log In</Text>
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", paddingHorizontal: 20 },

  imageContainer: { width: 60, height: 60, borderRadius: 50, backgroundColor: "#eee", justifyContent: "center", alignItems: "center", marginBottom: 10 },
  profileImage: { width: "100%", height: "100%", borderRadius: 50 },
  imageButtons: { flexDirection: "row", gap: 10, marginBottom: 20 },
  imageButton: { flexDirection: "row", alignItems: "center", backgroundColor: "#007BFF", padding: 3, borderRadius: 20, paddingHorizontal: 12 },
  imageButtonText: { color: "white", fontSize: 14, marginLeft: 5 },
  

  arrow:{
    padding:5,
      borderRadius: 10,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      position: "absolute",
    top: 50,
    left: 20,
   
      shadowRadius: 5,
      elevation: 1,
    },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10, 
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 15,
    color: "black",
    marginBottom: 10,
    fontWeight: "bold",
    marginLeft: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    width: "95%",
    height: 52,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginRight: 60,
    marginBottom: 15,
  },
  checkboxText: {
    fontSize: 13,
    marginLeft: 5,
  },
  linkText: {
    color: "#007BFF",
    fontWeight: "bold",
  },
  signUpButton: {
  backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 30,
    width: "95%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    color: "#fff",
    fontSize: 16,
  },
  orText: {
    marginTop: 50,
    marginBottom: 15,
    fontSize: 14,
    fontWeight: "bold",
  },
  socialContainer: {
    flexDirection: "row",
    gap: 20,
  },
  icon1: {
    width: 35,
    height: 35,
    marginTop:3,
  },
  loginText: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: "bold",
  },
});


export default SignUpScreen;