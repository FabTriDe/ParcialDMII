import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  StatusBar,
} from "react-native";

export default function LandingPage({ navigation }) {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0d0d0d" />

      <View style={styles.badge}>
        <Text style={styles.badgeText}>Reporte ciudadano</Text>
      </View>

      <Text style={[styles.titulo, { fontSize: width < 380 ? 34 : 44 }]}>
        Snap<Text style={styles.accent}>Report</Text>
      </Text>

      <Text style={styles.slogan}>
        Fotografía, describe y reporta{"\n"}problemas urbanos en segundos.
      </Text>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
        }}
        style={{ width: width * 0.88, height: height * 0.26, borderRadius: 20 }}
        resizeMode="cover"
      />

      <View style={styles.chips}>
        {["🔦 Alumbrado", "🕳️Vías", "🗑️ Basura", "📌 Otro"].map((c) => (
          <View key={c} style={styles.chip}>
            <Text style={styles.chipText}>{c}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={[styles.cta, { width: width * 0.88 }]}
        onPress={() => navigation.navigate("ReportForm")}
        activeOpacity={0.85}
      >
        <Text style={styles.ctaText}>Comenzar a reportar →</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ReportList")}>
        <Text style={styles.secondary}>Ver reportes existentes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 16,
  },
  badge: {
    backgroundColor: "rgba(251,191,36,0.12)",
    borderWidth: 1,
    borderColor: "rgba(251,191,36,0.3)",
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 100,
  },
  badgeText: {
    color: "#fbbf24",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  titulo: {
    fontWeight: "800",
    color: "#ffffff",
    textAlign: "center",
    letterSpacing: -1,
  },
  accent: { color: "#fbbf24" },
  slogan: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    lineHeight: 22,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
  },
  chip: {
    backgroundColor: "#1a1a24",
    borderWidth: 1,
    borderColor: "#2a2a3a",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
  },
  chipText: { color: "#888", fontSize: 12 },
  cta: {
    backgroundColor: "#fbbf24",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  ctaText: { color: "#0d0d0d", fontSize: 16, fontWeight: "800" },
  secondary: { color: "#555", fontSize: 13 },
});
