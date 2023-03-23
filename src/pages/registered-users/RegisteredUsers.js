/** @format */

import React from "react";
import { TableSelection } from "../../components/registereduser/registeredusercomp";
import "./registeredUser.css";
const RegisteredUsers = () => {
	return (
		<div className="registereduser">
			<div className="register-header">
				<h1>Registered Users</h1>
				<input type="text" placeholder="Search by name or email" />
			</div>
			<div className="registeredusertable">
				<TableSelection
					data={[
						{
							id: 0,
							name: "Fatima Aminu",
							avatar:
								"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
							email: "Teemah@vetly.com",
							date: "20th February, 2023",
							status: "7/7",
						},
						{
							id: 1,
							name: "Fatima Aminu",
							avatar:
								"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
							email: "Teemah@vetly.com",
							date: "20th February, 2023",
							status: "7/7",
						},
						{
							id: 2,
							name: "Fatima Aminu",
							avatar:
								"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
							email: "Teemah@vetly.com",
							date: "20th February, 2023",
							status: "7/7",
						},
						{
							id: 3,
							name: "Fatima Aminu",																																																									
							avatar:
								"https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
							email: "Teemah@vetly.com",
							date: "20th February, 2023",
							status: "7/7",
						},
					]}
				/>
			</div>
		</div>
	);
};

export default RegisteredUsers;
