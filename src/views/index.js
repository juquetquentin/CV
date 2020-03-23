import React from "react";
import { View, Text } from "react-native";

const PageScreen = () => {
  console.log("page screen");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>HELLO WORLD</Text>
    </View>
  );
};

export default PageScreen;
