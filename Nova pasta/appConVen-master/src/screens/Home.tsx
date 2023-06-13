import {
  ImageBackground,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlightBase,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";

import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SelectList } from "react-native-dropdown-select-list";
import { AppMenu } from "../components/Basic/menu";
import ToggleSwitch from "toggle-switch-react-native";
import { AppBackground } from "../components/Basic/background";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home() {
  // Pega tamaho da tela atual
  const { bottom, top } = useSafeAreaInsets();
  const [selected, setSelected] = useState("");
  const [togle, setTogle] = useState(false);

  return (
    <>
      <AppBackground />
      <AppMenu />
      <ScrollView
        className="w-full h-screen "
        contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
      >
        <View className="w-full p-5 ">
          <Text className="font-bold text-[22px] text-white">App Conven</Text>
          <Text className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rem
            harum sequi suscipit excepturi consequatur
          </Text>
        </View>
        <View className="w-full h-screen flex-col items-center justify-center p-3 mt-[-15vh] ">
          <View className="w-full  flex flex-col  items-center justify-center bg-white/20  gap-y-6 p-5 rounded-lg">
            <View className="w-full flex flex-col gap-y-1">
              <View className="w-full flex relative flex-row shadow-lg items-center shadow-black bg-white   p-2 rounded-lg  ">
                <TextInput
                  passwordRules="true"
                  className="border-none"
                  placeholder="servidor"
                />
                <View className="absolute right-5">
                  <Ionicons name="server" size={20} color="#3E3E3E" />
                </View>
              </View>
            </View>

            <View className="w-full flex flex-col gap-y-1">
              <View className="w-full flex relative flex-row shadow-lg items-center shadow-black bg-white   p-2 rounded-lg  ">
                <TextInput className="border-none" placeholder="Usuario" />
                <View className="absolute right-5">
                  <Ionicons name="person" size={20} color="#3E3E3E" />
                </View>
              </View>
            </View>

            <View className="w-full flex flex-col gap-y-1">
              <View className="w-full flex relative flex-row shadow-lg items-center shadow-black bg-white   p-2 rounded-lg  ">
                <TextInput
                  passwordRules="true"
                  className="border-none"
                  placeholder="Senha"
                />
                <View className="absolute right-5">
                  <Ionicons name="lock-closed" size={20} color="#3E3E3E" />
                </View>
              </View>
            </View>
            <View className="self-end my-10 mt-10">
              <ToggleSwitch
                isOn={togle}
                onColor="green"
                offColor="red"
                label="Lembrar usuario"
                labelStyle={{ color: "black", fontWeight: "400" }}
                size="small"
                onToggle={(isOn) => setTogle(isOn)}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              className="bg-blue-500 p-3 rounded-lg self-end mt-5"
            >
              <Text className="text-white font-bold">Conectar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
