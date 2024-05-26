import { StatusBar } from "expo-status-bar";
import { View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  ChevronLeftIcon,
  ClockIcon,
  FireIcon,
} from "react-native-heroicons/outline";
import { UsersIcon, Square3Stack3DIcon } from "react-native-heroicons/solid";
import { router, useLocalSearchParams } from "expo-router";
import { Meal } from "../(tabs)";

const RecipePage = () => {
  const { id } = useLocalSearchParams();

  // TODO: replace this with query for recipe by id
  const meals: Meal[] = [
    {
      id: 1,
      name: "Pad Thai With Chicken",
      uri: "https://www.thespruceeats.com/thmb/yjq6cAJFh-tIPISFDHs9qidFADs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-pad-thai-3217194-Hero_01-098e8b1085c24a90a97a5a4fce7070f3.jpg",
      description: "test test",
      ingredients: ["600g Chicken", "1/2 Lemon", "200g Rice Noodles"],
      area: "Thai",
      time: 35,
      servings: "04",
      calories: 564,
      difficulty: "Hard",
    },
    {
      id: 2,
      name: "BBQ Burger",
      uri: "https://www.allrecipes.com/thmb/AEUv2IFTElpnEekzq2QSvz-9zbI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4023531-6fd6a7e8b02d47609879f935b9b18310.jpg",
      description:
        "In a small saucepan, whisk together the ketchup, brown sugar, sugar, honey, molasses, mustard, Worcestershire sauce, salt, liquid smoke and pepper. Bring the mixture to a boil. Remove the saucepan from heat. Set aside 1 cup barbecue sauce to serve with the burgers.\nIn a large bowl, combine the egg, oats, 1/4 cup of the remaining barbecue sauce, onion salt, garlic salt, pepper and salt. Crumble the beef over the mixture, and stir well, being careful not to overwork the mixture. Wet your hands, and shape the mixture into six patties.\nGrill the burgers, covered, over medium heat until a thermometer reads 160°, five to six minutes on each side, basting the patties with 1/2 cup barbecue sauce during the final five minutes. Serve the patties on buns with your toppings of choice and the reserved barbecue sauce.",
      ingredients: ["2 burgers", "2 buns", "20g salad"],
      area: "American",
      time: 25,
      servings: "02",
      calories: 754,
      difficulty: "Easy",
    },
    {
      id: 3,
      name: "Greek Salad",
      uri: "https://www.thechunkychef.com/wp-content/uploads/2021/07/Greek-Salad-Recipe-recipe-card.jpg",
      description: "To make the salad...",
      ingredients: ["50g Olives", "3 stk Tomatos", "1 stk onion"],
      area: "Greek",
      time: 35,
      servings: "04",
      calories: 655,
      difficulty: "Medium",
    },
  ];

  var mealId = id ? parseInt(id[0]) : 0;
  const meal = meals.find((a) => a.id === mealId);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <StatusBar style="light" />
      <View>
        <Image
          source={{
            uri: meal?.uri,
          }}
          style={{
            width: 350,
            height: 250,
            borderRadius: 32,
            alignSelf: "center",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            margin: 5,
          }}
        />
      </View>
      <View style={{ position: "absolute", marginLeft: 15, marginTop: 30 }}>
        <TouchableOpacity
          onPress={() => router.navigate("(tabs)")}
          style={{
            width: wp(10),
            height: hp(5),
            borderRadius: 50,
            backgroundColor: "#fff",
          }}
        >
          <ChevronLeftIcon
            size={hp(3.5)}
            strokeWidth={4.5}
            color="#52C95E"
            style={{ marginTop: 5, marginLeft: 3 }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <Text
            style={{
              fontSize: hp(3),
              fontWeight: "700",
              marginLeft: 15,
              marginTop: 20,
            }}
          >
            {meal?.name}
          </Text>
          <Text style={{ fontSize: hp(2), marginLeft: 15, marginTop: 10 }}>
            {meal?.area}
          </Text>
        </View>
        <View style={{ flexDirection: "row", margin: 15, alignSelf: "center" }}>
          <View
            style={{
              width: wp(15),
              height: hp(15),
              borderRadius: 30,
              backgroundColor: "#52C95E",
              alignSelf: "center",
              marginRight: 30,
            }}
          >
            <View
              style={{
                height: hp(5),
                width: hp(5),
                alignContent: "center",
                backgroundColor: "#fff",
                borderRadius: 50,
                margin: 8,
              }}
            >
              <ClockIcon
                size={hp(4)}
                color="#000"
                strokeWidth={2.5}
                style={{ margin: 4 }}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: hp(2), fontWeight: "700" }}>
                {meal?.time}
              </Text>
              <Text style={{ fontSize: hp(2), fontWeight: "500" }}>Mins</Text>
            </View>
          </View>
          <View
            style={{
              width: wp(15),
              height: hp(15),
              borderRadius: 30,
              backgroundColor: "#52C95E",
              alignSelf: "center",
              marginRight: 30,
            }}
          >
            <View
              style={{
                height: hp(5),
                width: hp(5),
                alignContent: "center",
                backgroundColor: "#fff",
                borderRadius: 50,
                margin: 8,
              }}
            >
              <UsersIcon
                size={hp(4)}
                color="#000"
                strokeWidth={2.5}
                style={{ margin: 4 }}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: hp(2), fontWeight: "700" }}>
                {meal?.servings}
              </Text>
              <Text style={{ fontSize: hp(2), fontWeight: "500" }}>Pers</Text>
            </View>
          </View>
          <View
            style={{
              width: wp(15),
              height: hp(15),
              borderRadius: 30,
              backgroundColor: "#52C95E",
              alignSelf: "center",
              marginRight: 30,
            }}
          >
            <View
              style={{
                height: hp(5),
                width: hp(5),
                alignContent: "center",
                backgroundColor: "#fff",
                borderRadius: 50,
                margin: 8,
              }}
            >
              <FireIcon
                size={hp(4)}
                color="#000"
                strokeWidth={2.5}
                style={{ margin: 4 }}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: hp(2), fontWeight: "700" }}>
                {meal?.calories}
              </Text>
              <Text style={{ fontSize: hp(2), fontWeight: "500" }}>Cal</Text>
            </View>
          </View>
          <View
            style={{
              width: wp(15),
              height: hp(15),
              borderRadius: 30,
              backgroundColor: "#52C95E",
              alignSelf: "center",
            }}
          >
            <View
              style={{
                height: hp(5),
                width: hp(5),
                alignContent: "center",
                backgroundColor: "#fff",
                borderRadius: 50,
                margin: 8,
              }}
            >
              <Square3Stack3DIcon
                size={hp(4)}
                color="#000"
                strokeWidth={2.5}
                style={{ margin: 4 }}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: hp(2), fontWeight: "700" }}></Text>
              <Text style={{ fontSize: hp(2), fontWeight: "500" }}>
                {meal?.difficulty}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{ fontSize: hp(2.3), fontWeight: "700", marginLeft: 15 }}
          >
            Ingredients
          </Text>
          <View>
            {meal?.ingredients ? (
              meal.ingredients.map((a) => {
                return (
                  <View key={a} style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        height: hp(1.5),
                        width: hp(1.5),
                        backgroundColor: "#52C95E",
                        borderRadius: 100,
                        marginBottom: 5,
                        marginLeft: 25,
                        marginTop: 10,
                      }}
                    />
                    <View>
                      <Text style={{ margin: 5, fontWeight: "500" }}>{a}</Text>
                    </View>
                  </View>
                );
              })
            ) : (
              <Text>No ingredients</Text>
            )}
          </View>
        </View>
        <View>
          <Text style={{ fontSize: hp(2.3), fontWeight: "700", margin: 15 }}>
            Instructions
          </Text>
          <Text style={{ fontSize: hp(2), marginLeft: 15 }}>
            {meal?.description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipePage;
