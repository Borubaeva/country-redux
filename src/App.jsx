import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCountry,allCountries } from './store/countryReduser/asyncAction/asyncActions';

function App() {
    const [inputText, setSearchTerm] = useState('')
    const countries = useSelector(state => state.country.countries)
    const dispatch = useDispatch()
  
    const countrySearch = () => {
      dispatch(searchCountry(inputText));
    };
  
    const countryAll = () => {
      dispatch(allCountries());
    };
  
    return (
      <div style={{backgroundColor:"yellow"}}>
        <input type="text" value={inputText} onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={countrySearch}>Search</button>
        <button onClick={countryAll}>All</button>
        <ul>
          {countries && countries.map(country => (
            <li key={country.name.common}>
              <p>Name: {country.name.common}</p>
              <p>Capital: {country.capital}</p>
              <p>Population: {country.population}</p>
              <img src={country.flags.png} alt="Flag" />
            </li>
          ))}
        </ul>
      </div>
    );
}

export default App;
