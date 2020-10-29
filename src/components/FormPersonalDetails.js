import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RadioButton from 'material-ui/RadioButton';
// import InputLabel from 'material-ui/';
import { RaisedButton } from 'material-ui';

export class FormPersonalDetails extends Component {
	
	continue = e => {
		e.preventDefault();
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
						<AppBar title="Please Enter Personal Details" />
						
						{/* <InputLabel htmlFor="age-native-simple">House Ownership</InputLabel>
						<Select
							native
							value={values.house_ownership}
							onChange={handleChange}
							inputProps={{
								name: 'age',
								id: 'age-native-simple',
							}}
						>
							<option aria-label="None" value="" />
							<option value={10}>Ten</option>
							<option value={20}>Twenty</option>
							<option value={30}>Thirty</option>
						</Select> */}

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

export default FormPersonalDetails;
