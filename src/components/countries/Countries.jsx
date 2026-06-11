// import React from 'react'; 

import { use, useState } from "react";
import Country from "../country/Country";

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const [visitedCountries, setVisitedCountries] = useState([]);

    function handleVisitedCountries(country) {
        const isAlReadyVisited = (visitedCountries.includes(country));
        const newVisitedCountry = isAlReadyVisited ? visitedCountries.filter(visited => visited !== country) : [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry)

    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <div>
                <h2>Total Countries: {countries.length}</h2>
                <h3>Visited Countries:{visitedCountries.length}</h3>
            </div>

            <div style={{ border: '2px solid green', padding: '25px', borderRadius: '10px' }}>
                <h2>Visited Country List</h2>
                <ol>
                    {
                        visitedCountries.map(visitedCountry => <li key={visitedCountry.cca3?.cca3} >
                            <div style={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>


                                <img src={visitedCountry.flags?.flags?.png} alt={visitedCountry.flags?.flags?.alt} height='15px' />
                                <span>
                                    {visitedCountry.name.common}
                                </span>
                            </div>
                        </li>)
                    }
                </ol>
            </div>


            <div className="countriesContainer">
                {
                    countries.map(country => <Country country={country} handleVisitedCountries={handleVisitedCountries} key={country.cca3.cca3}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;