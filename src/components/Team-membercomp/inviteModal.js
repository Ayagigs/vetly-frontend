/** @format */

import { AiOutlineCloseCircle } from "react-icons/ai";
import { Checkbox } from "@mantine/core";
import avatar from "../../assets/avatar.svg";
import swal from "sweetalert";

// import "./inviteModal.css";
const InviteModal = (props) => {
	const buttonstyles = {
		backgroundColor: "#0570FB",
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
		outline: "none",
	};
	
	return (
		<div className="tmodal">
			<div className="modalelmnts">
				<div className="modalcrd">
					<div className="popupheadr">
						<AiOutlineCloseCircle
							className="close"
							onClick={() => props.setModal(false)}
						/>
						<img src={avatar} alt="" />
					</div>
					<div className="tinputelmnts">
						<div className="email">
							<label>
								<h1 className="m-email">Email</h1>
								<input
									type="email"
									placeholder="Victony@vetly.com"
									id="email"
									className="temail"
								/>
							</label>
						</div>
						<div className="checkboxitems">
							<div className="checkbox">
								<Checkbox
									className="check"

									// label="I agree to sell my privacy"
								/>
								<h1 className="checkedbxtxt">See other team members</h1>
							</div>
							<div className="checkbox">
								<Checkbox
									className="check"

									// label="I agree to sell my privacy"
								/>
								<h1 className="checkedbxtxt">See other team members</h1>
							</div>
							<div className="checkbox">
								<Checkbox
									className="check"

									// label="I agree to sell my privacy"
								/>
								<h1 className="checkedbxtxt">See other team members</h1>
							</div>
							<div className="checkbox">
								<Checkbox
									className="check"

									// label="I agree to sell my privacy"
								/>
								<h1 className="checkedbxtxt">See other team members</h1>
							</div>
							<div className="checkbox">
								<Checkbox
									className="check"

									// label="I agree to sell my privacy"
								/>
								<h1 className="checkedbxtxt">See other team members</h1>
							</div>
						</div>

						<button style={buttonstyles}>
							Send Invite
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InviteModal;
