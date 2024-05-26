import { CategoryType } from "@/app/(tabs)";
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

interface CategoryProps {
  categories: CategoryType[];
  selected: string;
  setSelected: (category: string) => void;
}

export const Categories = ({
  categories,
  selected,
  setSelected,
}: CategoryProps) => {

  return (
    <Animated.View style={{ marginBottom: 10 }} entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
      >
        {categories.map((cat, index) => {
          let isSelected = cat.name == selected;
          let textColor = isSelected ? '#52C95E' : "#bfbfbf"
          return (
            <TouchableOpacity key={index} onPress={() => setSelected(cat.name)}>
              <View style={styles.container}>
                <Image
                  source={{
                    uri: cat.uri,
                  }}
                  style={isSelected ? styles.circularImgViewSelected : styles.circularImgView}
                />
                <Text
                  style={{ color: textColor, fontWeight: "700", fontSize: 13 }}
                >
                  {cat.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    marginRight: 5,
  },
  circularImgView: {
    width: 50,
    height: 50,
    borderRadius: 25, // Half of width and height to make it circular
  },
  circularImgViewSelected: {
    borderColor: '#52C95E',
    borderWidth: 3,
    width: 50,
    height: 50,
    borderRadius: 25, // Half of width and height to make it circular
  },
});

export default Categories;
