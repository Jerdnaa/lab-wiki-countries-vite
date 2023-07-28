import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const [fetching, setFetching] = useState(true);
  const [details, setDetails] = useState({});
  const { countryId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ih-countries-api.herokuapp.com/countries/${countryId}`
        );

        //   console.log(response.data);
        setDetails(response.data);
        setFetching(false);
        console.log("THIS IS GOOD NIOW YAY: ", details);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [countryId]);

  return (
    <>
      <h1>Country Details</h1>
    </>
  );
};

export default CountryDetails;
