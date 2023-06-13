import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";


export function AppMenu(){
    return (
        <View className="w-full flex flex-col gap-y-2">
        <View className="w-full  flex flex-row  items-center justify-center gap-2">
         
            <TouchableOpacity   activeOpacity={0.7} className="w-[30%] flex flex-col items-center justify-center bg-white rounded-xl p-3 shadow-zinc-500 shadow-xl">
                <Ionicons name="person" size={35} color="#AFAFAF"/>
                <Text>Cliente</Text>
            </TouchableOpacity  >

            <TouchableOpacity   activeOpacity={0.7} className="w-[30%] flex flex-col items-center justify-center bg-white rounded-xl p-3 shadow-zinc-500 shadow-xl">
                <Ionicons name="person-sharp"  size={35} color="#AFAFAF"/>
                <Text>Vendedor</Text>
            </TouchableOpacity >

            <TouchableOpacity   activeOpacity={0.7} className="w-[30%] flex flex-col items-center justify-center bg-white rounded-xl p-3 shadow-zinc-500 shadow-xl">
                <Ionicons name="cart" size={35} color="#AFAFAF"/>
                <Text>Pedido</Text>
            </TouchableOpacity >

        </View>

        <View className="w-full flex flex-row items-center justify-center gap-2">

            <TouchableOpacity  activeOpacity={0.7}  className="w-[30%] flex flex-col items-center justify-center bg-white rounded-xl p-3 shadow-zinc-500 shadow-xl">
                <Ionicons name="list" size={35} color="#AFAFAF"/>
                <Text>Produto</Text>
            </TouchableOpacity >
            <TouchableOpacity  activeOpacity={0.7}  className="w-[30%] flex flex-col items-center justify-center bg-white rounded-xl p-3 shadow-zinc-500 shadow-xl">
                <Ionicons name="book" size={35} color="#AFAFAF"/>
                <Text>Produtos</Text>
            </TouchableOpacity >
            <TouchableOpacity  activeOpacity={0.7}  className="w-[30%] flex flex-col items-center justify-center bg-white rounded-xl p-3 shadow-zinc-500 shadow-xl">
                <Ionicons name="settings" size={35} color="#AFAFAF"/>
                <Text>Sincronização</Text>
            </TouchableOpacity >
        </View>
        </View>
    );
}