import React from "react";
import { StyleSheet, SafeAreaView, View, Platform } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
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
