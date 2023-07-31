import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://ih-countries-api.herokuapp.com/countries");
      setCountries(response.data);
      console.log(countries);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
        <div className="list-group" style={{ maxHeight: "90vh", overflow: "scroll" }}>
          {countries.map((oneCountry) => {
            return (
              <Link to={`/${oneCountry.alpha3Code}`} key={oneCountry._id}>
                {oneCountry.name.common}
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`}
                  alt=""
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
