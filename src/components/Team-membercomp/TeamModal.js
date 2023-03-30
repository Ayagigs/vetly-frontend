/** @format */

import { AiOutlineCloseCircle } from "react-icons/ai";
import avatar from "../../assets/avatar.svg";
import moment from "moment";

const TeamMemberModal = (props) => {
	const buttonstyles = {
		backgroundColor: props.user.status ? "#B21015" : "#0570FB",
		width: "176px",
		height: "48px",
		fontSize: "16px",
		fontWeight: "500",
		color: "#FFFFFF",
		margin: "10px auto",
		borderRadius: "5px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};
	return (
		<div className="modal">
			<div className="modalelmnts">
				<div className="modalcrd">
					<div className="popupheadr">
						<AiOutlineCloseCircle
							className="close"
							onClick={() => props.setModal(false)}
						/>
						<img src={avatar} alt="" />
					</div>
					<div className="inputelmnts">
						<div className="inputname">
							<label>
								<h1>Name</h1>
								<input
									type="text"
									placeholder={props.user.name.split(" ")[0]}
								/>
							</label>
						</div>
						<div className="email">
							<label>
								<h1>Email</h1>
								<input type="email" placeholder={props.user.email} id="email" />
							</label>
						</div>
						{/* <div className="subtype">
							<label>
								<h1>Gender</h1>
								<input
									type="gender"
									placeholder={props.user.gender}
									id="gender"
								/>
							</label>
						</div> */}
						<div className="date">
							<label>
								<h1>Date Joined</h1>
								<input
									// type="date"
									//   placeholder={props.user.date}
									id="date"
									value={moment(props.user.rawDate).format("yyyy-MM-dd")}
									onChange={() => {}}
								/>
							</label>
						</div>
						<button style={buttonstyles}>
							{props.user.status ? "Suspend User" : "Authorize User"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamMemberModal;
