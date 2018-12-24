import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { Icon } from "react-native-elements";


class AddMediaTab extends Component {


    static navigationOptions = {
        tabBarIcon: ({tintColor})=>(
            <Icon
       size={25}
       name='ios-add-circle'
       type='ionicon'
       color={tintColor}
     />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>AddMediaTab</Text>
            </View>
        );
    }
}
export default AddMediaTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});