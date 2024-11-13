import {
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Pressable,

} from "react-native";
import { Link } from "expo-router";
import { Email } from "@mui/icons-material";
// import icecoffe from '@/assets/images/ice-coffe.webp';

export default function Index() {



function add(num:string ):string{
  return num.toLocaleUpperCase()+"jyotii";
}
  console.log("hello" , add("okay"))

  function getdbID(id:number){
    return typeof(id);
  }
  console.log(getdbID(3))

let seat : "window" | "middle" |"corner"
 seat = "window"


  return (
    
    <View style={styles.container}>
      {/* <ImageBackground
        style={styles.Image}
        source={require("@/assets/images/ice-coffe.webp")}
        resizeMode="cover"
      >      </ImageBackground> */}

          <Text style={styles.heading}>COFFE SHOP</Text>
          <Link href={"/contact"} style={styles.contactLink}>
             <Pressable style={styles.button} >
                 <Text style={styles.contactBtnText}>Contact Us</Text>
             </Pressable>
        </Link>
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
    backgroundColor: "black",
    flex: 1,
    width: "100%", // Set width and height for better image control
    height: "100%",
    position: "relative",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "brown",
    position: "absolute",
    
  },
  contactLink: {
    
    fontWeight: "bold",
    position: "absolute",
    top: 50,
    
    left: 0,
    textDecorationLine: "underline",
    padding: 20,
  },
  button:{
    borderRadius:50,
    backgroundColor:'black',
    fontWeight:'bold',
    textDecorationColor:'white',
    height: 40,
    width: 100,
    paddingLeft:9,
    justifyContent:'center',
    alignContent:'center'

  },
  contactBtnText:{
   
    color:'white'

  }
});
