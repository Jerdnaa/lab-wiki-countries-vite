import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = () => {
  // const [fetching, setFetching] = useState(true);
  const [details, setDetails] = useState(null);
  const { countryId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ih-countries-api.herokuapp.com/countries/${countryId}`
        );

        //   console.log(response.data);
        setDetails(response.data);
        // setFetching(false);
        // console.log("THIS IS GOOD NIOW YAY: ", details);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [countryId]);
  // console.log("BABA", details);

  if (details === null || Object.keys(details).length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Country Details</h1>
      <h3>Name: {details.name.common}</h3>
      <p>Capital: {details.capital[0]}</p>
      <p>Area: {details.area}</p>
      <ul>
        {details.borders.map((border) => {
          return (
            <li key={border}>
              <Link to={`/${border}`}>{border}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CountryDetails;
