import { useEffect, useState } from "react";
import {
  ApplicantVettingParent,
  CenterWrapper,
  DataHeader,
  DataHeadersContainer,
  DataRowsContainer,
  DateContainer,
  EmailContainer,
  EmployerContainer,
  Header,
  Rows,
  StatusBadge,
  StatusContainer,
  VettingHeadersContainer,
  Wrapper,
} from "./applicant.vetting.styles";
import avatar from "../../assets/avatar.png";

const headers = [
  {
    id: 0,
    name: "Successful Vetting",
  },
  {
    id: 1,
    name: "Pending Requests",
  },
  {
    id: 2,
    name: "Denied Requests",
  },
];

const data = [
  {
    id: 0,
    name: "Oluwaseun Jayeoba",
    date: "March 8, 2023",
    email: "seunjay92@gmail.com",
    status: "pending",
    avatar: "../../assets/avatar.png",
  },
  {
    id: 1,
    name: "Oluwaseun Jayeoba",
    date: "March 8, 2023",
    email: "seunjay92@gmail.com",
    status: "success",
    avatar: "../../assets/avatar.png",
  },
  {
    id: 2,
    name: "Oluwaseun Jayeoba",
    date: "March 8, 2023",
    email: "seunjay92@gmail.com",
    status: "declined",
    avatar: "../../assets/avatar.png",
  },
  {
    id: 3,
    name: "Oluwaseun Jayeoba",
    date: "March 8, 2023",
    email: "seunjay92@gmail.com",
    status: "success",
    avatar: "../../assets/avatar.png",
  },
  {
    id: 4,
    name: "Oluwaseun Jayeoba",
    date: "March 8, 2023",
    email: "seunjay92@gmail.com",
    status: "declined",
    avatar: "../../assets/avatar.png",
  },
  {
    id: 5,
    name: "Oluwaseun Jayeoba",
    date: "March 8, 2023",
    email: "seunjay92@gmail.com",
    status: "pending",
    avatar: "../../assets/avatar.png",
  },
];

const filter = (statuscode = 0) => {
  const status =
    statuscode === 0 ? "success" : statuscode === 1 ? "pending" : "declined";

  return data.filter((el) => el.status === status);
};

const Vetting = () => {
  const [activeHeader, setActiveHeader] = useState(0);
  const [vettingData, setVettingData] = useState([]);

  useEffect(() => {
    const data = filter(activeHeader);
    setVettingData(data);
  }, [activeHeader]);


  return (
    <ApplicantVettingParent>
      <CenterWrapper>
        <VettingHeadersContainer>
          {headers.map((header) => (
            <Header
              active={+(activeHeader === header.id)}
              key={header.id}
              onClick={() => setActiveHeader(header.id)}
            >
              {header.name}
            </Header>
          ))}
        </VettingHeadersContainer>

        <DataHeadersContainer>
          <DataHeader>Employer</DataHeader>
          <DataHeader>Date</DataHeader>
          <DataHeader>Status</DataHeader>
          <DataHeader>Email</DataHeader>
        </DataHeadersContainer>

        <DataRowsContainer>
          <Wrapper>
            {vettingData.map((el) => (
              <Rows key={el.id}>
                <EmployerContainer>
                  <img src={avatar} alt="avatar" className="employee-avatar" />
                  <h1 className="employee-name">{el.name}</h1>
                </EmployerContainer>
                <DateContainer>
                  <p className="date">{el.date}</p>
                </DateContainer>
                <StatusContainer>
                  <StatusBadge status={el.status}>{el.status}</StatusBadge>
                </StatusContainer>
                <EmailContainer>
                  <p className="email">{el.email}</p>
                </EmailContainer>
              </Rows>
            ))}
          </Wrapper>
        </DataRowsContainer>
      </CenterWrapper>
    </ApplicantVettingParent>
  );
};

export default Vetting;
