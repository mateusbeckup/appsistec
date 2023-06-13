import { styled } from "nativewind";
import { ImageBackground, StatusBar } from "react-native";

import { SplashScreen, Stack } from "expo-router";
import React, { useEffect, useState } from "react";



export default function Layout() {



  return (
    <>
      <StatusBar  translucent />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
          animation: "fade",
        }}
      >
        {/* ESSE REDIRECT PASSA PARA PROXIMA ROTA */}
        <Stack.Screen name="index"  />
      </Stack></>

  );
}
