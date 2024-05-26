import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { CameraIcon } from "react-native-heroicons/solid";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";

export default function Profile() {
  const [selectedImage, setSelectedImage] = useState(
    "https://media.licdn.com/dms/image/C4E03AQGQjVl5BVc8Tg/profile-displayphoto-shrink_800_800/0/1617920387052?e=2147483647&v=beta&t=30Fmlwr2Kg6kCm8YaCSA6Bu4mHfo5L45wiVk2PRUqOw"
  );
  const [date, setDate] = useState(new Date());
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const onUpdateProfile = () => {
    router.navigate("(tabs)");
  };

  const onHandleImageSelection = async () => {
    const result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const onHandleDateChange = (event : DateTimePickerEvent, selectedValue? : Date) => {
    if (selectedValue){
      setDate(selectedValue)
    }
    
    setShowDateTimePicker(false)
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <StatusBar style="light" />
      <View style={{ alignItems: "center", marginVertical: 22 }}>
        <TouchableOpacity onPress={() => onHandleImageSelection()}>
          <Image
            source={{
              uri: selectedImage,
            }}
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              alignSelf: "center",
              borderColor: "#52C95E",
              borderWidth: 3,
              margin: 5,
            }}
          />
        </TouchableOpacity>
        <View style={{ position: "absolute", bottom: 5, right: 100 }}>
          <CameraIcon size={hp(4)} strokeWidth={4.5} color="#52C95E" />
        </View>
      </View>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center" }}></View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Profile
        </Text>
        <View />
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <MaterialIcons
            name="person-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Pernille Kopperud"
            style={{ flex: 1, paddingVertical: 0 }}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <MaterialIcons
            name="date-range"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TouchableOpacity onPress={() =>  setShowDateTimePicker(true)}>
            <Text>{date.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {showDateTimePicker ? (
            <DateTimePicker
              mode="date"
              display="calendar"
              value={date}
              style={{ flex: 1, paddingVertical: 0 }}
              onChange={(event, date) => onHandleDateChange(event, date)}
            ></DateTimePicker>
          ): null}
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="pernik@live.no"
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType="email-address"
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="************"
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          onPress={() => onUpdateProfile()}
          style={{
            backgroundColor: "#52C95E",
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
