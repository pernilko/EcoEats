import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useState } from "react";
import { router } from "expo-router";

const RegisterPage = () => {
  const [date, setDate] = useState(new Date());
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const onRegister = () => {
    router.navigate("(tabs)")
  }

  const onHandleDateChange = (event : DateTimePickerEvent, selectedValue? : Date) => {
    if (selectedValue){
      setDate(selectedValue)
    }

    setShowDateTimePicker(false)
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/images/EcoEats.png")}
            width={300}
            height={300}
            style={{ marginBottom: 30 }}
          />
        </View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
          }}
        >
          Registration
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
            placeholder="Full name"
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
            placeholder="Email ID"
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
            placeholder="Password"
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          onPress={() => onRegister()}
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
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;
