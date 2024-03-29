import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const NavFavorites = () => {
  const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "Fevzi çakmak mah, TR Istanbul",
    },
    {
      id: "456",
      icon: "briefcase",
      location: "Work",
      destination: "Arifbey mah, TR Sakarya",
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={(tw`bg-gray-200`, { height: 0.5 })} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-3`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location} </Text>
            <Text style={tw`text-gray-500`}>{destination} </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
