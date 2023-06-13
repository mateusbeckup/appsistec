import React from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppBackground } from "../components/Basic/background";
import { AppMenu } from "../components/Basic/menu";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Setting() {
  const { bottom, top } = useSafeAreaInsets();
  return (
    <>
      {" "}
      <AppBackground />
      <AppMenu nameRoute="Configuração" />
      <ScrollView
        className="w-full h-screen "
        contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
      >
        <View></View>
      </ScrollView>
    </>
  );
}
