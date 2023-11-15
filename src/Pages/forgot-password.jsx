import React from "react";
import {Helmet} from "react-helmet";

import FrontLayout from '../Layout/front';
import ForgotPasswordModule from '../Components/ForgotPasswordModule/ForgotPasswordModule';

function ForgotPassword() {
	const getContent=()=>{

	return (
			<>
				<Helmet>
					<title>Forgot Password</title>
				</Helmet>
				<ForgotPasswordModule />
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}
export default ForgotPassword;