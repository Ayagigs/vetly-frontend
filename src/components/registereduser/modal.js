/** @format */

import { AiOutlineCloseCircle } from "react-icons/ai";
import avatar from "../../assets/avatar.svg";
import moment from "moment";

const RegModal = (props) => {
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
								<h1>Company Name</h1>
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
						<div className="subtype">
							<label>
								<h1>Subscription type</h1>
								<input
									type="text"
									placeholder={props.user.substype}
									id="subscription"
								/>
							</label>
						</div>
						<div className="date">
							<label>
								<h1>Duration</h1>
								<input
									// type="date"
									//   placeholder={props.user.date}
									id="date"
									value={moment(props.user.rawDate).format("yyyy-MM-dd")}
									onChange={() => {}}
								/>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default RegModal;
