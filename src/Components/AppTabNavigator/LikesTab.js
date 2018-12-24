import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { Icon } from "react-native-elements";


class LikesTab extends Component {


    static navigationOptions = {
        tabBarIcon: ({tintColor})=>(
            <Icon
       size={25}
       name='ios-heart'
       type='ionicon'
       color={tintColor}
     />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>LikesTab</Text>
            </View>
        );
    }
}
export default LikesTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});