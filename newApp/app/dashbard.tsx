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
 
  import ToggleSwitch from "toggle-switch-react-native";
  import { Auth } from "../src/lib/homeAuth";
  import { api } from "../src/lib/api";
  import { encode } from "base-64";
  import { useRouter } from "expo-router";
import { AppHeader } from "./components/Basic/header";
import { AppMenu } from "./components/menu";

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
         <View className="w-full h-screen  relative flex flex-row">
           <View className="w-full">
            <AppMenu />
        </View>
         </View>
        </ScrollView>
      </>
    );
  }
  