import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";
import BottomTabs from "../components/home/BottomTabs";

const YELP_API_KEY =
  "Vr4k_gMa7qdxKEtPHugAf6M6CkU6HtvvKUWGOPXl0H80tMagYEOo9MlpwAefOx3jSuHmy8s0haZpADAysQsEt1UQNjJYxQrCA-y1bGv8euKctQD_MHHmz2L1C6mZYnYx";

const Home = ({ navigation }) => {
  const [restaurantData, setRestaurantData] = useState();
  const [city, setCity] = useState("San Diego");
  const [activeTab, setActiveTab] = useState("Delivery");
  console.log("Home Page");
  const getRestaurantsFromYelp = async () => {
    const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpURL, apiOptions)
      .then((res) => res.json())
      .then((data) =>
        setRestaurantData(
          data.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  SafeArea: {
    backgroundColor: "#eee",
    flex: 1,
    paddingTop: Platform.OS == "android" ? 25 : 0,
  },
});
