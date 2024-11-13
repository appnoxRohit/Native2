import {
  Appearance,
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colors";
import MENU_IMAGES from "@/constants/MenuImages";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";

type Theme = {
  background: string;
  // Add other theme properties as needed, e.g., `textColor`, `primaryColor`, etc.
};
type coffee = {
  id: number;
  title: string;
  description: string;
};
export const MENU_ITEMS: coffee[] = [
  { id: 1, title: "Espresso", description: "Strong, concentrated black coffee shot" },
  { id: 2, title: "Cappuccino", description: "Espresso, steamed milk, and foam" },
  { id: 3, title: "Latte", description: "Espresso with steamed milk foam" },
  { id: 4, title: "Americano", description: "Espresso diluted with hot water" },
  { id: 5, title: "Flat White", description: "Espresso, steamed milk, microfoam" },
  { id: 6, title: "Macchiato", description: "Espresso with a touch of milk" },
  { id: 7, title: "Mocha", description: "Espresso with chocolate and milk" },
  { id: 8, title: "Cold Brew", description: "Coffee brewed slowly, cold water" },
  { id: 9, title: "Affogato", description: "Espresso poured over vanilla ice-cream" },
  { id: 10, title: "Iced Latte", description: "Chilled espresso with milk and ice" },
];
const colorScheme = Appearance.getColorScheme();

const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

export default function MenuScreen() {
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const [favorite, setFavorite] = useState<number[]>([]);

  const handleFavorite = (id: number) => {
    setFavorite((prevFavorite) =>
      prevFavorite.includes(id)
        ? prevFavorite.filter((favId) => favId !== id)
        : [...prevFavorite, id]
    );
  };

  const styles = style(theme);
  return (
    <Container style={styles.container}>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: { item: coffee }) => (
          <View style={styles.cardContainer}>
          <Image style={styles.image} source={MENU_IMAGES[item.id - 1]} />

            <View style={styles.left}>
              <Text style={styles.title}>{item.title.toLocaleUpperCase()}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <TouchableOpacity onPress={() => handleFavorite(item.id)} style={styles.favoriteButton}>
                <AntDesign
                  name={favorite.includes(item.id) ? "heart" : "hearto"}
                  size={24}
                  color={favorite.includes(item.id) ? "red" : "gray"}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </Container>
  );
}

const style = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "beige",
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    cardContainer: {
      flexDirection: "row",
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 15,
      marginVertical: 10,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      elevation: 5,
    },
    left: {
      flex: 1,
      justifyContent: "space-between",
      marginLeft: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      // color: theme,
    },
    description: {
      fontSize: 14,
      color: "#555",
      marginVertical: 5,
    },
    favoriteButton: {
      alignSelf: "flex-start",
      marginTop: 10,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
      
    },
  });
