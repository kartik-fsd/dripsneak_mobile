import * as React from "react";
import { Button, View } from "react-native";



interface NotificationsScreenProps {
  navigation: any; // Adjust type if needed
}

export const NotificationsScreen: React.FC<NotificationsScreenProps> = ({
  navigation,
}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};


