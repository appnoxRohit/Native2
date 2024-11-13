import { Appearance, View , Text , Image, StyleSheet ,SafeAreaView,Platform,FlatList, ScrollView  } from "react-native";
import { Colors  } from "@/constants/Colors";
// import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";



type Theme = {
    background: string;
    // Add other theme properties as needed, e.g., `textColor`, `primaryColor`, etc.
  };
type coffee = {
    id:number;
    title:string;
    description:string;
    
}
export const MENU_ITEMS : coffee[] = [
       
                {
                  id: 1,
                  title: "Espresso",
                  description: "Strong, concentrated black coffee shot",
                },
                {
                  id: 2,
                  title: "Cappuccino",
                  description: "Espresso, steamed milk, and foam",
                },
                {
                  id: 3,
                  title: "Latte",
                  description: "Espresso with steamed milk foam",
                },
                {
                  id: 4,
                  title: "Americano",
                  description: "Espresso diluted with hot water",
                },
                {
                  id: 5,
                  title: "Flat White",
                  description: "Espresso, steamed milk, microfoam",
                },
                {
                  id: 6,
                  title: "Macchiato",
                  description: "Espresso with a touch of milk",
                },
                {
                  id: 7,
                  title: "Mocha",
                  description: "Espresso with chocolate and milk",
                },
                {
                  id: 8,
                  title: "Cold Brew",
                  description: "Coffee brewed slowly, cold water",
                },
                {
                  id: 9,
                  title: "Affogato",
                  description: "Espresso poured over vanilla ice-cream",
                },
                {
                  id: 10,
                  title: "Iced Latte",
                  description: "Chilled espresso with milk and ice",
                },
            
           
      
]
const colorScheme = Appearance.getColorScheme()

const theme = colorScheme === 'dark'?  Colors.dark : Colors.light;

export default function MenuScreen(){
    

    
    const Container = Platform.OS === 'web'? ScrollView :SafeAreaView;
    const styles = style(theme, colorScheme);
    return (
        
        <Container style={styles.container} >
            <FlatList 
            data={MENU_ITEMS}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item} : {item:coffee}) =>
                <View >
                    <Text style={{fontSize:20}}>{item.title}</Text>
                    <Text>{item.description}</Text>
                    <Image style={styles.image} source={MENU_IMAGES[item.id-1]}></Image>
                </View>
                }
            
      />
            
        </Container>
    )
};
// function style = (theme ,colorscheme)=>({
//     return StyleSheet.create({
        
  
//     })
//   })
  



const style = (theme: Theme)=> 
    StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:theme.background,
        fontFamily:''
    },
   
    image:{
      
        height:300,
        width:300,
    }
})