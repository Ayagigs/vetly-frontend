/** @format */

import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

import { APIConfig } from "../../config/apiConfig";
import { TableSelection } from "../../components/registereduser/registeredusercomp";
import "./registeredUser.css";
const RegisteredUsers = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      handleUserSearch(searchTerm);
    }
  };

  const handleUserSearch = async (keyWord) => {
    setLoading(true);
    try {
      const { data } = await APIConfig.get(`users/search?keyword=${keyWord}`);
      const formattedData = data.map((el) => ({
        id: el.id,
        name: el.fullname,
        email: el.local.email,
        avatar:
          "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        date: new Date(el.created_at).toDateString(),
        status: "7/7",
      }));

      setLoading(false);
      setRegisteredUsers(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const { data } = await APIConfig.get("users?user_type=applicant");
        const formattedData = data.map((el) => ({
          id: el.id,
          name: el.fullname,
          email: el.local.email,
          avatar:
            "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
          date: new Date(el.created_at).toDateString(),
          status: "7/7",
        }));

        setLoading(false);
        setRegisteredUsers(formattedData);
      } catch (error) {
        console.log(error);
      }
    };

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
