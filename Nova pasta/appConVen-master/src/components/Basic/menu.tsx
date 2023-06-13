import { View, Image, Text } from "react-native";
import Logo from "../../../assets/logo.png";
import { AppAnimation } from "./animation";

interface AppMenu {
  nameRoute?: string;
}

export function AppMenu({ nameRoute }: AppMenu) {
  return (
    <View className="w-full flex flex-row bg-transparent p-2 gap-x-28 fixed  items-center">
      <View className=" flex self-start h-16 justify-center items-center ">
        <Text className="font-bold text-white text-[25px]">{nameRoute}</Text>
      </View>
      <View className="w-[50%] flex bg-black  bg-transparent relative">
        <Image className="" source={Logo} />
      </View>
    </View>
  );
}
