import React, { useEffect, useState } from "react";
import Countries from "./CountryAirportList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FromAutocomplete from "./FromAutocomplete";
import ToAutocomplete from "./ToAutocomplete";


let newCountries = Countries;

function FlightBookingSearch() {
  // const [fromCountry, setFromCountry] = useState("");
  // const [toCountry, setToCountry] = useState("");
  // const [outboundFlightDate, setOutboundFlightDate] = useState(new Date());
  // const [returnFlightDate, setReturnFlightDate] = useState(new Date());
  // const [searchResults, setSearchResults] = useState([]);
  const [FromAutocomplete, setFromAutocomplete] = useState("");
  const [toCountry, setToCountry] = useState("");
  const [outboundFlightDate, setOutboundFlightDate] = useState(new Date());
  const [returnFlightDate, setReturnFlightDate] = useState(new Date());
  const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   const results = newCountries.map((country) => (
  //     <option key={country.iata_code}>{country.city} {country.iata_code}</option>
  //   ))
  //   setSearchResults(results);
  // }, [fromCountry]);

const handleSubmit = (event) => {
  console.log(`
      From: ${FromAutocomplete}
      To: ${toCountry}
      Outbound: ${outboundFlightDate}
      Return: ${returnFlightDate}
      `);
  event.preventDefault();
};

  // displaySearchResults = () => {
  //   return Countries.map (country => {
  //     return (
  //       <h1 key={country.city}>{country.city}</h1>
  //     )
  //   })
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Flight Selection</h1>

        <div>
          <label>
            From:
            <input
              name="FromAutocomplete"
              type="FromAutocomplete"
              value={FromAutocomplete}
              onChange={(e) => setFromAutocomplete(e.target.value)}
              required
            />
          {FromAutocomplete}
          </label>
        </div>

        {/* <div>
          <label>
            To:
            <input
              name="toCountry"
              type="toCountry"
              value={toCountry}
              onChange={(e) => setToCountry(e.target.value)}
              required
            />
            <option key=""></option>
            {Countries.map((country) => (
              <option key={country.city}>{country.city} {country.iata_code}</option>
            ))}
          </label>
        </div> */}

        <div>
          <label>
            OutBound Flight:
            <DatePicker
              dateFormat="yyyy/MM/dd"
              selected={outboundFlightDate}
              onChange={(date) => setOutboundFlightDate(date)}
            />
          </label>
        </div>

        <div>
          <label>
            Return Flight:
            <DatePicker
              dateFormat="yyyy/MM/dd"
              selected={returnFlightDate}
              onChange={(date) => setReturnFlightDate(date)}
            />
          </label>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default FlightBookingSearch;
