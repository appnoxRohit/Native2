import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TabLayout from "@/app-example/(tabs)/_layout";

export default function contact() {
  return (
    <View style={{justifyContent:"center", alignItems:"center"}}>
      <Text style={styles.heading}>COFFE MENU</Text>
      <Text style={styles.address}>
         Brewed Bliss Coffee Shop Address: 123 Coffee Lane,
        Espresso City, Brewland 90210, USA
      </Text>
      <Text style={styles.information}>
        Phone: +1 (555) 123-4567 Email: info@brewedblisscoffee.com Website:
        www.brewedblisscoffee.com
      </Text>
      <Text style={{fontSize:20,fontWeight:'bold' , marginTop:40,}}>Business Hours:</Text>
      <Text style={{fontSize:15 , fontWeight:'normal' ,marginTop:40,}}>
        Monday to Friday: 7:00 AM - 7:00 PM Saturday: 8:00 AM - 5:00 PM Sunday:
        Closed Social Media:
      </Text>
      <Text>
        Facebook: Brewed Bliss Coffee Instagram: @BrewedBlissCoffee Twitter:
        @BrewedBliss
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  heading:{
    fontSize:50,

  },
  address:{
    marginTop:20,

  },
  information:{

  },
  socialhandles:{

  }
});
