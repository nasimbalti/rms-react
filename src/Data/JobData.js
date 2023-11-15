// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faUserGraduate, faChartColumn, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const jobData = [
	{
		title: 'AV Apprentice Technician',
		description: 'An AV Tech Apprentice is someone willing to learn the AV trade.  They need to come prepared to learn and listen from experienced technicians in the field and industry-standards certification programs. Able to carefully follow instructions and receive hands-on training.',
		info: [],
		duties: [
			{ icon: faCircleArrowRight, text: 'Cable pulls and termination' },
			{ icon: faCircleArrowRight, text: 'Troubleshooting equipment on site' },
			{ icon: faCircleArrowRight, text: 'Installing new equipment' },
			{ icon: faCircleArrowRight, text: 'Assisting the Lead Technician with tasks as needed' }
		],
		requirements: [
			{ icon: faCircleArrowRight, text: 'Basic AV Knowledge' },
			{ icon: faCircleArrowRight, text: 'Ability to use tools, such as drills and crimpers' },
			{ icon: faCircleArrowRight, text: 'Basic Structured Wiring and Low Voltage Knowledge' },
			{ icon: faCircleArrowRight, text: 'Problem-solving skills are a must' },
			{ icon: faCircleArrowRight, text: 'Willingness to learn' },
			{ icon: faCircleArrowRight, text: 'Ability to listen to and follow directions' },
			{ icon: faCircleArrowRight, text: 'Reading Comprehension' },
			{ icon: faCircleArrowRight, text: 'Ability to speak and write clearly' },
			{ icon: faCircleArrowRight, text: 'Positive Attitude' },
			{ icon: faCircleArrowRight, text: 'Ability to take initiative' },
			{ icon: faCircleArrowRight, text: 'Professionalism' },
			{ icon: faCircleArrowRight, text: 'Willingness to be a part of a training program' }
		],
		working: [
			'While performing duties, the employee will work primarily in the field. The employee may be required to work outdoors in all types of weather and may be exposed to dust, fluctuating temperatures, and periodic high noise levels. Additional exposures include but are not limited to confined spaces such as attics and crawlspaces.'
		],
		physical: [
			'While performing the duties of this job, the employee is regularly required to use hands and fingers to handle, feel, or operate objects, tools or controls, and reach with hands and arms. The employee is frequently required to stand, talk, and hear. Able to lift 75Lbs and safely handle ladder. Work from varied lifts, scissor lifts, and ladders of all sizes.'
		]
	},
	{
		title: 'Lead Technician',
		description: 'The Lead Technicians job entails building the infrastructure of low-voltage systems and all telecom networks: LAN, WAN, CCTV, and/or CATV. Must be able to install, troubleshoot, and maintain audio, video, data cables, and copper and fiber cabling infrastructure.',
		info: [],
		duties: [
			{text: 'The job duties and responsibilities of the Lead Technician include the following:'},
			{ icon: faCircleArrowRight, text: 'Structured Wiring Experience' },
			{ icon: faCircleArrowRight, text: 'Able to perform multi-story wallfish, firebreaks drilling, and core drilling' },
			{ icon: faCircleArrowRight, text: 'Identify best pathways when required, as well as install/use Panduit/conduit, indoor/outdoor' },
			{ icon: faCircleArrowRight, text: 'Run, terminate, and test coaxial cable, speaker wires, ethernet drops, and fiber optics, from/to multiple rooms avoiding damage to walls' },
			{ icon: faCircleArrowRight, text: 'Pre and post-installation required' },
			{ icon: faCircleArrowRight, text: 'Know and understand how to read building plans' },
			{ icon: faCircleArrowRight, text: 'Must be able to patch/paint drywall and other structural repairs if needed' },
			{ icon: faCircleArrowRight, text: 'Must have the ability to run in-ground wiring' },
			{ icon: faCircleArrowRight, text: 'Must have strong Wire Management skills (inventory, labels, rack cleaning)' },
			{ icon: faCircleArrowRight, text: 'Ability to set up equipment into racks and in-wall enclosures' },
			{ icon: faCircleArrowRight, text: 'Installing smart devices such as climate control, keypad and door locks, lighting, surveillance, and audio/video equipment' },
			{ icon: faCircleArrowRight, text: 'Programming knowledge of Control4' }
		],
		requirements: [
			{ icon: faCircleArrowRight, text: '3+ years of audiovisual or industry-related experience' },
			{ icon: faCircleArrowRight, text: '3+ years of Cat6 and Fiber Optics installation' },
			{ icon: faCircleArrowRight, text: 'Basic networking skills and knowledge: TCP/IP concepts, and the basic setup of routers, NVRs, IP cams, and access points' },
			{ icon: faCircleArrowRight, text: 'Basic knowledge of electrical runs and related standards' },
			{ icon: faCircleArrowRight, text: 'Ability to work off a ladder or staging' },
			{ icon: faCircleArrowRight, text: 'Must be able to lift heavy objects (up to 75lbs.)' },
			{ icon: faCircleArrowRight, text: 'Valid Drivers license' },
			{ icon: faCircleArrowRight, text: 'Ability to travel or work overtime, as necessary' },
			{ icon: faCircleArrowRight, text: 'Experienced use of basic power/hand tools' },
			{ icon: faCircleArrowRight, text: 'Must possess excellent organizational and time management skills' },
			{ icon: faCircleArrowRight, text: 'High school diploma or equivalent, some college preferred' },
		],
		working: [
			'While performing duties, the employee will work primarily in the field. The employee may be required to work outdoors in all types of weather and may be exposed to dust, fluctuating temperatures, and periodic high noise levels. Additional exposures include but are not limited to confined spaces such as attics and crawlspaces.'
		],
		physical: [
			'While performing the duties of this job, the employee is regularly required to use hands and fingers to handle, feel, or operate objects, tools, or controls, and reach with hands and arms. The employee is frequently required to stand, talk, and hear. Able to lift 75Lbs and handle a ladder in a safe manner. Work from varied lifts, scissor lifts, and ladders of all sizes.'
		]
	},
	{
		title: 'Project Manager',
		description: 'RMS Installs is looking for an Audio Visual Project Manager! The Audiovisual PM manages to ensure that employees provide technical support to customers through phone or on-site support, performs preventive and corrective maintenance on audiovisual systems and provides technical support to projects as needed. The preferred candidate will have excellent technical and customer service/communication skills. The Field Service Technician must possess the ability to service and troubleshoot complex audiovisual systems, including displays, projection systems, advanced audio systems, video switching and scaling systems, and video/audio control systems. Must have experience with audio-visual systems and components, including Control4, OverC, Araknis, Ubiquiti, and Snap One Products.',
		info: [
			{ icon: faClock, text: 'Day shift 8:00-5:00pm Mon-Fri' },
			{ icon: faLocationDot, text: 'On the road' }
		],
		duties: [
			{icon: faCircleArrowRight, text: 'Perform basic to advanced routine maintenance and troubleshooting on all AV systems including but not limited to, projection/display systems, audio systems, control systems, and software/firmware updates, as needed.'},
			{icon: faCircleArrowRight, text: 'Perform installation tasks including but not limited to, pulling cable, installing connectors, mounting projectors/displays and installing ceiling/wall mounts.'},
			{icon: faCircleArrowRight, text: 'Loading, testing, and troubleshooting of Control System software code. (Control4 programming knowledge is required)'},
			{icon: faCircleArrowRight, text: 'Provide direct assistance and training to end users in the operation of AV systems'},
			{icon: faCircleArrowRight, text: 'Provide Show Tech Support of planned events, both onsite and off, as needed'},
			{icon: faCircleArrowRight, text: 'Coordinate any further Clarity and/or manufacture-provided field support as required'},
			{icon: faCircleArrowRight, text: 'Track all maintenance activity start to finish with proper documentation'},
			{icon: faCircleArrowRight, text: 'Perform administrative tasks such as completing service tickets with detailed explanations and resolutions.'},
		],
		skills: [
			{icon: faCircleArrowRight, text: 'Strong organizational skills and attention to detail'},
			{icon: faCircleArrowRight, text: 'Advanced Knowledge of signal flow for audio, video, and control systems'},
			{icon: faCircleArrowRight, text: 'Ability to interpret AV line diagrams and typical architectural drawings'},
			{icon: faCircleArrowRight, text: 'Strong problem solving and critical thinking skills'},
			{icon: faCircleArrowRight, text: 'Advanced Audio DSP programming and commissioning skills'},
			{icon: faCircleArrowRight, text: 'Advanced setup, configuration, and commissioning of Video Conferencing Codec and Cloud Based SoftCodec Systems'},
			{icon: faCircleArrowRight, text: 'Effectively communicate with customers and co-workers in a Professional and Courteous manner'},
			{icon: faCircleArrowRight, text: 'Strong computer skills including Microsoft Office (Word, Excel, PowerPoint, Outlook, SharePoint, Skype for Business/Teams, etc.)'},
		],
		education: [
			{icon: faCircleArrowRight, text: 'Minimum of a High School Diploma or equivalent preferred'},
			{icon: faCircleArrowRight, text: 'Minimum of 3 years of experience in AV Systems Installation'},
			{icon: faCircleArrowRight, text: 'Audio DSP (Biamp, QSC, BSS, Clear One) Certifications preferred'},
			{icon: faCircleArrowRight, text: 'Control Systems (Control4) Certification required'},
			{icon: faCircleArrowRight, text: 'PCNA Certification preferred'},
			{icon: faCircleArrowRight, text: 'Travel to various job sites required'},
			{icon: faCircleArrowRight, text: 'audiovisual: 1 year (Required)'},
			{icon: faCircleArrowRight, text: 'Project management: 1 year (Preferred)'},
			{icon: faCircleArrowRight, text: 'Supervising: 1 year (Preferred)'},
			{icon: faCircleArrowRight, text: 'Must be dependable and punctual'},
			{icon: faCircleArrowRight, text: 'Must have own hand tools'},
			{icon: faCircleArrowRight, text: 'Ability to pass a background check'},
			{icon: faCircleArrowRight, text: 'Must have a valid Drivers License'},
			{icon: faCircleArrowRight, text: 'Must have dependable transportation'}
		],
		jobType: [
			'Pay: $40,000.00 - $55,000.00 per year'
		],
		schedule: [
			'Day shift 8:00-5:00pm Mon-Fri'
		],
		location: [
			'On the road'
		]
	},
	{
		title: 'Structured Cabling Technician',
		description: 'A Structure Cabling Technicians job entails building the infrastructure of all telecom networks, such as Local Area Networks (LANs), Wide Area Networks (WANs), and Cable TV (CATV). Must be able to install, troubleshoot, and maintain video and data cables and copper and fiber cabling infrastructure.',
		info: [
			{ icon: faClock, text: 'Full Time' },
			{ icon: faLocationDot, text: 'WoodStock' }
		],
		duties: [
			{icon: faCircleArrowRight, text: 'Install and splice copper and fiber optic cables, such as CAT5, SE, CAT6, Coax, low voltage cables, and fiber to include terminations..'},
			{icon: faCircleArrowRight, text: 'Able to perform multi story wallfish, firebreak drilling, and core drilling.'},
			{icon: faCircleArrowRight, text: 'Able to identify best pathways when required and installation of Panduit/conduit.'},
			{icon: faCircleArrowRight, text: 'Mount telecom equipment while adhering to best practices, industry standards and manufacturer requirements.'},
			{icon: faCircleArrowRight, text: 'Aid in arranging routers, hubs, install support structures, including racks, ladders, j-hooks, and switches to best practices, industry standards, and manufacturer requirements.'},
			{icon: faCircleArrowRight, text: 'Install access control systems and surveillance cameras.'},
			{icon: faCircleArrowRight, text: 'Maintain all documents related to cabling infrastructure.'},
			{icon: faCircleArrowRight, text: 'Perform testing and troubleshooting of installations as needed.'},
			{icon: faCircleArrowRight, text: 'Manage and maintain exact inventory for parts, tools, and supplies.'},
			{icon: faCircleArrowRight, text: 'Work to complete necessary tasks as assigned.'}
		],
		qualification: [
			{icon: faCircleArrowRight, text: 'Must have a high school diploma or equivalent.'},
			{icon: faCircleArrowRight, text: 'Must have at least two (2) years of full-time experience as an installer or service technician'},
			{icon: faCircleArrowRight, text: 'Required to have had experience in the commercial and residential service and installation of security, CCTV, and access control systems'},
			{icon: faCircleArrowRight, text: 'Certifications and training in access control, video and intrusion systems, preferred.'},
			{icon: faCircleArrowRight, text: 'Must have basic computer and math skills'},
			{icon: faCircleArrowRight, text: 'Strong verbal and written communication ability'},
			{icon: faCircleArrowRight, text: 'Ability to work independently or as a team player.'},
			{icon: faCircleArrowRight, text: 'Valid drivers license needed.'},
			{icon: faCircleArrowRight, text: 'Requires completion of background and MVR checks.'}
		],
		working: [
			'While performing duties, the employee will work primarily in the field. The employee may be required to work outdoors in all types of weather and may be exposed to dust, fluctuating temperatures, and periodic high noise levels. Additional exposures include but not limited to include confine spaces such as attics and crawlspaces.'
		],
		physical: [
			'While performing the duties of this job, the employee is regularly required to use hands and fingers to handle, feel, or operate objects, tools or controls, and reach with hands and arms. The employee is frequently required to stand, talk, and hear. Able to lift 75Lbs and handle ladder in a safe manner. Work from varied lifts, scissor lifts, and ladders of all sizes.'
		]
	},
	{
		title: 'Control4 Automation Programmer',
		description: 'RMS Installs designs and installs home and business A/V, lighting, shading and control systems. We are looking for an experienced Control4 Automation Programmer that will be responsible for the deployment of advanced control systems in residential and commercial projects. Must have working knowledge and principle understanding of both wired, wireless, and managed wireless networks. The Control4 Automation Programmer is often the last person to work on a clients system and will be required to verify complete system functionality. The Control4 Automation Programmer will also be responsible for the system hand-off to the client, which includes system tutorial.',
		info: [
			{ icon: faClock, text: 'Full Time' },
			{ icon: faLocationDot, text: 'WoodStock' },
			{ icon: faUserGraduate, text: 'Control4 certification - 2+ years within the Audio Video Custom integration industry' },
			{ icon: faChartColumn, text: '1 year' }
		],
		duties: [
			{ icon: faCircleArrowRight, text: 'Execute the installation, configuration, and programming of advanced audio/video/control systems.' },
			{ icon: faCircleArrowRight, text: 'Deploy a network solution including installation, setup, and configuration.' },
			{ icon: faCircleArrowRight, text: 'Maintain and utilize working knowledge of control and automation wiring and protocols.' },
			{ icon: faCircleArrowRight, text: 'Create cable connections and use tools associated with the programming and installation of a system.' },
			{ icon: faCircleArrowRight, text: 'Integrate all the clients sub systems into one easy to use control solution.' },
			{ icon: faCircleArrowRight, text: 'Troubleshoot complex systems from an installation and programing perspective.' },
			{ icon: faCircleArrowRight, text: 'Assist with basic installation of equipment as necessary.' },
		],
		qualification: [
			{ text: 'We find the most successful candidates possess a multitude of interests and hobbies in todays newest technology. Qualified candidates will have a fun, professional attitude and be as comfortable speaking about the newest technology as they are speaking with clients.' },
			{ icon: faCircleArrowRight, text: 'High School diploma or equivalent' },
			{ icon: faCircleArrowRight, text: '2+ years programming' },
			{ icon: faCircleArrowRight, text: 'Valid state drivers license' },
			{ icon: faCircleArrowRight, text: 'Must be dependable, professional and motivated to grow with the industry' }
		],
		preQualification: [
			{ icon: faCircleArrowRight, text: '2+ years within the Audio Video Custom integration industry' },
			{ icon: faCircleArrowRight, text: 'Control4 certification' }
		],
		experience: [
			{ icon: faCircleArrowRight, text: ' Audio Visual Installation: 1 year (Required)' },
			{ icon: faCircleArrowRight, text: 'programming: 2 years (Required)' }
		],
		license: [
			{ icon: faCircleArrowRight, text: 'Drivers License (Required)' },
			{ icon: faCircleArrowRight, text: 'Control4 certification' }
		]
	},
	{
		title: 'Office Administrator',
		salary: '$15-$20 per hr. Non-salary position',
		description: 'OFFICE ADMIN: Audio and Visual (AV) Company seeks an Office Administrator. Position is full time. General Duties include: provide overall administrative secretarial and data/file management support, including serving as receptionist, answering phones, overseeing all office related tasks and projects, plan and execute company related events, attend outside meetings to promote and market for the company. Office managers oversee and coordinate all the offices administrative activities, including organizing meetings and managing databases and communicate effectively with staff, suppliers and clients.',
		info: [
			{ icon: faClock, text: 'Full Time' },
			{ icon: faLocationDot, text: 'Woodstock, GA' }
		],
		opportunity: [
			'Equal Opportunity Employer: We embrace equal employment opportunity.'
		],
		infoDetail: [
			'PayScale is committed to a policy of equal employment opportunity for all applicants and employees. It is our policy that employees will not be subjected to unlawful discrimination on the basis of race, color, religion, sex, age, national origin or ancestry, physical or mental disability, veteran or military status, marital status, sexual orientation, political ideology and any other basis protected by federal, state, or local laws. This policy applies to all terms and conditions of employment, including but not limited to: recruitment, hiring, transfers, promotions, training, discipline, termination, compensation and benefits, performance appraisals, education, and social and recreational programs.'
		],
		infoText: [
			'This Pay Range is provided by RMS Installs. Your actual pay will be based on your skills and experience — talk with your recruiter to learn more'
		]
	}
];

export default jobData;