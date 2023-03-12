const Input = (props) => {
  return (
    <label>
      <h2>{props.label}</h2>
      <input
        type="text"
        placeholder={props.placeholder}
        style={{ height: "36px" }}
      />
    </label>
  );
};
export default Input;
