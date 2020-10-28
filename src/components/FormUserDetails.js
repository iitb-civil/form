import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RadioButton from 'material-ui/RadioButton';
import { RaisedButton } from 'material-ui';

export class FormUserDetails extends Component {
	
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	}; 
	
	
	render() {
		const { values, handleChange } = this.props;
		return (
			<div>
				<MuiThemeProvider>
					<React.Fragment>
						<AppBar title="Enter User Details" />
						<TextField 
							hintText="Enter Your Full Name"
							floatingLabelText="Full Name"
							onChange={handleChange('fullName')}
							defaultValue={values.firstName}
						/>
						<br/>
						<TextField 
							hintText="Enter Your email"
							floatingLabelText="Email"
							onChange={handleChange('email')}
							defaultValue={values.email}
						/>
						<br/>
						<TextField 
							hintText="Enter Your Occupation"
							floatingLabelText="Occupation"
							onChange={handleChange('occupation')}
							defaultValue={values.occupation}
						/>
						<br/>
						<RaisedButton 
							label="Continue"
							primary="true"
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

export default FormUserDetails;
