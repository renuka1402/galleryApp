import React, { useState } from "react";
import { View, Text, ImageBackground, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const albums = [
  { id: "1", name: "Camera", count: "48 Photos", image: require("../../assets/images/1st.jpg"), color: "#A29B97" },
  { id: "2", name: "People", count: "65 Photos", image: require("../../assets/images/2nd.jpg"), color: "rgba(176, 136, 107, 0.6)" },
  { id: "3", name: "Video", count: "30 Videos", image: require("../../assets/images/3rd.jpg"), color: "#5A3D2B" },
  { id: "4", name: "Screenshot", count: "12 Photos", image: require("../../assets/images/22.jpg"), color: "#161616" },
  { id: "5", name: "Travel", count: "25 Photos", image: require("../../assets/images/33.jpg"), color: "#4B3621" },
  { id: "6", name: "Food", count: "40 Photos", image: require("../../assets/images/OIP.jpg"), color: "#705A4D" },
];

const AlbumScreen = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCameraOpen = async () => {
   
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      alert("Camera permission is required!");
      return;
    }

  
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,  
      mediaTypes: ImagePicker.MediaTypeOptions.Images, 
      quality: 1,  
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);  
      console.log("Image captured:", result.uri); 
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000", padding: 15 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>PICTORIA</Text>
        <TouchableOpacity onPress={handleCameraOpen}>
          <Feather name="camera" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.photoButton} onPress={() => navigation.goBack("photo")}>
          <Text style={styles.photoText}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.albumButton} onPress={() => navigation.navigate("Album")}>
          <Text style={styles.albumText}>Album</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={albums}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.albumContainer}>
            <TouchableOpacity style={styles.starIcon}>
              <FontAwesome5 name="star" size={12} color="#D8D95F" />
            </TouchableOpacity>
            <View style={styles.blur}>
              <ImageBackground
                source={item.image}
                style={styles.albumCard}
                imageStyle={{ borderRadius: 10 }}
              >
                <View style={[styles.overlay, { backgroundColor: item.color }]}>
                  <Text style={styles.albumTitle}>{item.name}</Text>
                  <Text style={styles.albumCount}>{item.count}</Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  albumContainer: {
    width: "47%",
    margin: "1%",
    position: "relative",
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#30302E",
    borderRadius: 10,
    width: "91%",
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    height: 55,
    marginLeft: 10,
  },
  photoButton: {
    flex: 1,
    backgroundColor: "#30302E",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  albumButton: {
    flex: 1,
    backgroundColor: "#D8D95F",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    height: 40,
    margin: 5,
  },
  photoText: {
    color: "#D8D95F",
    fontWeight: "bold",
    fontSize: 17,
  },
  albumText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  albumCard: {
    width: 135,
    height: 170,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
    position: "relative",
    marginBottom: 10,
    marginLeft: 5,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5,
  },
  albumTitle: {
    color: "white",
    fontWeight: "bold", fontSize:
      16, padding: 3
  },
  albumCount: {
    color: "white",
    fontSize: 12,
    padding: 3
  },
  starIcon: {
    position: "absolute",
    top: 10,
    right: 26,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 50,
    fontWeight: "bold",
    zIndex: 3,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 10,
    marginLeft: 14,
    marginRight: 23,
    fontFamily: "Poppins",
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  cameraButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#D8D95F",
    padding: 10,
    borderRadius: 50,
  },
  closeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default AlbumScreen;
