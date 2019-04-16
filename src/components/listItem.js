import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
    onRowPress() {
        Actions.employeeCreate();
    }


    render() {
        const { name } = this.props.employee;

        return (
            <TouchableWithoutFeedback>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyles}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyles: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;

