import React, { Component } from 'react';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails';
// import FormPersonalDetails from './FormPersonalDetails';

export class UserForm extends Component {

	state = {
		step : 1,
		fullName: '',
		mobile: '',
		email: '',
		occupation: '',
		city: '',
		bio: '',

	}


	nextStep = () =>{
		const { step } = this.state; 
		this.setState({
			step: step+1
		});
	}
	prevStep = () =>{
		const { step } = this.state; 
		this.setState({
			step: step-1
		});
	}

	handleChange = input=>e =>{
		this.setState({ [input]: e.target.value});
	}


	render() {
		const { step } = this.state; 
		const { fullName, mobile, email, occupation, city, bio } = this.state; 
		const values = { fullName, email, occupation, city, bio, mobile }

		
		switch(step){
			case 1:
				return(
					<FormUserDetails 
						nextStep = {this.nextStep}
						handleChange= {this.handleChange}
						values= {values}
					/>
				)
			case 2:
				return(
					<FormPersonalDetails 
						nextStep = {this.nextStep}
						prevStep = {this.prevStep}
						handleChange= {this.handleChange}
						values= {values}
					/>
				)
			case 3:
				return(
					<h1>
						Confirm
					</h1>
				)
			case 4:
				return(
					<h1>
						Success
					</h1>
				)
		}


		// return (
		// 	<div>
				
		// 	</div>
		// )
	}
}

export default UserForm;
