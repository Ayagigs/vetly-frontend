import React from "react";
import { useState, useEffect } from "react";
import { APIConfig } from "../../config/apiConfig";
import {
  BusinessHomeParent,
  BusinessHomeTop,
  BusinessHomeBottom,
  Wrapper,
  StatusBadge
} from "./business-home.styles";

const BusinessHome = () => {
  const [countData, setCountData] = useState({});
  const [recentVetting, setRecentVetting] = useState([]);

  const fetchVettingCount = async (userToken) => {
    const { data } = await APIConfig.get(`vetting/count`, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    });
    setCountData(data);
  };

  const fetchRecentVetting = async (userToken, userId) => {
    const { data } = await APIConfig.get(`vetting`, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    })
    setRecentVetting(data);
  };

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    const currentUser = localStorage.getItem("currentUser");
    fetchVettingCount(userToken);
    fetchRecentVetting(userToken, currentUser.id);
  }, []);

  return <BusinessHomeParent>
    <BusinessHomeTop>
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
    </BusinessHomeTop>

    <BusinessHomeBottom>
      <h1>Recent vetting requests</h1>
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
            {recentVetting.map((item) => (
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
    </BusinessHomeBottom>
  </BusinessHomeParent>;
};

export default BusinessHome;
