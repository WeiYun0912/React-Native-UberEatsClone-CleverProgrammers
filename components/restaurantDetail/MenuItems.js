import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const foods = [
  {
    title: "Pizza",
    description: "Pizzaaa aa a a ",
    price: "$13.50",
    image:
      "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  },
  {
    title: "Pizza",
    description: "Pizzaaa aa a a ",
    price: "$13.50",
    image:
      "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  },
  {
    title: "Pizza",
    description: "Pizzaaa aa a a ",
    price: "$13.50",
    image:
      "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  },
  {
    title: "Pizza",
    description: "Pizzaaa aa a a ",
    price: "$13.50",
    image:
      "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  },
  {
    title: "Pizza",
    description: "Pizzaaa aa a a ",
    price: "$13.50",
    image:
      "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  },
  {
    title: "Pizza",
    description: "Pizzaaa aa a a ",
    price: "$13.50",
    image:
      "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  },
  {
    title: "Pizza",
    description: "Pizzaaa aa a a ",
    price: "$13.50",
    image:
      "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => {
  return (
    <Image
      source={{
        uri: props.food.image,
      }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  );
};
