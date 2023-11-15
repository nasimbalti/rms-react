import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './ForgotPasswordModule.css';

const ForgotPasswordModule = () => {
	return(
		<>
			<div className="login-module">
				<Container>
					<Row>
						<Col sm={12}>
							<div className="form-holder">
								<div className="logo-holder">
									<img src={require('../../img/rms--orignal-logo.png')} alt="RMS Logo" className="img-fluid" loading="lazy" />
								</div>
								<h5>Reset Password</h5>
								<Form>
									<Form.Group className="mb-3" controlId="email">
										<Form.Label>Email Address</Form.Label>
										<Form.Control type="email" placeholder="" />
									</Form.Group>
									<Button variant="primary" type="submit">
										Send Password Reset Link
									</Button>
								</Form>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default ForgotPasswordModule;