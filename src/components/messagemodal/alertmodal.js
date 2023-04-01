/** @format */

import { AiOutlineCloseCircle } from "react-icons/ai";
import outline from "../../assets/tick-circle.svg";
const AlertModal = (props) => {
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
		<div className="amodal">
			<div className="modalelmnts">
				<div className="alertcrd">
					<div className="alertheadr">
						<AiOutlineCloseCircle
							className="close"
							// onClick={() => props.setModal(false)}
						/>
						<img className="outline-circle" src={outline} alt="" />
						<div className="text">
							<h1>Request Sent</h1>
							<p>A request has been sent to Victony@vetly.com.</p>
						</div>
					</div>
					<div className="alertbtn">
						<button style={buttonstyles} onClick = {()=>props.setAlert(false)}>Done</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AlertModal;
