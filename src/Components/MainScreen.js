import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator } from 'react-navigation'
import HomeTab from '../Components/AppTabNavigator/HomeTab'
import SearchTab from '../Components/AppTabNavigator/SearchTab'
import AddMediaTab from '../Components/AppTabNavigator/AddMediaTab'
import LikesTab from '../Components/AppTabNavigator/LikesTab'
import ProfileTab from '../Components/AppTabNavigator/ProfileTab'
import { Icon } from "react-native-elements";




export default class MainScreen extends Component {
    static navigationOptions = {
         
         headerLeft:<Icon
          size={25}
         name='camera'
         type='font-awesome'
         color='#517fa4'
         iconStyle={{padding:10}}
       />,
       title: "Instagram",
       headerTitleContainerStyle: {
        textAlign: 'center',
        justifyContent:'center',
        alignItems:'center'
     },
       headerRight:<Icon
       reverse
       size={15}
       name='ios-send'
       type='ionicon'
       color='#517fa4'
     />,
   
    }
    render() {
        return (
        
                <TabNavigatorStack />


        );
    }
}
 const TabNavigatorStack = createBottomTabNavigator({
    HomeTab:HomeTab,
    SearchTab:SearchTab,  
    AddMediaTab:AddMediaTab, 
    LikesTab:LikesTab,  
    ProfileTab:ProfileTab
    
},{
animationEnabled:true,
swipeEnabled:true,
tabBarPosition:'bottom',
tabBarOptions:{
    activeTintColor:'#000',
    inactiveTintColor:'#d1cece',
    showLabel:false,
    showIcons:true

}
}
) 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});