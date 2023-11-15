import React from "react";
import {Helmet} from "react-helmet";

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import Jobs from '../Components/Jobs/Jobs';

function Careers() {
	const getContent=()=>{

	return (
			<>
				<Helmet>
					<title>Careers</title>
				</Helmet>
				<BreadCrumbs title="Careers" />
				<Jobs />
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}
export default Careers;