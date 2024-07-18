import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './contries.css'

const Countries = () => {
// ------------------------------------------------------------------
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching the countries data:', error);
      });
  }, []);
// --------------------------------------------------------------------
  return (
    <>
      <div className='Countries2'>
      {countries.map((country, index) => (
            <Cards 
                titleName={country.name.common} 
                imageLink={country.flags.svg} key={index}
            />
        // <div key={index}> //   <h2>{country.name.common}</h2> //   <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="100" /> // </div>
      ))}
      </div>
    </>
  );
};

// -------------------------------------------------------------------

function Cards({titleName, imageLink, keyIndex}){
    return(
        <>
        <div className="countrycard" kiey={keyIndex}>
           <h2>{titleName}</h2>
           <img src={imageLink} alt={`Flag of ${titleName}`} width="100" />
        </div>
        </>
    )
}


export default Countries;