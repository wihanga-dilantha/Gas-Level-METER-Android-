import { Alert } from "react-native";
export function ShowNotConnectedAlert () {
  Alert.alert(
    "Warning !!",
    "Device Not Connected",
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