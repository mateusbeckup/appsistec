import AsyncStorage from "@react-native-async-storage/async-storage";

const table = "@saveCredentials";

// salva  o login se o toogle for true
export async function Auth(server: string, user: string, pass: string, togle: boolean){
    if(togle){
        const newCredentials = {
            server: server,
            user: user,
            pass: pass,
        }
         await AsyncStorage.setItem(table, JSON.stringify(newCredentials))
         console.log(" não")
    }else{
        console.log(" sim")
       
    }


}