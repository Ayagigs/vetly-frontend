/** @format */

// import React, { useState } from "react";
import "./teamMember.css";
import { CompanyTableSelection } from "../../components/Team-membercomp/Teammembercomp";
import InviteModal from "../../components/Team-membercomp/inviteModal";
import { useState } from "react";
const TeamMembers = () => {
	const [modal, setModal] = useState(false)
	const handleModal = () => {
		setModal(true)
	}
	return (
		<>
			{modal && <InviteModal setModal = {setModal}/>}
			<div className="teamemberscomp">
				<div className="teamcomp">
					<div className="registeredheader">
						<h1>Vetly Team Members</h1>
						<button onClick={() => handleModal()}>Invite Member</button>
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
			</div>
		</>
	);
};

export default TeamMembers;
