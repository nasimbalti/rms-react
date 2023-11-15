import React from "react";
import {Helmet} from "react-helmet";

import FrontLayout from '../Layout/front';
import LoginModule from '../Components/LoginModule/LoginModule';

function login() {
	const getContent=()=>{

	return (
			<>
				<Helmet>
					<title>Login</title>
				</Helmet>
				<LoginModule />
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}
export default login;