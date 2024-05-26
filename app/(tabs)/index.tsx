import { Image, StyleSheet, View, Text, TextInput } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import PressableFeatureBox from "@/components/PressableFeatureBox";
import Categories from "@/components/Categories";
import { useState } from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

export type CategoryType = {
  name: string;
  uri: string;
};

export type Meal = {
  id: number;
  name: string;
  uri: string;
  description: string;
  ingredients: string[];
  area?: string;
  time?: number;
  servings?: string;
  calories?: number;
  difficulty?: string;
  category?: string[]
};

export default function HomeScreen() {

  const categories = [
    {
      name: "Recommended",
      uri: "https://www.allrecipes.com/thmb/AEUv2IFTElpnEekzq2QSvz-9zbI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4023531-6fd6a7e8b02d47609879f935b9b18310.jpg",
    },
    {
      name: "Vegan",
      uri: "https://media.post.rvohealth.io/wp-content/uploads/2021/08/tofu-salad-pineapple-quinoa-vegan-meal-1296x728-header-800x728.png",
    },
    {
      name: "Calorie Smart",
      uri: "https://www.themealkitreview.com/wp-content/uploads/2019/02/pork-tenderloin.jpg",
    },
    {
      name: "Breakfast",
      uri: "https://www.heavenlynnhealthy.com/wp-content/uploads/2015/07/Acai_Berry_Smoothie_Bowl-2.jpg",
    },
    {
      name: "Lunch",
      uri: "https://hips.hearstapps.com/hmg-prod/images/fully-loaded-veggie-sandwiches-6553977868999.jpg?crop=1.00xw:0.669xh;0,0.162xh&resize=640:*",
    },
  ];

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
      category: ['Recommended']
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
      difficulty: "easy",
      category: ['Recommended']
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
      category: ['Recommended', 'Lunch']
    },
  ];

  
  const [selectedCategory, setSelectedCategory] = useState("Recommended");

  // TODO: finsih search
  const onSearch = () => {
    const results = meals.map((m) => m.name.includes('pad'))
  }

  // TODO: query recipies based on category

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ccc", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/EcoEats.png")}
          style={{
            marginTop: 40,
            width: 130,
            height: 70,
            alignSelf: "flex-end",
            marginRight: 20,
          }}
        />
      }
    >
      <View
        style={{
          width: widthPercentageToDP(80),
          height: 40,
          borderRadius: 50,
          backgroundColor: "#E8E8E8",
          flexDirection: "row",
          marginBottom: 20,
        }}
      >
        <TextInput
          placeholder="Search for recipe"
          textAlign="left"
          style={{ margin: 5, marginLeft: 10 }}
          onPress={() => onSearch}
        />
        <View style={{ marginTop: 10, marginHorizontal: 130 }}>
          <MagnifyingGlassIcon
            color="gray"
            size={heightPercentageToDP(2.5)}
            strokeWidth={3}
          />
        </View>
      </View>
      <Categories
        categories={categories}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />
      <View>
        <Text style={{ fontWeight: "700", fontSize: 16 }}>
          {selectedCategory} Recipies
        </Text>
      </View>
      {meals ? (
        meals.filter((a) => a.category?.includes(selectedCategory)).map((meal) => (
          <PressableFeatureBox
            id={meal.id}
            name={meal.name}
            picture={meal.uri}
            onPress={() => {}}
            content={meal.ingredients}
          ></PressableFeatureBox>
        ))
      ) : (
        <Text>No recipies</Text>
      )}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
