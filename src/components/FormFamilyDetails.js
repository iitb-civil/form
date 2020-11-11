import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { RaisedButton } from 'material-ui';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';


export class FormFamilyDetails extends Component {
	
	continue = e => {
		e.preventDefault();

		const {job_time,
			job_mode,
			education_time,
			education_mode,
			shopping_time,
			shopping_mode,
			hospital_time,
			hospital_mode,
			resto_time,
			resto_mode,
			garden_time,
			garden_mode,
			rate_job,
			rate_school,
			rate_shopping,
			rate_hospital,
			rate_parks,
			rate_resto,
		} = this.props.values;

		if(job_time == '' || job_mode == '' || education_time == '' || 
		education_mode == '' || shopping_time == '' || shopping_mode == '' || hospital_time == '' || hospital_mode == '' ||
		resto_time == '' || resto_mode == '' || garden_time == '' || garden_mode == '' || rate_job == ''||
		rate_school == '' || rate_shopping == '' || rate_hospital == '' || rate_parks == ''|| rate_resto == ''
		){
			alert("Please enter all the fields");
		}
		else if(
			isNaN(job_time) || isNaN(education_time) || isNaN(shopping_time) || isNaN(hospital_time) || isNaN(resto_time) ||
			isNaN(garden_time)
		){
			alert("Please enter valid numeric input in the fields");
		}

		
		else{
		this.props.nextStep();
		}
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
						<AppBar title="Enter Travel Details Details"   showMenuIconButton={false} />
						Travel time and mode details for :
						<br/>
						<br/>
						<center>
						1. Job/Work
						</center>
						<FormControl>
							
							<br/>
							
						<TextField 
						style={{width:500}}
							hintText="Please enter in mins, eg. 20, 40"
							floatingLabelText="Travel time to reach JOB/WORK"
							onChange={handleChange('job_time')}
							defaultValue={values.job_time}
						/>
						</FormControl>

						<FormControl style={{marginLeft:50, marginTop:33}}>
						<InputLabel htmlFor="agegrp-native-simple">Primary Mode of travel</InputLabel>
						
						<Select
							native
							value={values.job_mode}
							onChange={handleChange('job_mode')}
							
						>
							<option aria-label="None" value="" />
							<option value={1}>Own Car</option>
							<option value={2}>Bus</option>
							<option value={3}>Cycle</option>
							<option value={4}>Two-Wheeler</option>
							<option value={5}>Train</option>
							<option value={6}>Ola/Uber/Taxi/Auto-Rickshaw</option>
							<option value={7}>Walk</option>
						</Select>
						</FormControl>
						<br/>


						<br/>
						<center>
						2. Education School/College
						</center>
						<FormControl>
							
							<br/>
							
						<TextField 
							style={{width:500}}
							hintText="Please enter in mins, eg. 20, 40"
							floatingLabelText="Travel time to reach School/College"
							onChange={handleChange('education_time')}
							defaultValue={values.education_time}
						/>
						</FormControl>

						<FormControl style={{marginLeft:50, marginTop:33}}>
						<InputLabel htmlFor="agegrp-native-simple">Primary Mode of travel</InputLabel>
						
						<Select
							native
							value={values.education_mode}
							onChange={handleChange('education_mode')}
							
						>
							<option aria-label="None" value="" />
							<option value={1}>Own Car</option>
							<option value={2}>Bus</option>
							<option value={3}>Cycle</option>
							<option value={4}>Two-Wheeler</option>
							<option value={5}>Train</option>
							<option value={6}>Ola/Uber/Taxi/Auto-Rickshaw</option>
							<option value={7}>Walk</option>
						</Select>
						</FormControl>
						<br/>
						<br/>
						<center>
						3. Nearest Shopping Mall / Market
						</center>
						<FormControl>
							
							<br/>
							
						<TextField 
							style={{width:500}}
							hintText="Please enter in mins, eg. 20, 40"
							floatingLabelText="Travel time to reach Nearest Shopping Mall/Market"
							onChange={handleChange('shopping_time')}
							defaultValue={values.shopping_time}
						/>
						</FormControl>

						<FormControl style={{marginLeft:50, marginTop:33}}>
						<InputLabel htmlFor="agegrp-native-simple">Primary Mode of travel</InputLabel>
						
						<Select
							native
							value={values.shopping_mode}
							onChange={handleChange('shopping_mode')}
							
						>
							<option aria-label="None" value="" />
							<option value={1}>Own Car</option>
							<option value={2}>Bus</option>
							<option value={3}>Cycle</option>
							<option value={4}>Two-Wheeler</option>
							<option value={5}>Train</option>
							<option value={6}>Ola/Uber/Taxi/Auto-Rickshaw</option>
							<option value={7}>Walk</option>
						</Select>
						</FormControl>
						<br/>
						<br/>
						<center>
						4. Nearest hospital
						</center>
						<FormControl>
							
							<br/>
							
						<TextField 
							style={{width:500}}
							hintText="Please enter in mins, eg. 20, 40"
							floatingLabelText="Travel time to reach Nearest Hospital"
							onChange={handleChange('hospital_time')}
							defaultValue={values.hospital_time}
						/>
						</FormControl>

						<FormControl style={{marginLeft:50, marginTop:33}}>
						<InputLabel htmlFor="agegrp-native-simple">Primary Mode of travel</InputLabel>
						
						<Select
							native
							value={values.hospital_mode}
							onChange={handleChange('hospital_mode')}
							
						>
							<option aria-label="None" value="" />
							<option value={1}>Own Car</option>
							<option value={2}>Bus</option>
							<option value={3}>Cycle</option>
							<option value={4}>Two-Wheeler</option>
							<option value={5}>Train</option>
							<option value={6}>Ola/Uber/Taxi/Auto-Rickshaw</option>
							<option value={7}>Walk</option>
						</Select>
						</FormControl>
						<br/>
						<br/>
						<center>
						5. Restaurants
						</center>
						<FormControl>
							
							<br/>
							
						<TextField 
							style={{width:500}}
							hintText="Please enter in mins, eg. 20, 40"
							floatingLabelText="Travel time to reach nearest Restaurants"
							onChange={handleChange('resto_time')}
							defaultValue={values.resto_time}
						/>
						</FormControl>

						<FormControl style={{marginLeft:50, marginTop:33}}>
						<InputLabel htmlFor="agegrp-native-simple">Primary Mode of travel</InputLabel>
						
						<Select
							native
							value={values.resto_mode}
							onChange={handleChange('resto_mode')}
							
						>
							<option aria-label="None" value="" />
							<option value={1}>Own Car</option>
							<option value={2}>Bus</option>
							<option value={3}>Cycle</option>
							<option value={4}>Two-Wheeler</option>
							<option value={5}>Train</option>
							<option value={6}>Ola/Uber/Taxi/Auto-Rickshaw</option>
							<option value={7}>Walk</option>
						</Select>
						</FormControl>
						<br/>
						<br/>
						<center>
						6. Garden
						</center>
						<FormControl>
							
							<br/>
							
						<TextField 
							style={{width:500}}
							hintText="Please enter in mins, eg. 20, 40"
							floatingLabelText="Travel time to reach Nearest Garden"
							onChange={handleChange('garden_time')}
							defaultValue={values.garden_time}
						/>
						</FormControl>

						<FormControl style={{marginLeft:50, marginTop:33}}>
						<InputLabel htmlFor="agegrp-native-simple">Primary Mode of travel</InputLabel>
						
						<Select
							native
							value={values.garden_mode}
							onChange={handleChange('garden_mode')}
							
						>
							<option aria-label="None" value="" />
							<option value={1}>Own Car</option>
							<option value={2}>Bus</option>
							<option value={3}>Cycle</option>
							<option value={4}>Two-Wheeler</option>
							<option value={5}>Train</option>
							<option value={6}>Ola/Uber/Taxi/Auto-Rickshaw</option>
							<option value={7}>Walk</option>
						</Select>
						</FormControl>
						<br/>

						<br/>
						<br/>
						On a Scale of 1-10 Kindly rate for the services in accordance to their imporatnce
						<br/>
						<br/>						
						1 - Not important &nbsp;
						10 - Extremely Important
						<br/>
						<FormControl>
							
							<br/>
							
						<TextField 
							style={{fontSize:20, fontWeight:'bold', width:400}}
							floatingLabelText="House Locality nearer to Job/Workplace"
							disabled={true}					
						/>
						</FormControl>
							
						<FormControl style={{marginLeft:50, marginTop:33}}>
						<InputLabel htmlFor="agegrp-native-simple">Rating out of 10</InputLabel>
						
						<Select
							style={{width:300}}
							native
							value={values.rate_job}
							onChange={handleChange('rate_job')}
							style={{width:300}}
						>
							<option aria-label="None" value="" />
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
							<option value={5}>5</option>
							<option value={6}>6</option>
							<option value={7}>7</option>
							<option value={8}>8</option>
							<option value={9}>9</option>
							<option value={10}>10</option>
						</Select>
						</FormControl>
						<br/>

						<br/>
						<FormControl>
							
							<br/>
							
						<TextField 
							floatingLabelText="House Locality nearer to Good Schools"
							disabled={true}
							style={{fontSize:20, fontWeight:'bold', width:400}}
						/>
						</FormControl>
							
						<FormControl style={{marginLeft:50, marginTop:33}}>
						<InputLabel htmlFor="agegrp-native-simple">Rating out of 10</InputLabel>
						
						<Select
							native
							value={values.rate_school}
							onChange={handleChange('rate_school')}
							style={{width:300}}
							
						>
							<option aria-label="None" value="" />
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
							<option value={5}>5</option>
							<option value={6}>6</option>
							<option value={7}>7</option>
							<option value={8}>8</option>
							<option value={9}>9</option>
							<option value={10}>10</option>
						</Select>
						</FormControl>
						<br/>


						<br/>
						<FormControl>
							
							<br/>
							
						<TextField 
							floatingLabelText="House Locality nearer to Shopping Marketplace"
							style={{fontSize:20, fontWeight:'bold', width:400}}
							disabled={true}
						/>
						</FormControl>
							
						<FormControl style={{marginLeft:50, marginTop:33}}>
						<InputLabel htmlFor="agegrp-native-simple">Rating out of 10</InputLabel>
						
						<Select
							native
							value={values.rate_shopping}
							onChange={handleChange('rate_shopping')}
							style={{width:300}}
							
						>
							<option aria-label="None" value="" />
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
							<option value={5}>5</option>
							<option value={6}>6</option>
							<option value={7}>7</option>
							<option value={8}>8</option>
							<option value={9}>9</option>
							<option value={10}>10</option>
						</Select>
						</FormControl>
						<br/>

						<br/>
						<FormControl>
							
							<br/>
							
						<TextField 
							floatingLabelText="House Locality nearer to Hospitals"
							disabled={true}
							style={{fontSize:20, fontWeight:'bold', width:400}}
						/>
						</FormControl>
							
						<FormControl style={{marginLeft:50, marginTop:33}}>
						<InputLabel htmlFor="agegrp-native-simple">Rating out of 10</InputLabel>
						
						<Select
							native
							value={values.rate_hospital}
							onChange={handleChange('rate_hospital')}
							style={{width:300}}
							
						>
							<option aria-label="None" value="" />
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
							<option value={5}>5</option>
							<option value={6}>6</option>
							<option value={7}>7</option>
							<option value={8}>8</option>
							<option value={9}>9</option>
							<option value={10}>10</option>
						</Select>
						</FormControl>
						<br/>

						<br/>
						<FormControl>
							
							<br/>
							
						<TextField 
							floatingLabelText="House Locality nearer to Parks and Gardens"
							disabled={true}
							style={{fontSize:20, fontWeight:'bold', width:400}}
						/>
						</FormControl>
							
						<FormControl style={{marginLeft:50, marginTop:33}}>
						<InputLabel htmlFor="agegrp-native-simple">Rating out of 10</InputLabel>
						
						<Select
							native
							value={values.rate_parks}
							onChange={handleChange('rate_parks')}
							style={{width:300}}
							
						>
							<option aria-label="None" value="" />
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
							<option value={5}>5</option>
							<option value={6}>6</option>
							<option value={7}>7</option>
							<option value={8}>8</option>
							<option value={9}>9</option>
							<option value={10}>10</option>
						</Select>
						</FormControl>
						<br/>

						<br/>
						<FormControl>
							
							<br/>
							
						<TextField 
							floatingLabelText="House Locality nearer to Good Restaurants"
							disabled={true}
							style={{fontSize:20, fontWeight:'bold', width:400}}
						/>
						</FormControl>
							
						<FormControl style={{marginLeft:50, marginTop:33}}>
						<InputLabel htmlFor="agegrp-native-simple">Rating out of 10</InputLabel>
						
						<Select
							native
							value={values.rate_resto}
							onChange={handleChange('rate_resto')}
							style={{width:300}}
						>
							<option aria-label="None" value="" />
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
							<option value={5}>5</option>
							<option value={6}>6</option>
							<option value={7}>7</option>
							<option value={8}>8</option>
							<option value={9}>9</option>
							<option value={10}>10</option>
						</Select>
						</FormControl>
						<br/>




						<br/>
						<RaisedButton 
							label="Back"
							primary={false}
							style={styles.button}
							onClick={this.back}
						/>
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

export default FormFamilyDetails;
