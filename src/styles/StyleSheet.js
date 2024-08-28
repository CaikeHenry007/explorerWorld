import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageAnimated: (scrollA) => ({
    height: 350,
    width: "140%",
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-350, 0, 350, 350 + 1],
          outputRange: [-350 / 2, 0, 350 * 0.75, 350 * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-350, 0, 350, 350 + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
});

export default styles;
