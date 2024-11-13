import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TabLayout from "@/app-example/(tabs)/_layout";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>COFFEE MENU</Text>
      <Text style={styles.address}>
        Brewed Bliss Coffee Shop Address: 123 Coffee Lane,
        Espresso City, Brewland 90210, USA
      </Text>
      <Text style={styles.information}>
        Phone: +1 (555) 123-4567 Email: info@brewedblisscoffee.com Website:
        www.brewedblisscoffee.com
      </Text>
      <Text style={styles.businessHoursHeading}>Business Hours:</Text>
      <Text style={styles.businessHours}>
        Monday to Friday: 7:00 AM - 7:00 PM Saturday: 8:00 AM - 5:00 PM Sunday:
        Closed
      </Text>
      <Text style={styles.socialHeading}>Social Media:</Text>
      <Text style={styles.socialHandles}>
        Facebook: Brewed Bliss Coffee Instagram: @BrewedBlissCoffee Twitter:
        @BrewedBliss
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "beige",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    color: "brown",
    textAlign: "center",
  },
  address: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
    color: "#555",
  },
  information: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
    color: "#555",
  },
  businessHoursHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    color: "#333",
  },
  businessHours: {
    fontSize: 16,
    marginTop: 10,
    color: "#555",
    textAlign: "center",
  },
  socialHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    color: "#333",
  },
  socialHandles: {
    fontSize: 16,
    marginTop: 10,
    color: "#555",
    textAlign: "center",
  },
});
