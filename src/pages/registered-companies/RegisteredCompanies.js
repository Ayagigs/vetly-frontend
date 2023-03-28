/** @format */
import CompCard from "../../components/registeredcomptable/registercompcmp";
import "./registeredcomp.css";
import data from "../../components/Registeredcompdata";
import { RegisteredCompTable } from "../../components/registeredcomptable/registerdcomptable";
import { useEffect, useState } from "react";
import { APIConfig } from "../../config/apiConfig";
import { formatCompaniesData } from ".";

const RegisteredCompanies = () => {
  const [registeredCompanies, setRegisteredCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCompanies = async () => {
    setLoading(true);
    try {
      const { data } = await APIConfig.get("users?user_type=business");
      const formattedData = formatCompaniesData(data);
      console.log(data);
      setLoading(false);
      setRegisteredCompanies(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const compCard = data.map((item) => {
    return <CompCard key={item.id} {...item} />;
  });

  return (
    <div className="registeredcomp">
      <div className="registeredheader">
        <h1>Registered Companies</h1>
      </div>
      <div className="carditems">{compCard}</div>
      <input type="text" placeholder="Search by name" className="compinput" />
      <div className="registeredcmpnytable">
        <RegisteredCompTable data={registeredCompanies} />
      </div>
    </div>
  );
};

export default RegisteredCompanies;
