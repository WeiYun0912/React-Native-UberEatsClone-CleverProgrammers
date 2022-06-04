import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetail/About";

import MenuItems from "../components/restaurantDetail/MenuItems";
import { Divider } from "react-native-elements";
import ViweCart from "../components/restaurantDetail/ViewCart";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />

      <Divider width={1.8} style={{ marginVertical: 20 }} />

      <MenuItems restaurantName={route.params.name} />
      <ViweCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
