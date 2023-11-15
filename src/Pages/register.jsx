import React from "react";
import {Helmet} from "react-helmet";

import FrontLayout from '../Layout/front';
import RegisterModule from '../Components/RegisterModule/RegisterModule';

function Register() {
	const getContent=()=>{

	return (
			<>
				<Helmet>
					<title>Register</title>
				</Helmet>
				<RegisterModule />
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}
export default Register;