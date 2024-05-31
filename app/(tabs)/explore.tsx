import { router } from "expo-router";
import {
  StyleSheet,
  Image,
  Text,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { PlusCircleIcon } from "react-native-heroicons/outline";
import { Card } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export type InventoryItemContent = {
  id: number;
  category: string;
  item: string;
  number: number;
  unit: string;
  expirationDate?: string;
};

export type InventoryItem = {
  id: number;
  name: string;
  description?: string;
  content?: InventoryItemContent[];
};

export default function TabTwoScreen() {
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
          unit: 'g',
          expirationDate: '12.06.2024'
        },
      ],
    },
    {
      id: 2,
      name: "Freezer",
      description: "Freezer in the basement",
    },
  ];

  return (
    <ScrollView>
      <View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "700", margin: 20 }}>
            Overview
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Card
            onPress={() => router.push(`/`)}
            style={{
              marginLeft: 20,
              marginRight: 10,
              width: wp(40),
              shadowColor: "#52C95E",
            }}
          >
            <Card.Title title="35" titleVariant="headlineSmall" />
            <Card.Content style={{ flexDirection: "row" }}>
              <Text style={{ color: "#52C95E", fontWeight: "600" }}>
                Total items
              </Text>
            </Card.Content>
          </Card>
          <Card
            onPress={() => router.push(`/`)}
            style={{
              marginLeft: 20,
              marginRight: 10,
              width: wp(40),
              shadowColor: "#52C95E",
            }}
          >
            <Card.Title title="14" titleVariant="headlineSmall" />
            <Card.Content>
              <Text style={{ color: "#52C95E", fontWeight: "600" }}>
                Missing Products
              </Text>
            </Card.Content>
          </Card>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Card
            onPress={() => router.push(`/`)}
            style={{
              marginLeft: 20,
              marginRight: 10,
              width: wp(40),
              shadowColor: "#52C95E",
            }}
          >
            <Card.Title title="2" titleVariant="headlineSmall" />
            <Card.Content style={{ flexDirection: "row" }}>
              <Text style={{ color: "#52C95E", fontWeight: "600" }}>
                Near Expiration
              </Text>
            </Card.Content>
          </Card>
          <Card
            onPress={() => router.push(`/`)}
            style={{
              marginLeft: 20,
              marginRight: 10,
              width: wp(40),
              shadowColor: "#52C95E",
            }}
          >
            <Card.Title title="14" titleVariant="headlineSmall" />
            <Card.Content>
              <Text style={{ color: "#52C95E", fontWeight: "600" }}>
                Expired Products
              </Text>
            </Card.Content>
          </Card>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <View style={{ flexDirection: "row", margin: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: "700", marginRight: 5 }}>
            Inventory
          </Text>
          <PlusCircleIcon color="#000" />
        </View>
        <View>
          {inventories
            ? inventories.map((i) => (
                <Card
                  onPress={() => router.push(`/inventory/${i.id}`)}
                  style={{
                    marginRight: 20,
                    marginLeft: 20,
                    marginBottom: 10,
                  }}
                >
                  <Card.Title title={i.name} titleVariant="headlineSmall" />
                  <Card.Content style={{ flexDirection: "row" }}>
                    <Text>{i.description}</Text>
                  </Card.Content>
                </Card>
              ))
            : null}
        </View>
      </View>
    </ScrollView>
  );
}
