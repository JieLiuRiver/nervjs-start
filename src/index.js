// @jsx createElement
// eslint-disable-next-line
import { createElement, render, Component, cloneElement } from "nervjs";
import { View } from "@tarojs/components";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <View style={styles}>
    <View>Start editing to see some happen {"\u2728"}</View>
  </View>
);

render(<App />, document.getElementById("root"));
