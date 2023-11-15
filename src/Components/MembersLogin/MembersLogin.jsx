import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './MembersLogin.css';

const MembersLogin = () => {
	return(
		<>
			<div className="members-login">
				<Container>
					<Row>
						<Col sm={12}>
							<div className="login-area">
								<h3>Members Login</h3>
								<Form>
									<Form.Group className="mb-3" controlId="email">
										<Form.Label>Email address</Form.Label>
										<Form.Control type="email" placeholder="Email" />
									</Form.Group>
									<Form.Group className="mb-3" controlId="password">
										<Form.Label>Password</Form.Label>
										<Form.Control type="password" placeholder="Password" />
									</Form.Group>
									<Button className="btn-login" type="submit">Login Now</Button>
									<p>
										<span><Link to="/register">Don't have an Account? Create Now</Link></span>
										<span><Link to="/forgot-password">Forgot Password?</Link></span>
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
export default MembersLogin;