import React from "react";
import { useState, useEffect } from "react";
import { APIConfig } from "../../config/apiConfig";
import {
  BusinessVettingParent,
  BusinessVettingTop,
  BusinessVettingBottom,
  Wrapper,
  StatusBadge,
  HeaderContainer,
  Header
} from "./business-vetting.styles";

const headers = [
  {
    id: 0,
    name: "Passed Vetting",
  },
  {
    id: 1,
    name: "Failed Vetting",
  },
  {
    id: 2,
    name: "Pending Vetting",
  },
];

const BusinessVetting = () => {
  const [activeHeader, setActiveHeader] = useState(0);
  const [countData, setCountData] = useState({});
  const [vetting, setVetting] = useState([]);

  const fetchVettingCount = async (userToken) => {
    const { data } = await APIConfig.get(`vetting/count`, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    });
    setCountData(data);
  };

  const fetchVetting = async (userToken) => {
    const { data } = await APIConfig.get(`vetting`, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    });

    const filteredData = data.filter(activeHeader === 0 ? (item) => item.status === "success"
      : activeHeader === 1 ? (item) => item.status === "failed"
        : (item) => item.status === "pending");

    setVetting(filteredData);
  };

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    fetchVettingCount(userToken);
    fetchVetting(userToken);
  }, [activeHeader]);

  return <BusinessVettingParent>
    <BusinessVettingTop>
      <div>
        <h3>Passed Vetting</h3>
        <h1>{!countData.successful ? 0 : countData.successful}</h1>
      </div>
      <div>
        <h3>Failed Vetting</h3>
        <h1>{!countData.failed ? 0 : countData.failed}</h1>
      </div>
      <div>
        <h3>Pending Vetting</h3>
        <h1>{!countData.pending ? 0 : countData.pending}</h1>
      </div>
    </BusinessVettingTop>

    <BusinessVettingBottom>
      <h1>Recent vetting requests</h1>
      <HeaderContainer>
        {headers.map((header) => (
          <Header
            active={+(activeHeader === header.id)}
            key={header.id}
            onClick={() => setActiveHeader(header.id)}
          >
            {header.name}
          </Header>
        ))}
      </HeaderContainer>
      <Wrapper>
        <table>
          <thead>
            <tr>
              <th>Applicant</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {vetting.map((item) => (
              <tr key={item.id}>
                <td>{item.resume.personal_information.firstname} {item.resume.personal_information.lastname}</td>
                <td>{item.created_at.substring(0, 10)}</td>
                <td>
                  <StatusBadge status={item.status}>{item.status}</StatusBadge>
                </td>
                <td>View Application</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Wrapper>
    </BusinessVettingBottom>
  </BusinessVettingParent>;
};

export default BusinessVetting;
