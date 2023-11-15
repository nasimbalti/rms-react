import React from "react";
import {Helmet} from "react-helmet";

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import ContactServiceModule from '../Components/ContactServiceModule/ContactServiceModule';

function ContactService() {
	const getContent=()=>{

	return (
			<>
				<Helmet>
					<title>Services Contact Us</title>
				</Helmet>
				<BreadCrumbs title="Services Contact Us" />
				<ContactServiceModule />
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}
export default ContactService;