import React, { useEffect, useState } from 'react';
import BreweryCard from '../../components/BreweryCard/BreweryCard';
import './App.css';
import SearchIcon from './search.svg';

// const apiZip = 95742;
// const apiCity = 'rancho_cordova';
// const API_ZIP_URL = `https://api.openbrewerydb.org/breweries?by_postal=${apiZip}&sort=type,updated_at:asc`;
// const API_CITY_URL = `https://api.openbrewerydb.org/breweries?by_city=${apiCity}&sort=type,updated_at:asc`;

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [beerByZip, setBeerByZip] = useState([]);
  const [beerByCity, setBeerByCity] = useState([]);

  const searchZip = async (zip) => {
    const response = await fetch(`https://api.openbrewerydb.org/breweries?by_postal=${zip}&sort=type,updated_at:asc`);
    const data = await response.json();

    setBeerByZip(data);
  }

  const searchCity = async (city) => {
    const response = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}&sort=type,updated_at:asc`);
    const data = await response.json();

    setBeerByCity(data);
  }

  // useEffect(() => {
  //   searchZip(95742);
  // }, []);

  return (
    <div className="app">
      <h1>Project4v3</h1>
      {/* <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Breweries by Zip"
        />
        <img 
          src={SearchIcon}
          alt="search-zip"
          onClick={() => searchZip(searchTerm)}
        />
      </div> */}
      <div className='search'>
        <input 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Breweries by City"
        />
        <img 
          src={SearchIcon}
          alt="search-city"
          onClick={() => searchCity(searchTerm)}
        />
      </div>

      {/* {beerByZip?.length > 0 ? (
        <div className="container">
          {beerByZip.map((brewery) => (
            <BreweryCard brewery={brewery} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No breweries found</h2>
        </div>
      )} */}

      {beerByCity?.length > 0 ? (
        <div className="container">
          {beerByCity.map((brewery) => (
            <BreweryCard brewery={brewery} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No breweries found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
