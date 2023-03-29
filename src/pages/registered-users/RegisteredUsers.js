/** @format */

import React, { useEffect, useState } from "react";

import { APIConfig } from "../../config/apiConfig";
import { TableSelection } from "../../components/registereduser/registeredusercomp";
import "./registeredUser.css";
import { formatUsersData } from "./";
import { Spinner } from "@chakra-ui/react";
// import InputCard from "../../components/registeredcomptable/popupcrd";
const RegisteredUsers = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false)
	
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data } = await APIConfig.get("users?user_type=applicant");
      const formattedData = formatUsersData(data);

      setLoading(false);
      setRegisteredUsers(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (searchTerm !== "") {
        handleUserSearch(searchTerm);
      } else {
        fetchUsers();
      }
    }
  };

  const handleUserSearch = async (keyWord) => {
    setLoading(true);
    try {
      const { data } = await APIConfig.get(`users/search?keyword=${keyWord}`);
      const formattedData = formatUsersData(data);

      setLoading(false);
      setRegisteredUsers(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
		<div className="registereduserelmnts">
			<div className="registereduser">
				<div className="register-header">
					<h1>Registered Users</h1>
					<input
						type="text"
						placeholder="Search by name or email"
						onChange={handleChange}
						onKeyDown={handleKeyDown}
					/>
				</div>
				<div className="registeredusertable">
					{loading ? (
						<Spinner
							thickness="2px"
							speed="0.65s"
							emptyColor="gray.200"
							color="blue.500"
							size="xl"
							className="spinner"
						/>
					) : (
						<>
							{" "}
							<TableSelection data={registeredUsers} />
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default RegisteredUsers;
