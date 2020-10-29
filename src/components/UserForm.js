import React, { Component } from 'react';
import FormConfirm from './FormConfirm';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails';
// import FormPersonalDetails from './FormPersonalDetails';

export class UserForm extends Component {

	state = {
		step : 1,
		name: '',
		mobile: '',
		email: '',
		city: '',
		bio: '',
		house_ownership: '',
		monthly_rent: '',
		area: '',
		address: '',
		family_members:'',
		num_adults:'',
		num_working_male:'',
		num_working_female:'',
		num_two_license_male:'',
		num_two_license_female:'',
		num_four_license_male:'',
		num_four_license_female:'',
		num_two_motarized_license_male:'',
		num_two_veh:'',
		num_four_veh:'',
		age_grp: '',
		occupation: '',
		monthly_income:'',
		education_level:'',
		job_time:'',
		job_mode:'',
		education_time:'',
		education_mode:'',
		shopping_time:'',
		shopping_mode:'',
		hospital_time:'',
		hospital_mode:'',
		resto_time:'',
		resto_mode:'',
		garden_time:'',
		garden_mode:'',
		rate_job:'',
		rate_school: '',
		rate_shopping: '',
		rate_hospital: '',
		rate_parks: '',
		rate_resto: '',
		case_1:'',
		case_2:'',
		case_3:'',
		case_4:'',
		case_5:'',
		case_6:'',
		case_7:'',
		case_8:'',
		case_9:'',
		case_10:'',
		case_11:'',
		case_12:'',
		case_13:'',
		case_14:'',
		case_15:'',
		case_16:'',
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
		const { name, mobile, email, occupation, city, bio, house_ownership } = this.state; 
		const values = { name, email, occupation, city, bio, mobile }

		
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
					<FormConfirm 
						nextStep = {this.nextStep}
						prevStep = {this.prevStep}
						handleChange= {this.handleChange}
						values= {values}
					/>
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
