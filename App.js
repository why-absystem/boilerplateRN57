import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Container, StyleProvider, Text } from 'native-base';
import SplashScreen from "react-native-splash-screen";
import getTheme from './src/themes/native-base-theme/components';
import theme from './src/themes/native-base-theme/variables/variables';
import RootApp from "./src/RootApp";
import { Warna } from "./src/themes/Warna";

export default class App extends Component {

	static navigationOptions = {};

	constructor( props ) {
		super( props );
	}

	componentDidMount() {
		SplashScreen.hide();
	}

	render() {
		return (
			<StyleProvider style={ getTheme( theme ) }>
				<Container>
					<StatusBar
						backgroundColor={ Warna.StatusBar }
						barStyle="light-content"
					/>
					<RootApp/>
				</Container>
			</StyleProvider>
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