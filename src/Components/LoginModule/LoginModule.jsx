import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './LoginModule.css';

const LoginModule = () => {
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
								<h5>Welcome Back</h5>
								<Form>
									<Form.Group className="mb-3" controlId="email">
										<Form.Label>Email Address</Form.Label>
										<Form.Control type="email" placeholder="User Name" />
									</Form.Group>
									<Form.Group className="mb-3" controlId="password">
										<Form.Label>Password</Form.Label>
										<Form.Control type="password" placeholder="Password" />
									</Form.Group>
									<Button variant="primary" type="submit">
										Sign In
									</Button>
									<p>
										<Link to="/register">Don't have an Account? Create Now.</Link>
										<Link to="/forgot-password">Forgot Password?</Link>
									</p>
								</Form>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
export default LoginModule;