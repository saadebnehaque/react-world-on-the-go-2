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

    const [searchTerm, setSearchTerm] = useState("");
    const searchedItem = countries
        .filter(country =>
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            // নাম অনুযায়ী তুলনা (A-Z)
            return a.name.common.localeCompare(b.name.common);
        });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '20px 0'
            }}>
                <input type="text"
                    placeholder="Search by country name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: '12px 20px',
                        width: '300px',
                        borderRadius: '25px',
                        border: '2px solid #ddd',
                        outline: 'none',
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'} />
            </div>
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
                    searchedItem.map(country => <Country country={country} handleVisitedCountries={handleVisitedCountries} key={country.cca3.cca3}></Country>
                    )
                }
            </div>
        </div>
    );
};

export default Countries;