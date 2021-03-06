import React from 'react';
import './style.scss';

export default class JobSelector extends React.Component {
	job = ["Select",     
      "Account Collector",
      "Accountant",
      "Accounting Clerk",
      "Actor",
      "Actuaries",
      "Administrative Assistant",
      "Administrative Services Manager",
      "Adult Literacy Teacher",
      "Advertising Manager",
      "AAdvertising Sales Agent",
      "AAerospace Engineering and Operations Technician",
      "Aerospace Engineer",
      "Agents and Business Managers of Artists, Performers, and Athlete",
      "Agricultural Engineer",
      "Agricultural Inspector",
      "Agricultural Manager",
      "Agricultural Scientist",
      "Agricultural Technician",
      "Agricultural Worker",
      "Air Conditioning and Heating Mechanics and Installer",
      "Air Traffic Controller",
      "Aircraft Cargo Handling Supervisor",
      "Aircraft Equipment Mechanics and Technician",
      "Airfield Operations Specialist",
      "Airline and Commercial Pilot",
      "Ambulance Dispatcher",
      "Ambulance Drivers and Attendants (Except Emergency Medical Technicians",
      "Amusement and Recreation Attendant",
      "Animal Care and Service Worker",
      "Animal Control Worker",
      "Announcer",
      "Anthropologist",
      "Appraisers and Assessors of Real Estat",
      "Arbitrator",
      "Archeologist",
      "Architect",
      "Architectural Manager",
      "Archivist",
      "Art Director",
      "Assembler",
      "Astronomer",
      "Athletes and Sports Competitor",
      "Athletic Trainer",
      "Atmospheric Scientist",
      "Attorney",
      "Avionics Equipment Mechanics and Technician",
      "Audio and Video Technician",
      "Audiologist",
      "Auditing Clerk",
      "Auditor",
      "Author",
      "Automated Teller Machine (ATM) Repairer",
      "Automotive and Watercraft Service Attendant",
      "Automotive Body and Glass Repairer",
      "Automotive Service Technicians and Mechanic",
      
      "Baggage Porters and Bellhop",
      "Bailiff",
      "Baker",
      "Barber",
      "Bartender",
      "Behavioral Disorder Counselor",
      "Benefits Manager",
      "Bicycle Repairer",
      "Bill Collector",
      "Biochemists and Biophysicist",
      "Biological Scientists (all other",
      "Biological Technician",
      "Biomedical Engineer",
      "Blockmason",
      "Boiler Operator",
      "Boilermaker",
      "Bookkeeping Clerk",
      "Brazer",
      "Brickmason",
      "Bridge and Lock Tender",
      "Broadcast Engineering Technician",
      "Budget Analyst",
      "Building Cleaner",
      "Building Cleaning Workers (all other",
      "Building Inspector",
      "Bus Driver",
      "Business Operations Specialists (all other",
      "Butcher",
      "Buyer",
      
      "Camera and Photographic Equipment Repairer",
      "Camera Operator",
      "Cardiovascular Technologists and Technician",
      "Career Counselor",
      "Career and Technical Education Teacher",
      "Cargo and Freight Agent",
      "Carpenter",
      "Carpet Installer",
      "Cartographer",
      "Cashier",
      "Ceiling Tile Installer",
      "Cement Mason",
      "Chauffeur",
      "Chef",
      "Chemical Engineer",
      "Chemical Plant and System Operator",
      "Chemical Technician",
      "Chemist",
      "Childcare Center Director",
      "Childcare Worker",
      "Chiropractor",
      "Choreographer",
      "Civil Engineering Technician",
      "Civil Engineer",
      "Claims Adjusters, Appraisers, Examiners, and Investigator",
      "Clerg",
      "Clerk",
      "Bookkeeping, Accounting, and Auditing Clerk",
      "Counter and Rental Clerk",
      "Financial Clerk",
      "General Office Clerk",
      "Information Clerk",
      "Mail Clerks and Mail Machine Operators (Except Postal Service",
      "Material Recording Clerk",
      "Clinical Laboratory Technologists and Technician",
      "Coaches and Scout",
      "Coating Worker",
      "Commercial Designer",
      "Commercial Diver",
      "Commodities Sales Agent",
      "Communications Equipment Operators (all other",
      "Community and Social Service Specialists (all other",
      "Community Association Manager",
      "Community Health Worker",
      "Community Service Manager",
      "Compensation, Benefits, and Job Analysis Specialist",
      "Compensation and Benefits Manager",
      "Compliance Officer",
      "Composers - Musi",
      "Computer Control Programmers and Operator",
      "Computer Hardware Engineer",
      "Computer Manager",
      "Computer Network Architect",
      "Computer Occupations (all other",
      "Computer Operator",
      "Computer Programmer",
      "Computer Repairer",
      "Computer Scientist",
      "Computer Software Engineer",
      "Computer Support Specialist",
      "Computer Systems Analyst",
      "Computer Systems Administrator",
      "Concierge",
      "Conciliator",
      "Conservation Scientist",
      "Conservation Technician",
      "Construction and Related Workers (all other",
      "Construction Equipment Operator",
      "Construction Inspector",
      "Construction Laborers and Helper",
      "Construction Manager",
      "Continuous Mining Machine Operator",
      "Control and Valve Installers and Repairer (Except Mechanical Door)",
      "Cook",
      "Correctional Officer",
      "Correctional Treatment Specialist",
      "Correspondent",
      "Cosmetologist",
      "Cost Estimator",
      "Costume Attendant",
      "Counselor (all other)",
      "Counter and Rental Clerk",
      "Couriers and Messenger",
      "Court Reporter",
      "Craft Artist",
      "Credit Analyst",
      "Credit Counselor",
      "Crossing Guard",
      "Curator",
      "Customer Service Representative",
      "Cutter and Trimmer (Hand)",
      
      "Dancer",
      "Data Entry Keyer",
      "Database Administrator",
      "Delivery Truck Drivers and Driver/Sales Worker",
      "Demonstrators and Product Promoter",
      "Dental Assistant",
      "Dental Hygienist",
      "Dental Laboratory Technician",
      "Dentist",
      "Derrick Operator (Oil and Gas)",
      "Designer (all other)",
      "Desktop Publisher",
      "Development Manager",
      "Diagnostic Medical Sonographer",
      "Diesel Service Technicians and Mechanic",
      "Dietitian",
      "Director - Musi",
      "Director - Film, Theate",
      "Dishwasher",
      "Dispatcher (Police, Fire, and Ambulance)",
      "Dispatcher (Except Police, Fire, and Ambulance)",
      "Doctor",
      "Door-to-Door Sales Workers, News and Street Vendors, and Related Worker",
      "Drafter",
      "Drywall Installer",
      
      "Earth Driller (Except Oil and Gas)",
      "Economist",
      "Editor",
      "Education Administrators - Postsecondar",
      "Education Administrators - Elementary, Middle, and High Schoo",
      "Education Administrator (all other)",
      "Education, Training, and Library Worker (all other)",
      "Electrical and Electronics Engineering Technician",
      "Electrical and Electronics Engineer",
      "Electrical and Electronics Installers and Repairer",
      "Electrician",
      "Electro-mechanical Technician",
      "Electronic Home Entertainment Equipment Installers and Repairer",
      "Elementary School Principal",
      "Elementary School Teacher",
      "Elevator Installers and Repairer",
      "Embalmer",
      "Emergency Management Director",
      "Emergency Medical Technicians (EMTs",
      "Emergency Response Dispatcher",
      "Engineering Manager",
      "Engineering Technicians, except Drafters (all other",
      "Engineers",
      "Aerospace Engineer",
      "Agricultural Engineer",
      "Biomedical Engineer",
      "Chemical Engineer",
      "Civil Engineer",
      "Computer Hardware Engineer",
      "Computer Software Engineer",
      "Electrical and Electronics Engineer",
      "Environmental Engineer",
      "Flight Engineer",
      "Geological Engineer",
      "Health and Safety Engineer",
      "Industrial Engineer",
      "Manufacturing Engineer",
      "Marine Engineer",
      "Materials Engineer",
      "Mechanical Engineer",
      "Mining Engineer",
      "Mining Safety Engineer",
      "Nuclear Engineer",
      "Petroleum Engineer",
      "Sales Engineer",
      "Stationary Engineer",
      
      "Entertainers and Performers, Sports and Related Workers (all other",
      "Entertainment Attendants and Related Workers (all other",
      "Environmental Engineering Technician",
      "Environmental Engineer",
      "Environmental Science and Protection Technician",
      "Environmental Scientists and Specialist",
      "Epidemiologist",
      "Etchers and Engraver",
      "Exercise Physiologist",
      "Explosives Workers, Ordnance Handling Experts, and Blaster",
      "Extraction Worker Helper",
      "Extraction Workers (all other",
      
      "Fabric and Apparel Patternmaker",
      "Fabric Menders (Except Garment",
      "Fabricator",
      "Family Therapist",
      "Farm Labor Contractor",
      "Farmer",
      "Fashion Designer",
      "Fence Erector",
      "Film Editor",
      "Financial Analyst",
      "Financial Clerk",
      "Financial Clerks (all other",
      "Financial Examiner",
      "Financial Manager",
      "Financial Services Sales Agent",
      "Financial Specialists (all other",
      "Fine Artist",
      "Fire Inspectors and Investigator",
      "Firefighter",
      "First-Line Supervisors of",
      "Construction Trades and Extraction Worker",
      "Correctional Officer",
      "Farming, Fishing, and Forestry Worker",
      "Fire Fighting and Prevention Worker",
      "Food Preparation and Serving Worker",
      "Helpers, Laborers, and Material Movers (Hand",
      "Housekeeping and Janitorial Worker",
      "Landscaping, Lawn Service, and Groundskeeping Worker",
      "Mechanics, Installers, and Repairer",
      "Nonretail Sales Worker",
      "Office and Administrative Support Worker",
      "Personal Service Worker",
      "Police and Detective",
      "Production and Operating Worker",
      "First-line Supervisors of Protective Service Workers (all other",
      "Retail Sales Worker",
      "Transportation and Material-Moving Machine and Vehicle Operator",
      "Fishing Worker",
      "Fitness Trainers and Instructor",
      "Flight Attendant",
      "Flight Engineer",
      "Floor Layer",
      "Floor Sanders and Finisher",
      "Floral Designer",
      "Food and Beverage Serving and Related Worker",
      "Food Preparation Worker",
      "Food Processing Worker",
      "Food Science Technician",
      "Food Scientist",
      "Food Service Manager",
      "Forensic Science Technician",
      "Forest and Conservation Technician",
      "Forest and Conservation Worker",
      "Forest Fire Inspectors and Prevention Specialist",
      "Forester",
      "Fundraiser",
      "Fundraising Manager",
      "Funeral Attendant",
      "Funeral Service Worker",
      
      "G.E.D. Teacher",
      "Gaming Change Persons and Booth Cashier",
      "Gaming Services Worker",
      "Gaming Surveillance Officer",
      "Gas Compressor and Gas Pumping Station Operator",
      "Gas Plant Operator",
      "General Maintenance and Repair Worker",
      "General Office Clerk",
      "Genetic Counselor",
      "Geographer",
      "Geological Engineer",
      "Geological Technician",
      "Geoscientist",
      "Glazier",
      "Graders and Sorters (Agricultural Products",
      "Graduate Teaching Assistant",
      "Graphic Designer",
      "Grinding and Polishing Workers (Hand",
      "Grounds Maintenance Worker",
      
      "Hairstylist",
      "Hand Laborer",
      "Hazardous Materials Removal Worker",
      "Head Cook",
      "Health and Safety Engineer",
      "Health Diagnosing and Treating Practitioners (all other",
      "Health Educators and Community Health Worker",
      "Health Information Technician",
      "Health Services Manager",
      "Health Technologists and Technicians (all other",
      "Healthcare Practitioners and Technical Workers (all other",
      "Healthcare Support Workers (all other",
      "Hearing Officer",
      "Heating and Air Conditioning Mechanics and Installer",
      "Heavy and Tractor-trailer Truck Driver",
      "Heavy Vehicle Service Technician",
      "High School Equivalency Diploma Teacher",
      "High School Principal",
      "High School Teacher",
      "Highway Maintenance Worker",
      "Historian",
      "Home Appliance Repairer",
      "Home Health Aide",
      "Hotel Manager",
      "Housekeeping Cleaner",
      "Human Resources Manager",
      "Human Resources Specialist",
      "Human Service Assistant",
      "Hunting Worker",
      "Hydrologist",
      
      "Industrial Designer",
      "Industrial Engineering Technician",
      "Industrial Engineer",
      "Industrial Machinery Mechanics and Maintenance Worker",
      "Industrial Production Manager",
      "Information Clerk",
      "Information Research Scientist",
      "Information Security Analyst",
      "Information Systems Manager",
      "Inspectors, Testers, Sorters, Samplers, and Weigher",
      "Installation, Maintenance, and Repair Worker Helper",
      "Installation, Maintenance, and Repair Workers (all other",
      "Instructional Coordinator",
      "Insulation Worker",
      "Insurance Sales Agent",
      "Insurance Underwriter",
      "Interior Designer",
      "Interpreter",
      "Iron Worker",
      
      "Janitor",
      "Jeweler",
      "Job Analysis Specialist",
      "Journalist",
      "Judge",
      
      "Kindergarten Teacher",
      
      "Labor Relations Specialist",
      "Laboratory Animal Caretaker",
      "Landscape Architect",
      "Lawyer",
      "Layout Workers (Metal and Plastic",
      "Legal Assistant",
      "Legal Support Workers (all other",
      "Legislator",
      "Librarian",
      "Library Technicians and Assistant",
      "Licensed Practical and Licensed Vocational Nurse",
      "Life Scientists (all other",
      "Life, Physical, and Social Science Technicians (all other",
      "Lifeguards and Other Recreational Protective Service Worker",
      "Line Installers and Repairer",
      "Loan Officer",
      "Locker Room, Coatroom, and Dressing Room Attendant",
      "Locksmiths and Safe Repairer",
      "Lodging Manager",
      "Logging Worker",
      "Logistician",
      
      "Machine and Equipment Setters, Operators and Tenders",
      "Adhesive Bonding Machine Operators and Tender",
      "Chemical Equipment Operators and Tender",
      "Cleaning, Washing, and Metal Pickling Equipment Operators and Tender",
      "Cooling and Freezing Equipment Operators and Tender",
      "Crushing, Grinding, and Polishing Machine Setters, Operators, and Tender",
      "Cutting and Slicing Machine Setters, Operators, and Tender",
      "Extruding and Forming Machine Setters, Operators, and Tenders (Synthetic and Glass Fibers",
      "Extruding, Forming, Pressing, and Compacting Machine Setters, Operators, and Tender",
      "Furnace, Kiln, Oven, Drier, and Kettle Operators and Tender",
      "Mixing and Blending Machine Setters, Operators, and Tender",
      "Packaging and Filling Machine Operators and Tender",
      "Paper Goods Machine Setters, Operators, and Tender",
      "Photographic Process Workers and Processing Machine Operator",
      "Separating, Filtering, Clarifying, Precipitating, and Still Machine Setters, Operators, and Tender",
      "Sewing Machine Operator",
      "Shoe Machine Operators and Tender",
      "Textile Bleaching and Dyeing Machine Operators and Tender",
      "Textile Cutting Machine Setters, Operators, and Tender",
      "Textile Knitting and Weaving Machine Setters, Operators, and Tender",
      "Textile Winding, Twisting, and Drawing Out Machine Setters, Operators, and Tender",
      "Machinist",
      "Maid",
      "Mail Clerks and Mail Machine Operators (Except Postal Service",
      "Maintenance and Repair Workers, Genera",
      "Makeup Artists (Theatrical and Performance",
      "Management Analyst",
      "Managers (all other",
      "Manicurist",
      "Manufactured Building and Mobile Home Installer",
      "Manufacturing Engineer",
      "Manufacturing Sales Representative",
      "Mapping Technician",
      "Marble Setter",
      "Marine Mechanic",
      "Marine Engineer",
      "Market Research Analyst",
      "Marketing Manager",
      "Marriage and Family Therapist",
      "Masons: Brick, Block, Stone, and Cemen",
      "Massage Therapist",
      "Material Mover",
      "Material Moving Workers (all other",
      "Material Moving Machine Operator",
      "Materials Engineer",
      "Mathematical Science Occupations (all other",
      "Materials Scientist",
      "Mathematical Technician",
      "Mathematician",
      "Meat, Poultry, and Fish Cutters and Trimmer",
      "Meat Packer",
      "Mechanical Door Repairer",
      "Mechanical Engineering Technician",
      "Mechanical Engineer",
      "Mechanics - Automotiv",
      "Mechanics - Diese",
      "Mechanics - Heating, Air Conditioning, and Refrigeratio",
      "Mechanics - Industrial Machiner",
      "Mechanics - Small Engin",
      "Media and Communication Equipment Workers (all other",
      "Media and Communication Workers (all other",
      "Mediator",
      "Medical Appliance Technician",
      "Medical Assistant",
      "Medical Billing and Codin",
      "Medical Doctor",
      "Medical Equipment Repairer",
      "Medical Laboratory Technologists and Technician",
      "Medical Records Technician",
      "Medical Scientist",
      "Medical Services Manager",
      "Medical Transcriptionist",
      "Meeting, Convention, and Event Planner",
      "Mental Health Counselor",
      "Merchandise Displayers and Window Trimmer",
      "Metal Machine Worker",
      "Metal Worker",
      "Metal Workers and Plastic Workers (all other",
      "Meteorologist",
      "Meter Readers (Utilities",
      "Microbiologist",
      "Middle School Principal",
      "Middle School Teacher",
      "Millwright",
      "Mine Cutting and Channeling Machine Operator",
      "Mine Shuttle Car Operator",
      "Mining Engineer",
      "Mining Machine Operators (all other",
      "Mining Safety Engineer",
      "Mobile Equipment Service Technician",
      "Model",
      "Model Makers (Wood",
      "Molders, Shapers, and Casters (Except Metal and Plastic",
      "Mortician",
      "Motel Manager",
      "Motion Picture Projectionist",
      "Motor Vehicle Operators (all other",
      "Motorcycle Mechanic",
      "MRI Technologist",
      "Multimedia Artists and Animator",
      "Museum Technician",
      "Music Directors and Composer",
      "Musical Instrument Repairers and Tuner",
      "Musician",
      
      "Nail Technician",
      "Natural Sciences Manager",
      "Naval Architect",
      "Network Architect",
      "Network Systems Administrator",
      "News Analyst",
      "Nuclear Engineer",
      "Nuclear Medicine Technologist",
      "Nuclear Technician",
      "Nurse",
      "Nurse Anesthetists, Nurse Midwives, and Nurse Practitioner",
      "Nursing Assistant",
      "Nutritionist",
      
      "Office and Administrative Support Workers (all other",
      "Office Clerk",
      "Office Machine Operators (Except Computer",
      "Occupational Health and Safety Specialist",
      "Occupational Health and Safety Technician",
      "Occupational Therapist",
      "Occupational Therapy Assistants and Aide",
      "Operations Research Analyst",
      "Ophthalmic Medical Technician",
      "Opticians, Dispensin",
      "Optometrist",
      "Orderlie",
      "Orthotist",
      
      "Painters (Construction and Maintenance",
      "Painting Worker",
      "Paperhanger",
      "Paralegal",
      "Paramedic",
      "Parking Enforcement Worker",
      "Parking Lot Attendant",
      "Patternmakers (Wood",
      "Payroll Clerk",
      "Pedicurist",
      "Personal Care Aide",
      "Personal Care and Service Workers (all other",
      "Personal Financial Advisor",
      "Pest Control Worker",
      "Petroleum Engineer",
      "Petroleum Pump System Operators, Refinery Operators, and Gauger",
      "Petroleum Technician",
      "Pharmacist",
      "Pharmacy Technician",
      "Phlebotomist",
      "Photogrammetrist",
      "Photographer",
      "Physical Scientists (all other",
      "Physical Therapist Assistants and Aide",
      "Physical Therapist",
      "Physician Assistant",
      "Physician",
      "Physicist",
      "Pipefitter",
      "Pipelayer",
      "Plant and System Operators (all other",
      "Plasterers and Stucco Mason",
      "Plastic Machine Worker",
      "Plumber",
      "Podiatrist",
      "Police and Detective",
      "Police Dispatcher",
      "Political Scientist",
      "Postal Service Worker",
      "Postmasters and Mail Superintendent",
      "Postsecondary Education Administrator",
      "Postsecondary Teacher",
      "Postsecondary Teachers (all other",
      "Power Plant Operators, Distributors, and Dispatcher",
      "Practical Nurses, License",
      "Precious Stone and Metal Worker",
      "Precision Instrument and Equipment Repairers (all other",
      "Prepress Technicians and Worker",
      "Preschool Director",
      "Preschool Teacher",
      "Pressers (Textile, Garment, and Related Materials",
      "Print Binding and Finishing Worker",
      "Printing Press Operator",
      "Private Detectives and Investigator",
      "Probation Officer",
      "Producers - Film, Theate",
      "Production Manager",
      "Production Worker Helper",
      "Production Workers (all other",
      "Promotions Manager",
      "Proofreaders and Copy Marker",
      "Property Manager",
      "Prosthetist",
      "Protective Service Workers (all other",
      "Psychiatric Technicians and Aide",
      "Psychologist",
      "Public Relations Manager",
      "Public Relations Specialist",
      "Pump Operator",
      "Purchasing Agent",
      "Purchasing Manager",
      
      "Quality Control Inspector",
      "Quarry Rock Splitter",
      
      "Radiation Therapist",
      "Radio Operator",
      "Radio, Cellular, and Tower Equipment Installers and Repairer",
      "Radiologic Technologist",
      "Rail Transportation Workers (all other",
      "Rail-Track Laying and Maintenance Equipment Operator",
      "Railroad Occupation",
      "Rancher",
      "Real Estate Brokers and Sales Agent",
      "Real Estate Manager",
      "Receptionist",
      "Recreation Worker",
      "Recreational Therapist",
      "Recreational Vehicle Service Technician",
      "Referees, Umpires, and Other Sports Official",
      "Refractory Materials Repairers (Except Brickmasons",
      "Refrigeration Mechanics and Installer",
      "Registered Nurse",
      "Rehabilitation Counselor",
      "Reinforcing Iron and Rebar Worker",
      "Religious Activities and Education Director",
      "Religious Workers (all other",
      "Repair and Maintenance Workers, Genera",
      "Reporter",
      "Residential Advisor",
      "Respiratory Therapist",
      "Retail Sales Worker",
      "Rigger",
      "Roof Bolters (Mining",
      "Roofer",
      "Rotary Drill Operators (Oil and Gas",
      "Roustabouts (Oil and Gas",
      
      "Sales and Related Workers (all other",
      "Sales Engineer",
      "Sales Manager",
      "Sales Representatives, Services (all other",
      "School Counselor",
      "School Principals - Elementary, Middle, and Hig",
      "Science Technician",
      "Secretarie",
      "Securities Sales Agent",
      "Security and Fire Alarm Systems Installer",
      "Security Guard",
      "Segmental Paver",
      "Semi Truck Driver",
      "Septic Tank Servicers and Sewer Pipe Cleaner",
      "Service Unit Operators (Oil, Gas, and Mining",
      "Set and Exhibit Designer",
      "Sewers (Hand",
      "Shampooer",
      "Sheet Metal Worker",
      "Shipping, Receiving, and Traffic Clerk",
      "Shoe and Leather Workers and Repairer",
      "Signal and Track Switch Repairer",
      "Singer",
      "Ski Patrol and Other Recreational Protective Service Worker",
      "Skincare Specialist",
      "Slaughterer",
      "Small Engine Mechanic",
      "Social Science Research Assistant",
      "Social Scientists and Related Workers (all other",
      "Social Service Assistant",
      "Social Service Manager",
      "Social Worker",
      "Sociologist",
      "Software Developer",
      "Solar Photovoltaic Installer",
      "Solderer",
      "Sound Engineering Technician",
      "Special Education Teacher",
      "Special Education Teachers (all other",
      "Speech-Language Pathologist",
      "Stationary Engineer",
      "Statistical Assistant",
      "Statistician",
      "Steamfitter",
      "Steel Worker",
      "Stonemason",
      "Substance Abuse Counselor",
      "Subway and Streetcar Operator",
      "Surgeon",
      "Surgical Technologist",
      "Survey Researcher",
      "Surveying Technician",
      "Surveyor",
      "Switchboard Operators (Including Answering Service",
      "Systems Analyst",
      
      "Tailors, Dressmakers, and Custom Sewer",
      "Tank Car, Truck, and Ship Loader",
      "Taper",
      "Tax Examiners and Collectors, and Revenue Agent",
      "Tax Preparer",
      "Taxi Driver",
      "Teacher Assistant",
      "Teachers - Adult Literacy and High School Equivalency Diplom",
      "Teachers - Career and Technical Education Teacher",
      "Teachers - High Schoo",
      "Teachers - Kindergarten and Elementary Schoo",
      "Teachers - Middle Schoo",
      "Teachers - Postsecondar",
      "Teachers - Preschoo",
      "Teachers - Special Educatio",
      "Teachers and Instructors (all other",
      "Technical Writer",
      "Telecommunications Equipment Installers and Repairers (Except Line Installers",
      "Telemarketer",
      "Telephone Operator",
      "Television, Video, and Motion Picture Camera Operators and Editor",
      "Teller",
      "Terrazzo Worker",
      "Textile Career",
      "Textile, Apparel, and Furnishings Workers (all other",
      "Therapists (all other",
      "Tile Setter",
      "Timekeeping Clerk",
      "Tire Builder",
      "Tire Repairers and Changer",
      "Tobacco Processing Worker",
      "Tool and Die Maker",
      "Tool Grinders, Filers, and Sharpener",
      "Top Executive",
      "Tour Guides and Escort",
      "Traffic Technician",
      "Training Manager",
      "Training and Development Specialist",
      "Translator",
      "Transportation Attendant",
      "Transportation Inspector",
      "Transportation Security Screener",
      "Transportation Workers (all other",
      "Transportation, Storage, and Distribution Manager",
      "Travel Agent",
      "Travel Clerk",
      "Travel Guide",
      "Truck Drivers - Delivery and Sales Worker",
      "Truck Drivers - Heavy and Tractor-traile",
      
      "Ultrasound Technicia",
      "Umpires, Referees, and Other Sports Official",
      "Upholsterer",
      "Urban and Regional Planner",
      "Ushers, Lobby Attendants, and Ticket Taker",
      
      "Vascular Technologist",
      "Vending, Coin, and Amusement Machine Servicers and Repairer",
      "Veterinarian",
      "Veterinary Assistant",
      "Veterinary Technologists and Technician",
      "Video Editor",
      "Vocational Nurses, License",
      
      "Waiters and Waitresse",
      "Watch Repairer",
      "Water and Wastewater Treatment Plant and System Operator",
      "Water Transportation Occupation",
      "Web Developer",
      "Weighers, Measurers, Checkers, and Samplers, Recordkeepin",
      "Welders and Cutter",
      "Wellhead Pumper",
      "Wholesale Sales Representative",
      "Wildlife Biologist",
      "Wind Turbine Technician",
      "Word Processors and Typist",
      "Woodworker",
      "Woodworkers (all other)",
      "Writer",
      
      "X-Ray Technologist",
      
      "Zoologist"];

	render() {
		return (
			<select name={this.props.name} className="JobSelector" required={this.props.required} onChange={this.props.onChange}>
				{
					this.job.map((x) => {
						return (
							<option value={x}>
								{x}
							</option>
						)
					})
				}
			</select>
		);
	}
}