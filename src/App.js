import React, { lazy, Suspense } from "react";
import {Routes, Route} from "react-router-dom"

import './App.css';
import PreLoader from './Components/PreLoader/PreLoader';

const Home = lazy(() => import("./Pages/Home"));
const Worship = lazy(() => import('./Pages/worship'));
const HealthCare = lazy(() => import('./Pages/healthcare'));
const Retail = lazy(() => import('./Pages/retail'));
const Corporate = lazy(() => import('./Pages/corporate'));
const Hospitality = lazy(() => import('./Pages/hospitality'));
const Education = lazy(() => import('./Pages/education'));
const Government = lazy(() => import('./Pages/government'));
const Portfolio = lazy(() => import('./Pages/portfolio'));
const PortfolioHomeTheaterAcworth = lazy(() => import('./Pages/portfolio-home-theater-acworth'));
const PortfolioHomeTheaterInstallation = lazy(() => import('./Pages/portfolio-home-theater-installation'));
const Careers = lazy(() => import('./Pages/careers'));
const JobDetails = lazy(() => import('./Components/JobDetails/JobDetails'));
const Blog = lazy(() => import('./Pages/blog'));
const BlogListing = lazy(() => import('./Components/BlogListing/BlogListing'));
const BlogDetails = lazy(() => import('./Components/BlogDetails/BlogDetails'));
const WeLead = lazy(() => import('./Pages/we-lead'));
const Support = lazy(() => import('./Pages/support'));
const Register = lazy(() => import('./Pages/register'));
const Login = lazy(() => import('./Pages/login'));
const ForgotPassword = lazy(() => import('./Pages/forgot-password'));
const ContactService = lazy(() => import('./Pages/contact-service-user'));
const WirelessNetworkPage = lazy(() => import('./Pages/wireless-network-ethernet-installation'));
const HomeAutomation = lazy(() => import('./Pages/home-automation-services'));
const HomeTheater = lazy(() => import('./Pages/home-theater-installation'));
const TVInstallationServices = lazy(() => import('./Pages/tv-installation-services'));
const AudioInstallationServices = lazy(() => import('./Pages/audio-installation-services'));
const MultiRoomAudioInstallations = lazy(() => import('./Pages/multi-room-audio-installations'));
const VideoDistributionInstallations = lazy(() => import('./Pages/video-distribution-installation'));
const OutDoorEntertainmentInstallations = lazy(() => import('./Pages/outdoor-entertainment-installation'));
const SurveillanceInstallation = lazy(() => import('./Pages/surveillance-installation'));

function App() {
	return (
		<>
			<Suspense >
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/wireless-network-ethernet-installation" element={<WirelessNetworkPage />} />
					<Route path="/worship" element={<Worship />} />
					<Route path="/healthcare" element={<HealthCare />} />
					<Route path="/retail" element={<Retail />} />
					<Route path="/corporate" element={<Corporate />} />
					<Route path="/hospitality" element={<Hospitality />} />
					<Route path="/education" element={<Education />} />
					<Route path="/government" element={<Government />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/portfolio/portfolio-home-theater-acworth" element={<PortfolioHomeTheaterAcworth />} />
					<Route path="/portfolio/portfolio-home-theater-installation" element={<PortfolioHomeTheaterInstallation />} />
					<Route path="/careers" element={<Careers />} />
					<Route path="/careers/:title" element={<JobDetails />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/blog" element={<BlogListing />} />
					<Route path="/blog/:title" element={<BlogDetails />} />
					<Route path="/we-lead" element={<WeLead />} />
					<Route path="/support" element={<Support />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/contact-service-user" element={<ContactService />} />
					<Route path="/home-automation-services" element={<HomeAutomation />} />
					<Route path="/home-theater-installation" element={<HomeTheater />} />
					<Route path="/tv-installation-services" element={<TVInstallationServices />} />
					<Route path="/audio-installation-services" element={<AudioInstallationServices />} />
					<Route path="/multi-room-audio-installations" element={<MultiRoomAudioInstallations />} />
					<Route path="/video-distribution-installation" element={<VideoDistributionInstallations />} />
					<Route path="/outdoor-entertainment-installation" element={<OutDoorEntertainmentInstallations />} />
					<Route path="/surveillance-installation" element={<SurveillanceInstallation />} />
				</Routes>
			</Suspense>
		</>
	);
}
export default App;