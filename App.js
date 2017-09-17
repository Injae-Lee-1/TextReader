import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default class App extends Component {
	_goSelectMenu() {
		Alert.alert("show menu");
	}
	
	_showStatus() {
		Alert.alert("show status");
	}
	
	_leftPage() {
		Alert.alert("left page");
	}
	
	_rightPage() {
		Alert.alert("right page");
	}
	
	_settings() {
		Alert.alert("settings");
	}
	
	render() {
		return (
			<View style={styles.container}>
				<View>
					<Button
						onPress={this._goSelectMenu}
						title='Show menu'
						color='#fff'
					/>
				</View>
				<View style={styles.centerContainer}>
					<Button style={styles.buttonStyle}
					        onPress={this._leftPage}
					        title='Left page'
					        color='#fff'
					/>
					<Button style={styles.buttonStyle}
					        onPress={this._settings}
					        title='Settings'
					        color='#fff'
					/>
					<Button style={styles.buttonStyle}
					        onPress={this._rightPage}
					        title='Right page'
					        color='#fff'
					/>
				</View>
				<View>
					<Button
						onPress={this._showStatus}
						title='Show status'
						color='#fff'
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000',
		flexDirection: 'column',
		marginTop: 20,
		justifyContent: 'space-between',
	},
	buttonStyle: {
		flex: 1,
		backgroundColor: '#fff846'
	},
	centerContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
});
