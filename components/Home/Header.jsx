import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Header() {
  const { user } = useUser();
  return (
    <View
      style={{
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              color: Colors.WHITE,
              fontFamily: "outfit",
              fontSize: 18,
            }}
          >
            Welcome
          </Text>

          <Text
            style={{
              fontSize: 19,
              fontFamily: "outfit-medium",
            }}
          >
            {user?.email || "Guest"}
          </Text>
        </View>
        <Image
          source={{ uri: user?.imageUrl || "data:image/png;base64,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" }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 99,
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          backgroundColor: "#fff",
          padding: 10,
          marginVertical: 10,
          marginTop: 15,
          borderRadius: 8,
        }}
      >
        {/* Searchbar */}
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput
          placeholder="Search..."
          style={{
            fontFamily: "outfit",
            fontSize: 15,
          }}
        />
      </View>
    </View>
  );
}
