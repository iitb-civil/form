import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import { RaisedButton } from 'material-ui';

export class FormConfirm extends Component {
	
	continue = e => {
		e.preventDefault();

		const url = "https://script.google.com/macros/s/AKfycbyzhx-yHbCxVVbAN5i6iy48vGdBBr8yhBs5sDLqOJHPOsRiEmM/exec";
		
		const val = this.props.values;

		console.log(JSON.stringify(val));



		fetch(url,{
			method: 'POST',
			mode: 'no-cors',
			cache: 'no-cache',
			redirect: 'follow',
			body: JSON.stringify(val)
		});





		this.props.nextStep();
	}; 

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	}; 
	
	
	render() {
		const { values, handleChange } = this.props;
		return (
			<div>
				<MuiThemeProvider>
					<React.Fragment>
						<AppBar title="Confirm Details" />
						<TextField 
							hintText="Enter Your Occupation"
							floatingLabelText="Occupation"
							onChange={handleChange('occupation')}
							defaultValue={values.occupation}
						/>
						<br/>
						<TextField 
							hintText="Enter Your city"
							floatingLabelText="City"
							onChange={handleChange('city')}
							defaultValue={values.city}
						/>
						<br/>
						<TextField 
							hintText="Enter Your Bio"
							floatingLabelText="Bio"
							onChange={handleChange('bio')}
							defaultValue={values.bio}
						/>
						<br/>
						<RaisedButton 
							label="Back"
							primary={false}
							style={styles.button}
							onClick={this.back}
						/>
						<RaisedButton 
							label="Continue"
							primary={true}
							style={styles.button}
							onClick={this.continue}
						/>
					</React.Fragment>
				</MuiThemeProvider>
			</div>
		)
	}
}


const styles = {
	button: {
		margin: 15
	}
}

export default FormConfirm;
