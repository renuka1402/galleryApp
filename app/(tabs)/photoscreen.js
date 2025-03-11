

import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const albums = [
  { id: "1", month: "April", images: [require("../../assets/images/1st.jpg"), require("../../assets/images/2nd.jpg"), require("../../assets/images/1st.jpg"), require("../../assets/images/3rd.jpg"), require("../../assets/images/1st.jpg"), require("../../assets/images/22.jpg"), require("../../assets/images/33.jpg"), require("../../assets/images/OIP.jpg")], extraCount: 50 },
  { id: "2", month: "March", images: [require("../../assets/images/1st.jpg"), require("../../assets/images/2nd.jpg"), require("../../assets/images/3rd.jpg"), require("../../assets/images/1st.jpg"), require("../../assets/images/22.jpg"), require("../../assets/images/1st.jpg"), require("../../assets/images/33.jpg"), require("../../assets/images/OIP.jpg")], extraCount: 81 },
  { id: "3", month: "February", images: [require("../../assets/images/1st.jpg"), require("../../assets/images/2nd.jpg"), require("../../assets/images/1st.jpg"), require("../../assets/images/3rd.jpg"), require("../../assets/images/1st.jpg"), require("../../assets/images/22.jpg"), require("../../assets/images/33.jpg"), require("../../assets/images/OIP.jpg")], extraCount: 36 }
];

const PhotoScreen = () => {
  const [capturedImage, setCapturedImage] = useState(null); 
  const [galleryImages, setGalleryImages] = useState([]); 
  const navigation = useNavigation();

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

    if (!result.canceled) {
      setCapturedImage(result.assets[0].uri);
    }
  };

  // const handleOpenGallery = async () => {
  //   const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //   if (status !== "granted") {
  //     alert("Gallery access ki permission chahiye!");
  //     return;
  //   }

  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsMultipleSelection: true, // Multiple selection allow karega
  //     quality: 1,
  //   });

  //   if (!result.canceled) {
  //     const selectedImages = result.assets.map((asset) => asset.uri);
  //     setGalleryImages([...galleryImages, ...selectedImages]); // State update karega
  //   }
  // };

  return (
    <View style={{ flex: 1, backgroundColor: "#000", padding: 15 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>PICTORIA</Text>
        <TouchableOpacity onPress={handleCameraOpen}>
          <Feather name="camera" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.photoButton} onPress={() => navigation.goBack()}>
          <Text style={styles.photoText}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.albumButton} onPress={() => navigation.navigate("Album")}>
          <Text style={styles.albumText}>Album</Text>
        </TouchableOpacity>
      </View>

 
      {capturedImage && (
        <View style={styles.capturedImageContainer}>
          <Text style={styles.capturedImageText}>Camera</Text>
          <Image source={{  capturedImage }} style={styles.capturedImage} />
        </View>
      )}


      {/* <TouchableOpacity onPress={handleOpenGallery} style={styles.galleryButton}>
        <Text style={styles.galleryButtonText}>Open Gallery</Text>
      </TouchableOpacity> */}

 
      {/* <FlatList
        data={galleryImages}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      /> */}

      <FlatList
        data={albums}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.monthText}>{item.month}</Text>
            <FlatList
              data={item.images}
              keyExtractor={(img, index) => index.toString()}
              numColumns={4}
              renderItem={({ item: img, index }) => (
                index === item.images.length - 1 ? (
                  <View style={styles.imageOverlayContainer}>
                    <Image source={img} style={[styles.image, styles.blurredImage]} />
                    <View style={styles.overlay}>
                      <Text style={styles.overlayText}>+{item.extraCount}</Text>
                    </View>
                  </View>
                ) : (
                  <Image source={img} style={styles.image} />
                )
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 10,
    marginLeft: 14,
    marginRight: 23,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#30302E",
    borderRadius: 10,
    width: "95%",
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    height: 55,
    marginLeft: 10,
  },
  photoButton: {
    flex: 1,
    backgroundColor: "#D8D95F",
    paddingVertical: 10,
    margin: 2,
    alignItems: "center",
  },
  albumButton: {
    flex: 1,
    backgroundColor: "#30302E",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    height: 40,
    margin: 5,
  },
  photoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  albumText: {
    color: "#D8D95F",
    fontWeight: "bold",
    fontSize: 17,
  },
  monthText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 10,
    margin: 5,
  },
  imageOverlayContainer: {
    position: "relative",
  },
  blurredImage: {
    opacity: 0.7,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  overlayText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  capturedImageContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  capturedImageText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  capturedImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  galleryButton: {
    backgroundColor: "#D8D95F",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  galleryButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default PhotoScreen;


