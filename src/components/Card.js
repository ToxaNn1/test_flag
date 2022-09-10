import React from "react";

const Card = ({ capital, population, name, area, independent, region, coatOfArms, flags, carSide, continents,currencies }) => {
    const currency = Object.keys(currencies)
    return (
        <div className="card-block">
            <div>
                <img src={flags} alt="flag" />
            </div>
            <div className="card__desc">
                <img src={coatOfArms} className="w-7 content-center" alt="coatOfArms" />
                <div>
                    <p>Offical name: {name}</p>
                    <p>Capital: {capital}</p>
                    <p>Region: {region}</p>
                    <p>Continent: {continents}</p>
                </div>
                <div>
                    <p>Population: {population}</p>
                    <p>Area: {area}</p>
                    <p>Is Independent: {independent ? 'Yes' : 'No' }</p>
                    <p>Car side: {carSide}</p>
                    <p>Currency name: {currencies[currency].name}</p>
                    <p>Currency symbol: {currencies[currency].symbol}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
