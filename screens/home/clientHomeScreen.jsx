import React ,{useEffect}  from 'react';
import { StyleSheet, Text, View, ImageBackground , Image ,Dimensions , StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';

import SmallCard  from '../../components/SmallCard';
import { useDispatch,useSelector } from 'react-redux';

import Colors from "../../constants/Colors.js";

const screen = Dimensions.get("window");
const ClientHomeScreen = props =>{
  console.disableYellowBox = true;
const playerID= props.navigation.getParam('playerID');  //get Player ID
const playerUID= props.navigation.getParam('playerUID'); 


//***************************************************************************

    return(

      <View style ={styles.container}>
      <StatusBar hidden />
      
      <ScrollView >
            <ImageBackground source = {require("../../assets/pictures/barber4.png")} style = {styles.firstImage}>
           
           <SearchBar placeholder=" Recherche salon , coiffeur"
        containerStyle = {styles.searchBar}
        inputContainerStyle = {{
                borderRadius : 25,
                backgroundColor :"white"
        }}
        lightTheme = {true} />
            </ImageBackground>

        
              <View style = {styles.textTopBarbers}>
                <Text style = {{fontSize : 18,fontWeight : "bold"}}>
                
                Meilleurs Salons
                
                </Text>
                <Text>Tout Afficher
                
                </Text>
              </View>

          <ScrollView style ={styles.topBarbers} horizontal showsHorizontalScrollIndicator  = {false}>

              <View style = {styles.topBarbersCard} >
                      <View style = {styles.cardImage}>
                       <Image source = {require("../../assets/pictures/barber7.png")} style = {styles.image}  />
                      </View>

                      <View style= {styles.cardBody}> 
                      <View style = {styles.cardBodyTitle}>
                        <Text>Tahfifa Saloon</Text>
                        <Text>4.9/5.0</Text>
                      </View>

                      <View style = {styles.cardBodyInfo}>
                      <Text>27 Rue Didouche Rue d'alger Blida</Text>

                      </View>

                    
                        <Button 
                        buttonStyle ={styles.button}
                        title = "Detail" 
                        containerStyle = {styles.cardBodyButton}
                        />
                 

                      </View>

              </View>

              <View style = {styles.topBarbersCard} >
                      <View style = {styles.cardImage}>
                       <Image source = {require("../../assets/pictures/barber.jpg")} style = {styles.image}  />
                      </View>

                      <View style= {styles.cardBody}> 
                      <View style = {styles.cardBodyTitle}>
                        <Text>Tahfifa Saloon</Text>
                        <Text>4.9/5.0</Text>
                      </View>

                      <View style = {styles.cardBodyInfo}>
                      <Text>27 Rue Didouche Rue d'alger Blida</Text>

                      </View>
                      <Button 
                        buttonStyle ={styles.button}
                        title = "Detail" 
                        containerStyle = {styles.cardBodyButton}
                        />

                      </View>

              </View>


          </ScrollView>


          <View style = {styles.textTopBarbers}>
                <Text style = {{fontSize : 18,fontWeight : "bold"}}>
                
                Meilleurs Coiffeurs
                
                </Text>
                <Text>Tout Afficher
                
                </Text>
              </View>
          <ScrollView style ={styles.topBarbers} horizontal showsHorizontalScrollIndicator  = {false}>

              <View style = {styles.topBarbersCard} >
                      <View style = {styles.cardImage}>
                       <Image source = {require("../../assets/pictures/barber7.png")} style = {styles.image}  />
                      </View>

                      <View style= {styles.cardBody}> 
                      <View style = {styles.cardBodyTitle}>
                        <Text>Tahfifa Saloon</Text>
                        <Text>4.9/5.0</Text>
                      </View>

                      <View style = {styles.cardBodyInfo}>
                      <Text>27 Rue Didouche Rue d'alger Blida</Text>

                      </View>

                      <Button 
                        buttonStyle ={styles.button}
                        title = "Detail" 
                        containerStyle = {styles.cardBodyButton}
                        />

                      </View>

              </View>

              <View style = {styles.topBarbersCard} >
                      <View style = {styles.cardImage}>
                       <Image source = {require("../../assets/pictures/barber.jpg")} style = {styles.image}  />
                      </View>

                      <View style= {styles.cardBody}> 
                      <View style = {styles.cardBodyTitle}>
                        <Text>Tahfifa Saloon</Text>
                        <Text>4.9/5.0</Text>
                      </View>

                      <View style = {styles.cardBodyInfo}>
                      <Text>27 Rue Didouche Rue d'alger Blida</Text>

                      </View>

                      <Button 
                        buttonStyle ={styles.button}
                        title = "Detail" 
                        containerStyle = {styles.cardBodyButton}
                        />

                      </View>

              </View>


          </ScrollView>
         
</ScrollView>
</View>
   
     );    
};

ClientHomeScreen.navigationOptions= ()=>{
  return {
    headerTransparent : true ,
    headerStyle:{
        backgroundColor: 'white'
    },
    headerBackTitle : " ",
    headerTitle: () => (
      <Image 
      resizeMode="cover"
      style={{
        width:150,
        height:40,
        resizeMode:'contain',
        alignSelf: 'center'}}
      
      />
    )};
}


const styles= StyleSheet.create({
  container : {
      flex : 1,
      backgroundColor : "#ffffff"
  },
  /////////////////////////////////////////////
  firstImage : {
    width : screen.width,
    height : screen.height * 0.4 ,
   overflow : "hidden",
   

  } ,
  image : {
    height : "100%",
    width : "100%",
   resizeMode : "stretch"
},
////////////////////////////////////////////////////////
 textTopBarbers : {
   flexDirection : "row",
   justifyContent : "space-between",
    marginTop : 25,
    marginHorizontal : 20
 },
 topBarbers : {
  width : "100%",
  height : screen.height * 0.4 ,

},
 topBarbersCard : {
   width : screen.width * 0.85 ,
    height : "80%",
    alignSelf : "center",
    borderRadius : 30,
    borderWidth : 0.3 ,
    overflow : "hidden",
    margin : 10,
    backgroundColor : "white"
 },
 cardImage : {
  overflow : "hidden",
  height : "50%"
 },
 cardBody : {
   flex : 1 ,
  justifyContent : "space-between",

 },
 cardBodyTitle : {
    flexDirection : "row",
    justifyContent : "space-between",
    marginHorizontal : "5%",
    marginTop :"2%"

 },
 cardBodyInfo : {
  marginHorizontal : "5%"
 }, 
 cardBodyButton : {
    alignItems :"flex-end",
    overflow : "hidden",
     
 },
 button : {
     backgroundColor : "#fd6c57",
     borderTopLeftRadius : 18,
     width : "30%"
 },
 searchBar :{
  width : "80%" , 
  alignSelf : "center",
  borderRadius : 20 , 
  backgroundColor : "rgba(52, 52, 52, 0)" ,
  marginTop : 15,
  borderTopWidth : 0 , 
  borderBottomWidth : 0 
  }
   

});

export default ClientHomeScreen;