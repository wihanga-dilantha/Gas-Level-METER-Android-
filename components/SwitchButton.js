import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const SwitchButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "white", true: "green" }}
        thumbColor={isEnabled ? "green" : "black"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'20%',
    marginLeft:25,
    paddingLeft:15,
    alignItems: "flex-end",
    justifyContent: "center"
  }
});

export default SwitchButton;