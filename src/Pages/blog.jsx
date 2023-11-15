import React from "react";
import {Helmet} from "react-helmet";

import FrontLayout from '../Layout/front';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import BlogListing from '../Components/BlogListing/BlogListing';

function Careers() {
	const getContent=()=>{

	return (
			<>
				<Helmet>
					<title>Blog</title>
				</Helmet>
				<BreadCrumbs title="Blog" />
				<BlogListing />
			</>
		);
	}
	let view = getContent();
	return <FrontLayout view = {view} />
}
export default Careers;