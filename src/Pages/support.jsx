import React from "react";
import {Helmet} from "react-helmet";

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import SupportDetails from '../Components/SupportDetails/SupportDetails';
import MembersLogin from '../Components/MembersLogin/MembersLogin';
import FAQ from '../Components/FAQ/FAQ';

function Support() {
	const getContent=()=>{

	return (
			<>
				<Helmet>
					<title>Support</title>
				</Helmet>
				<BreadCrumbs title="Support" />
				<SupportDetails />
				<MembersLogin />
				<FAQ />
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}
export default Support;