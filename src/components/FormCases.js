import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RadioButton from 'material-ui/RadioButton';
import { RaisedButton } from 'material-ui';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


export class FormCases extends Component {
	
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
						<AppBar title="User Survey perception for residential choice location" />
						

						<center>
						Card-1
						</center>
						<Grid container>
								<Grid item xs={6} sm={6} md={6}>
									<Card>
										<CardContent>
											House locality A
											<br/>
											<Typography variant="body2" color="textSecondary" component="p">
												Rent : Rs. {0.8*values.monthly_rent}
											</Typography>
											{/* <br/> */}
											<Typography variant="body2" color="textSecondary" component="p">
												Travel Time to work by {values.job_mode} : 40mins
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												Travel Time to School/College by {values.education_mode} : 30mins
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												Travel Time to Shopping by {values.shopping_mode} : 10mins
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												Travel Time to Hospital by {values.hospital_mode} : 20mins
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												Travel Time to Park by {values.resto_mode} : 20mins
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												Travel Time to Good Restaurant by {values.resto_mode} : 20mins
											</Typography>
      							</CardContent>
									</Card>
								</Grid>
								<Grid item xs={6} sm={6} md={6}>
								<Card>
									<CardContent>
												House locality B
												<br/>
												<Typography variant="body2" color="textSecondary" component="p">
													Rent : Rs. {1.2*values.monthly_rent}
												</Typography>
												{/* <br/> */}
												<Typography variant="body2" color="textSecondary" component="p">
													Travel Time to work by {values.job_mode} : 40mins
												</Typography>
												<Typography variant="body2" color="textSecondary" component="p">
													Travel Time to School/College by {values.education_mode} : 30mins
												</Typography>
												<Typography variant="body2" color="textSecondary" component="p">
													Travel Time to Shopping by {values.shopping_mode} : 10mins
												</Typography>
												<Typography variant="body2" color="textSecondary" component="p">
													Travel Time to Hospital by {values.hospital_mode} : 20mins
												</Typography>
												<Typography variant="body2" color="textSecondary" component="p">
													Travel Time to Park by {values.resto_mode} : 20mins
												</Typography>
												<Typography variant="body2" color="textSecondary" component="p">
													Travel Time to Good Restaurant by {values.resto_mode} : 20mins
												</Typography>
											</CardContent>
									</Card>
								</Grid>
						</Grid>

						
						<FormControl style={{marginLeft:50, marginTop:33}}>
						<InputLabel htmlFor="agegrp-native-simple">My Preference</InputLabel>
						
						<Select
							native
							value={values.shopping_mode}
							onChange={handleChange('shopping_mode')}
							
						>
							<option aria-label="None" value="" />
							<option value={1}>House locality A</option>
							<option value={2}>House locality B</option>
							<option value={3}>Neither A nor B</option>
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

export default FormCases;
