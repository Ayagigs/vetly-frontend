/** @format */

import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

import { APIConfig } from "../../config/apiConfig";
import { TableSelection } from "../../components/registereduser/registeredusercomp";
import "./registeredUser.css";
import { formatUsersData } from "./";

const RegisteredUsers = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

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
    <div className="registereduser">
      <Oval
        height={80}
        width={80}
        color="#0570FB"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={loading}
        ariaLabel="oval-loading"
        secondaryColor="#0570FB"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
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
        <TableSelection data={registeredUsers} />
      </div>
    </div>
  );
};

export default RegisteredUsers;
