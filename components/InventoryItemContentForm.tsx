import { Octicons } from "@expo/vector-icons";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { XCircleIcon } from "react-native-heroicons/outline";
import DropDownPicker from "react-native-dropdown-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useState } from "react";
import { router } from "expo-router";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";

interface InventoryItemContentFormProps {
  onClose: () => void;
  categories: string[];
}

export const InventoryItemContentForm = (
  props: InventoryItemContentFormProps
) => {
  const [unitDropDownIsOpen, setUnitDropDownIsOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("");
  const [categoryDropDownIsOpen, setCategoryDropDownIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const onHandleDateChange = (event : DateTimePickerEvent, selectedValue? : Date) => {
    if (selectedValue){
      setDate(selectedValue)
    }

    setShowDateTimePicker(false)
  }

  const unitItems = [
    {
      label: "g",
      value: "g",
    },
    {
      label: "stk",
      value: "stk",
    },
  ];

  const categoryItems = props.categories.map((a) => ({
    label: a,
    value: a.toLowerCase(),
  }));

  const onScanBarCode = () => {
    router.navigate("../barCodeScanner")
    props.onClose()
  }

  const onCreate = () => {
    props.onClose()
  }

  return (
    <Modal
      style={{
        alignContent: "center",
      }}
      transparent
    >
      <View
        style={{
          width: wp(80),
          height: hp(70),
          borderRadius: 25,
          backgroundColor: "#fff",
          alignSelf: "center",
          marginTop: 120,
        }}
      >
        <View style={{ flexDirection: "row", margin: 20 }}>
          <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 5 }}>
            New item
          </Text>
          <TouchableOpacity onPress={props.onClose}>
            <XCircleIcon
              color="#52C95E"
              size={hp(4)}
              strokeWidth={2.5}
              style={{ paddingRight: 325 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ margin: 20 }}>
          <View
            style={{
              height: hp(6),
              flexDirection: "row",
              borderColor: "#ccc",
              borderWidth: 1,
              alignItems: "center",
              borderRadius: 15,
              marginBottom: 20,
            }}
          >
            <Octicons
              name="tag"
              size={hp(2.7)}
              color="gray"
              style={{ marginLeft: 5 }}
            />
            <TextInput
              style={{ marginLeft: 5, fontSize: hp(1.7) }}
              placeholder="Item name"
            />
          </View>
          <View
            style={{
              height: hp(6),
              flexDirection: "row",
              borderColor: "#ccc",
              borderWidth: 1,
              alignItems: "center",
              borderRadius: 15,
              marginBottom: 20,
            }}
          >
            <Octicons
              name="clock"
              size={hp(2.7)}
              color="gray"
              style={{ marginLeft: 5 }}
            />
            <TouchableOpacity onPress={() =>  setShowDateTimePicker(true)}>
            <Text style={{ color: 'gray', marginLeft: 5}}>{date.toLocaleDateString()}</Text>
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
              marginBottom: 20,
            }}
          >
            <DropDownPicker
              placeholder="Select category"
              placeholderStyle={{ color: "gray" }}
              open={categoryDropDownIsOpen}
              setOpen={setCategoryDropDownIsOpen}
              value={selectedCategory}
              setValue={setSelectedCategory}
              items={categoryItems}
              style={{ width: wp(70), borderColor: "#ccc", borderRadius: 15 }}
            />
          </View>
          <View style={{ marginBottom: 20, flexDirection: "row" }}>
            <View
              style={{
                height: hp(6.5),
                width: wp(30),
                flexDirection: "row",
                borderColor: "#ccc",
                borderWidth: 1,
                alignItems: "center",
                borderRadius: 15,
                marginRight: 10,
                alignSelf: "flex-start",
              }}
            >
              <Octicons
                name="hash"
                size={hp(2.3)}
                color="gray"
                style={{ marginLeft: 5 }}
              />
              <TextInput
                style={{ marginLeft: 5, fontSize: hp(1.7) }}
                placeholder="Number"
                keyboardType="numeric"
              />
            </View>

            <DropDownPicker
              placeholder="Select unit"
              placeholderStyle={{ color: "gray" }}
              open={unitDropDownIsOpen}
              setOpen={setUnitDropDownIsOpen}
              value={selectedUnit}
              setValue={setSelectedUnit}
              items={unitItems}
              style={{ width: wp(37), borderColor: "#ccc", borderRadius: 15 }}
            />
          </View>
          <TouchableOpacity
            onPress={() => onCreate()}
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
              Create
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Text>Or scan barcode?</Text>
          <TouchableOpacity onPress={() => onScanBarCode()}>
            <Text
              style={{ color: "#52C95E", fontWeight: "700", marginLeft: 5 }}
            >
              Scan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default InventoryItemContentForm;
