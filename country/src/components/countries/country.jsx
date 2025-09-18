import React, { useEffect, useState } from 'react';

const allCountryURL = 'https://openapi.programming-hero.com/api/all';

const Country = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(allCountryURL)
            .then(res => res.json())
            .then(data => {
                console.log(data.countries); // check the array
                setCountries(data.countries); // store only the array
            })
            .catch(error => console.error("Error fetching countries:", error));
    }, []);

    return (
        <div>
            <h3>All Countries: {countries.length}</h3>
            <ul>
                {countries.map((country, index) => (
                    <li key={index}>
                        <img 
                            src={country.flags.flags?.png} 
                            alt={country.flags?.alt} 
                            width="30" 
                            style={{ marginRight: "8px" }}
                        />
                        {country.name?.common} - {country.region?.region}
                        {country.population.population ? ` - Population: ${country.population.population}` : ''}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Country;