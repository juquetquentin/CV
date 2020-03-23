import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  View,
  FlatList
} from "react-native";
import { Icon } from "react-native-elements";
import pageScreen from "./src/views/index";

const Stack = createStackNavigator();

const App = () => {
  const data = [
    {
      id: 1,
      name: "Web",
      iconName: "web",
      fontFamily: "material-community",
      color: "blue"
    },
    {
      id: 2,
      name: "Database",
      iconName: "database",
      fontFamily: "antdesign",
      color: "green"
    },
    {
      id: 3,
      name: "DevOps",
      iconName: "ios-infinite",
      fontFamily: "ionicon",
      color: "#ffbf00"
    },
    {
      id: 4,
      name: "Mobile",
      iconName: "ios-phone-portrait",
      fontFamily: "ionicon",
      color: "red"
    }
  ];

  const renderItem = ({ item }) => {
    console.log("toto", item);
    return (
      <View
        style={{
          flex: 1,
          borderColor: item.color,
          borderWidth: 1,
          borderRadius: 10,
          alignItems: "center",
          height: 60,
          margin: 15
        }}
      >
        <Text style={{ color: item.color }}>{item.name}</Text>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="pageScreen" component={pageScreen} />
      </Stack.Navigator>
      {/* <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>HELLO</Text>
        <FlatList
          data={data}
          style={{
            flex: 1,
            marginVertical: 20
          }}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View> */}
    </NavigationContainer>
  );
};

export default App;
