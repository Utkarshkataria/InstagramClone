import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { Card, cardItem, Thumbnail, Body, Left, Right, Button, CardItem} from 'native-base'
import { Icon } from "react-native-elements";



const img =  require('../../assets/back.png');
const img1 = require('../../assets/logo.png')
class CardComponent extends Component {
    render() {
        return (
          <Card>
              <CardItem>
                  <Left>
                      <Thumbnail
                       source = {img}
                      />
                       <Body>
                           <Text>Utkarsh</Text>
                           <Text note>23 Dec 2018 </Text>
                       </Body>
                              
                  </Left>
              </CardItem>

              <CardItem cardBody>
                  <Image source={img1} 
                      style={{height:200,width:null,flex:1}}
                  />
              </CardItem>

              <CardItem>
                  <Left>
                      <Button transparent>
 
                        <Icon name = "heart" 
                            size={25}
                            type='ionicons'
                            color={'black'}
                        /> 
                      </Button>
                  </Left>
              </CardItem>
          </Card>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});