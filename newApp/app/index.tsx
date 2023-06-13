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


import Ionicons from "@expo/vector-icons/Ionicons";
import { AppBackground } from "./components/Basic/background";
import { AppHeader } from "./components/Basic/header";
import ToggleSwitch from "toggle-switch-react-native";
import { Auth } from "../src/lib/homeAuth";
import { api } from "../src/lib/api";
import { encode } from "base-64";
import { useRouter } from "expo-router";

if (!global.btoa) {
  global.btoa = encode;
}


export default function Home() {
  // Pega tamaho da tela atual
  const { bottom, top } = useSafeAreaInsets();
  const [togle, setTogle] = useState(false);
  const [user, setUser] = useState("");
  const [server, setServer] = useState("");
  const [pass, setpass] = useState("");

  const router = useRouter();

  async function Authententification(){
    router.push("/dashbard");
       await Auth(server, user, pass, togle)
  } 

  async function list(){
  const response = await  api.get("/convenserver/vendedores/OLIVIR", {auth:{
      username: "OLIVIR",
      password: "4222"
     }})
    console.log(response.data)
    
  }

  useEffect(()=>{
    list()

  },[])

  return (
    <>
      <AppBackground />
      <AppHeader />
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
                value={server}
                onChangeText={setServer}
                  passwordRules="true"
                  className="border-none"
                  placeholder="usuario"
                />
                <View className="absolute right-5">
                  <Ionicons name="server" size={20} color="#3E3E3E" />
                </View>
              </View>
            </View>

            <View className="w-full flex flex-col gap-y-1">
              <View className="w-full flex relative flex-row shadow-lg items-center shadow-black bg-white   p-2 rounded-lg  ">
                <TextInput
                 value={user}
                 onChangeText={setUser}
                className="border-none" placeholder="Usuario" />
                <View className="absolute right-5">
                  <Ionicons name="person" size={20} color="#3E3E3E" />
                </View>
              </View>
            </View>

            <View className="w-full flex flex-col gap-y-1">
              <View className="w-full flex relative flex-row shadow-lg items-center shadow-black bg-white   p-2 rounded-lg  ">
                <TextInput
                      value={pass}
                      onChangeText={setpass}
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
            onPress={()=> Authententification()}
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
