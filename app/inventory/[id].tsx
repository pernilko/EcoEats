import { router, useLocalSearchParams } from "expo-router";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { InventoryItem } from "../(tabs)/explore";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  ChevronLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { Card, List } from "react-native-paper";
import Categories from "@/components/Categories";
import { useState } from "react";

const InventoryItemPage = () => {
  const { id } = useLocalSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    {
      name: "All",
      uri: "https://www.forksoverknives.com/uploads/food-groups1.jpg?auto=webp&width=2000&height=1902",
    },
    {
      name: "Fruit",
      uri: "https://t4.ftcdn.net/jpg/02/25/19/35/360_F_225193597_Fzkc8az2teeN4rQpatUUwWyjGFmBnnqt.jpg",
    },
    {
      name: "Protein",
      uri: "https://t3.ftcdn.net/jpg/02/26/53/80/360_F_226538033_C42p96JDNwkSdQs86Agxd1TtaVJsyJ71.jpg",
    },
    {
      name: "Veggies",
      uri: "https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg",
    },
    {
      name: "Carbs",
      uri: "https://www.heart.org/-/media/Images/Healthy-Living/Healthy-Eating/Carbohydrates1.jpg",
    },
    {
      name: "Fats/Oils",
      uri: "data:image/jpeg;base64,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",
    },
    {
      name: "Dairy",
      uri: "https://idahomilkproducts.b-cdn.net/wp-content/uploads/2021/09/processing-differences-common-dairy-products.jpg",
    },
  ];

  const inventories: InventoryItem[] = [
    {
      id: 1,
      name: "Fridge",
      description: "Our fridge at home",
      content: [
        {
          id: 1,
          category: "Fruit",
          item: "Apple",
          number: 2,
          unit: 'stk'
        },
        {
          id: 2,
          category: "Protein",
          item: "Chicken",
          number: 500,
          unit: 'g'
        },
      ],
    },
    {
      id: 2,
      name: "Freezer",
      description: "Freezer in the basement",
    },
  ];

  var itemId = id ? parseInt(id[0]) : 0;
  const item = inventories.find((i) => i.id === itemId);

  return (
    <ScrollView>
      <View
        style={{
          paddingTop: 30,
          paddingLeft: 20,
          paddingBottom: 10,
          flexDirection: "row",
          backgroundColor: "#52C95E",
        }}
      >
        <View style={{ marginRight: 40 }}>
          <TouchableOpacity
            onPress={() => router.navigate("(tabs)/explore")}
            style={{
              width: wp(10),
              height: hp(5),
              borderRadius: 50,
              backgroundColor: "#fff",
            }}
          >
            <ChevronLeftIcon
              size={hp(4)}
              strokeWidth={4.5}
              color="#52C95E"
              style={{ marginTop: 4, marginLeft: 1 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "600", fontSize: 24 }}>{item?.name}</Text>
        </View>
      </View>
      <View>
        <View
          style={{
            width: wp(80),
            height: 40,
            borderRadius: 50,
            backgroundColor: "#E8E8E8",
            flexDirection: "row",
            marginBottom: 20,
            marginTop: 20,
            marginLeft: 20,
          }}
        >
          <TextInput
            placeholder="Search for item"
            textAlign="left"
            style={{ margin: 5, marginLeft: 10 }}
            onPress={() => {}}
          />
          <View style={{ marginTop: 10, marginHorizontal: 130 }}>
            <MagnifyingGlassIcon color="gray" size={hp(2.5)} strokeWidth={3} />
          </View>
        </View>
        <Categories
          categories={categories}
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />
        <View style={{ margin: 20 }}>
          <Text style={{ fontWeight: "700", fontSize: 16, marginBottom: 20 }}>
            Category: {selectedCategory}
          </Text>
          {item?.content ? (
            item.content
              .filter((a) => a.category?.includes(selectedCategory))
              .map((c) => (
                <Card>
                  <Card.Content style={{ flexDirection: "row"}}>
                    <Text style={{ marginRight: 2 }}>{c.number}</Text>
                    <Text style={{ marginRight: 5 }}>{c.unit}</Text>
                    <Text style={{ marginRight: 5 }}>{c.item}</Text>
                  </Card.Content>
                </Card>
              ))
          ) : (
            <Text>No recipies</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default InventoryItemPage;
