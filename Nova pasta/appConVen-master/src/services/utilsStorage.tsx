import AsyncStorage from "@react-native-async-storage/async-storage";
import { create_UUID } from "../lib/FuncUtils";
import Toast from "react-native-toast-message";
export function SaveCredentials() {}

const table = "Credentials@Save";
//==============================================
export const GetClient = async (): Promise<any> => {
  const response = await AsyncStorage.getItem(table);
  const data = response ? JSON.parse(response) : [];

  return data.reverse();
};
//==============================================
export const CreateClientDB = async (
  servidor: string,
  usuario: string,
  senha: string
) => {
  try {
    const NewCresentials = {
      id: create_UUID(),
      servidor: servidor,
      usuario: usuario,
      senha: senha,
    };

    const response = await AsyncStorage.getItem(table);
    const previousData = response ? JSON.parse(response) : [];

    const data = [...previousData, NewCresentials];
    await AsyncStorage.setItem(table, JSON.stringify(data));

    return Toast.show({
      type: "success",
      text1: "Salvo com sucesso",
    });
  } catch (error: any) {
    Toast.show({
      type: "error",
      text1: error.message,
    });
  }
};
//==============================================
export const DeleteCredentials = async (id: string): Promise<any> => {
  try {
    const response = await AsyncStorage.getItem(table);
    const responseData = response ? JSON.parse(response) : [];
    const data = responseData.filter((item) => item.id !== id);
    await AsyncStorage.setItem(table, JSON.stringify(data));
  } catch (error: any) {
    Toast.show({
      type: "error",
      text1: error.message,
    });
  }
};
