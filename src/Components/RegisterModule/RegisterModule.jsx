import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './RegisterModule.css';

const RegisterModule = () => {
	return(
		<>
			<div className="register-module">
				<Container>
					<Row>
						<Col sm={12}>
							<div className="form-holder">
								<h3>Sign Up</h3>
								<Form>
									<Form.Group className="mb-3" controlId="firstName">
										<Form.Label>First Name</Form.Label>
										<Form.Control type="text" placeholder="First Name" />
									</Form.Group>
									<Form.Group className="mb-3" controlId="lastName">
										<Form.Label>Last Name</Form.Label>
										<Form.Control type="text" placeholder="Last Name" />
									</Form.Group>
									<Form.Group className="mb-3" controlId="password">
										<Form.Label>Password</Form.Label>
										<Form.Control type="password" placeholder="Password" />
									</Form.Group>
									<Form.Group className="mb-3" controlId="confirm-password">
										<Form.Label>Confirm Password</Form.Label>
										<Form.Control type="password" placeholder="Confirm Password" />
									</Form.Group>
									<Form.Group className="mb-3" controlId="phone">
										<Form.Label>Phone No</Form.Label>
										<Form.Control type="tel" placeholder="Phone No" />
									</Form.Group>
									<Form.Group className="mb-3" controlId="address">
										<Form.Label>Address</Form.Label>
										<Form.Control type="text" placeholder="Address" />
									</Form.Group>
									<Button variant="primary" type="submit">
										Sign Up
									</Button>
									<p><Link to="/login">Already Have an Account? Click Here to Log In</Link></p>
								</Form>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default RegisterModule;