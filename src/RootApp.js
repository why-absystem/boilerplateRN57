import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';

export default class RootApp extends Component {

  static navigationOptions = {};

  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <View style={ [styles.container] }>
        <Text>
            RootApp
        </Text>
      </View>
    );
  }
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
};