/** @format */


const RegisteredCompanies = () => {

	// const [isactive, setIsactive] = useState(true)
	// setIsactive(prevactive => !prevactive)
	return (
		<div className="registeredcomp">
			<div className="registeredheader">
				<h1>Registered Companies</h1>
			</div>
			<input
				type="text"
				placeholder="Search by name or email"
				className="registeredinput"
			/>


		</div>
	);
};

export default RegisteredCompanies;
