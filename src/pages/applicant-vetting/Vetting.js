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
  NoDataFeedback,
  Rows,
  StatusBadge,
  StatusContainer,
  VettingHeadersContainer,
  Wrapper,
} from "./applicant.vetting.styles";
import avatar from "../../assets/avatar.png";
import { APIConfig } from "../../config/apiConfig";
import { formatVettingData } from ".";
import { Spinner } from "@chakra-ui/react";

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

const filter = (statuscode = 0, data) => {
  const status =
    statuscode === 0 ? "success" : statuscode === 1 ? "pending" : "failed";

  return data.filter((el) => el.status === status);
};

const Vetting = () => {
  const [activeHeader, setActiveHeader] = useState(0);
  const [vettingData, setVettingData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getVettingRequests = async () => {
      setLoading(true);
      try {
        const { data } = await APIConfig.get("vetting");
        console.log(data);
        const formattedData = formatVettingData(data);

        const vettingRequests = filter(activeHeader, formattedData);
        setVettingData(vettingRequests);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getVettingRequests();
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
              <DataHeader>Employer</DataHeader>
              <DataHeader>Date</DataHeader>
              <DataHeader>Status</DataHeader>
              <DataHeader>Email</DataHeader>
            </>
          )}
        </DataHeadersContainer>

        <DataRowsContainer>
          <Wrapper>
            {!loading && vettingData.length === 0 && (
              <>
                <NoDataFeedback>No data</NoDataFeedback>
              </>
            )}
            {!loading && vettingData.length > 0 && (
              <>
                {vettingData.map((el) => (
                  <Rows key={el.id}>
                    <EmployerContainer>
                      <img
                        src={avatar}
                        alt="avatar"
                        className="employee-avatar"
                      />
                      <h1 className="employee-name">{el.employer}</h1>
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
              </>
            )}
          </Wrapper>
        </DataRowsContainer>
      </CenterWrapper>
    </ApplicantVettingParent>
  );
};

export default Vetting;
