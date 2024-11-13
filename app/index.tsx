import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/coffeBackground.jpeg")}
        resizeMode="cover"
        style={styles.Image}
      >
        <Text style={styles.heading}>COFFEEEEE</Text>
        {/* Uncomment the following for the contact button */}
        {/* <Link href={"/contact"} style={styles.contactLink}>
          <Pressable style={styles.button}>
            <Text style={styles.contactBtnText}>Contact</Text>
          </Pressable>
        </Link> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "beige",
  },
  Image: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    color: "beige",
    position: "absolute",
    textAlign: "center",
    
    zIndex: 1,
  },
  button: {
    backgroundColor: "brown",
    fontWeight: "bold",
    height: 40,
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20, // Rounded corners
    marginTop: 20,
  },
  contactBtnText: {
    color: "white",
    textAlign: "center",
  },
});
