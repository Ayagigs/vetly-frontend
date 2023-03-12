const Input = (props) => {
  return (
		<label className="form-label">
			<h2>{props.label}</h2>
			<input type="text" placeholder={props.placeholder} />
		</label>
	);
}
export default Input