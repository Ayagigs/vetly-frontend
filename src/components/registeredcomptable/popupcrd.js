import avatar from '../../assets/avatar.svg'
const InputCard = (props) => {
  return (
		<div className="popupcrd">
			<div className="popupheadr">
				<img src={avatar} alt="" />
			</div>
			<div className="inputelmnts">
				<div className="inputname">
					<label>
						<h1>First name</h1>
						<input type="text" placeholder="Victony" />
					</label>
					<label>
						<h1>Last name</h1>
						<input type="text" placeholder="Victony" />
					</label>
				</div>
				<div className="email">
					<label>
						<h1>Email</h1>
						<input type="email" placeholder="Victony@gmail.com" />
					</label>
				</div>
			</div>
		</div>
	);
}
export default InputCard