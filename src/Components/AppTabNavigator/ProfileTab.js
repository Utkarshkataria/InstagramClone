import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { Icon } from "react-native-elements";


class ProfileTab extends Component {


    static navigationOptions = {
        tabBarIcon: ({tintColor})=>(
            <Icon
       size={25}
       name='person'
       type='ionicons'
       color={tintColor}
     />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>ProfileTab</Text>
            </View>
        );
    }
}
export default ProfileTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});