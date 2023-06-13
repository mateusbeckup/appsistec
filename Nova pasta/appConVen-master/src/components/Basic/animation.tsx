import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react-native";

interface AppAnimation {
  obj: any;
  width: number;
  height: number;
}

export function AppAnimation({ obj, height, width }: AppAnimation) {
  const animationRef = useRef<Lottie>(null);

  useEffect(() => {
    animationRef.current?.play();

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, []);

  return (
    <Lottie
      style={{ width: width, height: height }}
      ref={animationRef}
      source={obj}
    />
  );
}
