import axios, { Axios, AxiosResponse } from "axios";
import { CameraView, useCameraPermissions } from "expo-camera";
import { BarCodeScanningResult } from "expo-camera/build/legacy/Camera.types";
import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


interface OpenFoodFactsProduct {
  code: string;
  product: {
    categories_tags: string[]
    product_name: string;
    expiration_date: string;
  }
}

const BarCodeScanner = () => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const handleBarCodeScanned = async ({ type, data } : BarCodeScanningResult) => {
    setScanned(true);
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    try {
      const response = await axios.get<OpenFoodFactsProduct>(`https://world.openfoodfacts.org/api/v0/product/${data.trim()}.json`);
      console.log(data)
      if (response.status === 200) {
        var category = 'en:beverages';
        if (response.data.product?.categories_tags && response.data.product.categories_tags.includes(category))
          category = 'beverages'
        alert(`Product found!\nName: ${response.data.product.product_name}, Category: ${category}, Expiration date: ${response.data?.product?.expiration_date}`);
        return response.data;
      } else {
        console.error('Error fetching product data:', response.statusText);
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.camera}
        facing={facing === "back" ? "back" : "front"}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      {scanned && (<Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default BarCodeScanner;
