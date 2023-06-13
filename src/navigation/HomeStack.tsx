import React from "react";
import HomeScreen from "../screens/home/HomeScreen";

export default function (Stack: any) {
  return (
    <>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
    </>
  )
}