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
  import { router } from "expo-router";
  
  const LoginScreen = () => {
    const onLogin = () => {
      router.navigate("(tabs)");
    };
  
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ paddingHorizontal: 25 }}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../assets/images/EcoEats.png")}
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
            Login
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
            <TouchableOpacity onPress={() => {}}>
              <Text style={{ color: "#52C95E", fontWeight: "700" }}>Forgot?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => onLogin()}
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
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => router.navigate("../registerPage")}>
            <Text style={{ color: "#52C95E", fontWeight: "700", marginLeft: 5 }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default LoginScreen;
  