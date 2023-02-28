const Input = (props) => {
  return (
		<label>
			<h3>{props.item.label}</h3>
			<input type="text" placeholder={props.item.placeholder} />
		</label>
	);
}
export default Input