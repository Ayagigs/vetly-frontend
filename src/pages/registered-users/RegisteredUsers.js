import React from 'react'
// import RegisteredUserTable from '../../components/registereduser/registeredusercomp';
import './registeredUser.css'
const RegisteredUsers = () => {
  return (
		<div className="registereduser">
			<div className="register-header">
				<h1>Registereduser</h1>
				<input type="text" placeholder='Search by name or email' />
			</div>
      <div className="registeredusertable">
        {/* <RegisteredUserTable/> */}
      </div>
		</div>
	);
}

export default RegisteredUsers