import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import LandingPage from "./screens/LandingPage";

const Stack = createNativeStackNavigator();

// Pantallas placeholder temporales
function ReportForm() {
  const { View, Text } = require("react-native");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0d0d0d",
      }}
    >
      <Text style={{ color: "#fff" }}>Formulario de reporte</Text>
    </View>
  );
}

function ReportList() {
  const { View, Text } = require("react-native");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0d0d0d",
      }}
    >
      <Text style={{ color: "#fff" }}>Lista de reportes</Text>
    </View>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LandingPage"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="ReportForm" component={ReportForm} />
          <Stack.Screen name="ReportList" component={ReportList} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
