import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { Icon } from "react-native-elements";


class SearchTab extends Component {


    static navigationOptions = {
        tabBarIcon: ({tintColor})=>(
            <Icon
       size={25}
       name='ios-search'
       type='ionicon'
       color={tintColor}
     />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>SearchTab</Text>
            </View>
        );
    }
}
export default SearchTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});