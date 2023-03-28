/** @format */
import CompCard from "../../components/registeredcomptable/registercompcmp";
import "./registeredcomp.css";
import data from "../../components/Registeredcompdata";
import { RegisteredCompTable } from "../../components/registeredcomptable/registerdcomptable";
const RegisteredCompanies = () => {
  const [registeredCompanies, setRegisteredCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCompanies = async () => {
    setLoading(true);
    try {
      const { data } = await APIConfig.get("users?user_type=business");
      const formattedData = formatCompaniesData(data);
      setLoading(false);
      setRegisteredCompanies(formattedData);
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
        handleCompanySearch(searchTerm);
      } else {
        fetchCompanies();
      }
    }
  };

  const handleCompanySearch = async (keyWord) => {
    setLoading(true);
    try {
      const { data } = await APIConfig.get(`users/search?keyword=${keyWord}`);
      const formattedData = formatCompaniesData(data);

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
      <input
        type="text"
        placeholder="Search by name"
        className="compinput"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div className="registeredcmpnytable">
        {loading ? (
          <>
            {" "}
            <Spinner
              thickness="2px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              className="spinner"
            />
          </>
        ) : (
          <>
            {" "}
            <RegisteredCompTable data={registeredCompanies} />
          </>
        )}
      </div>
    </div>
  );
};

export default RegisteredCompanies;
