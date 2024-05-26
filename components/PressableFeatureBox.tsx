import {
  Text,
  Button,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import Collapsible from "react-native-collapsible";
import { useState } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";

interface PressableFeatureBoxProps {
  id: number
  name: string;
  picture: string;
  content?: string[];
  onPress: () => void;
}

export const PressableFeatureBox = (props: PressableFeatureBoxProps) => {
  const [openIngredients, setOpenIngredients] = useState(false);

  return (
    <SafeAreaView>
      <Card onPress={() => router.push(`/recipes/${props.id}`)}>
        <Card.Title title={props.name} titleVariant="headlineSmall" />
        <Card.Content style={{ flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => setOpenIngredients(openIngredients ? false : true)}
          >
            <Text style={{ fontWeight: '700', color: '#52C95E', fontSize: 16}}>Ingredients</Text>
          </TouchableOpacity>
          <MaterialIcons
            name="arrow-drop-down"
            size={20}
            color="#52C95E"
            style={{ marginRight: 5 }}
          />
        </Card.Content>
        <Card.Content>
          <Collapsible collapsed={openIngredients ? false : true}>
            {props.content ? (
              props.content.map((i) => <Text>{i}</Text>)
            ) : (
              <Text>No Ingredients</Text>
            )}
          </Collapsible>
        </Card.Content>
        <Card.Cover source={{ uri: props.picture }} style={{ marginTop: 20 }} />
      </Card>
    </SafeAreaView>
  );
};

export default PressableFeatureBox;
