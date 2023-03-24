/** @format */

// import React, { useState } from "react";
import "./registeredcomp.css";
import { CompanyTableSelection } from "../../components/registeredcomany/registeredCompanycomp";
const RegisteredCompanies = () => {

	// const [isactive, setIsactive] = useState(true)
	// setIsactive(prevactive => !prevactive)
	return (
		<div className="registeredcomp">
			<div className="registeredheader">
				<h1>Vetly Team Members</h1>
				<button>Verify Member</button>
			</div>
			<input
				type="text"
				placeholder="Search by name or email"
				className="registeredinput"
			/>

			<div className="registeredcomptable">
				<CompanyTableSelection
					data={[
						{
							id: 0,
							name: "Fatima Aminu",
							avatar:
								"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
							email: "Teemah@vetly.com",
							date: "20th February, 2023",
							status: true,
						},
						{
							id: 1,
							name: "Fatima Aminu",
							avatar:
								"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
							email: "Teemah@vetly.com",
							date: "20th February, 2023",
							status: false,
						},
						{
							id: 2,
							name: "Fatima Aminu",
							avatar:
								"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
							email: "Teemah@vetly.com",
							date: "20th February, 2023",
							status: true,
						},
						{
							id: 3,
							name: "Fatima Aminu",
							avatar:
								"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
							email: "Teemah@vetly.com",
							date: "20th February, 2023",
							status: true,
						},
					]}
				/>
			</div>
		</div>
	);
};

export default RegisteredCompanies;
