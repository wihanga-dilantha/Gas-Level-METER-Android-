import { Alert } from "react-native";
export function showAlert () {
  Alert.alert(
    "Capacity Warning!",
    "Cylinder Capacity is less than 5%",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  )
};