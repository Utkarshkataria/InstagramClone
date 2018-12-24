import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import {Container, Content} from 'native-base'
import { Icon } from "react-native-elements";
import CardComponent from "../CardComponent";


class HomeTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor})=>(
            <Icon
       size={25}
       name='ios-home'
       type='ionicon'
       color={tintColor}
     />
        )
    }

    render() {
        return (
         
                <Container style={styles.container}>
                    <Content>
                          <CardComponent></CardComponent>
                    </Content>
                </Container>
   
        );
    }
}
export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
      
    }
});