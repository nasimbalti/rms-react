import React from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

const FrontLayout = (props) => {
	const headerClass = props.isHomePage ? "home" : "";
	return(
		<>
			<Header className={headerClass} />
			<main id="main">
				{props.view}
			</main>
			<Footer />
		</>
	)
}

export default FrontLayout;