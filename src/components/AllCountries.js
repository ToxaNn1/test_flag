import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountry } from "../store/slice/countrySlice";
import Card from "./Card";
import Loader from "./Loader";

const AllCountries = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.countries);
    const loading = useSelector((state) => state.countries.loading);
    const error = useSelector((state) => state.countries.erorr);

    const [value, setValue] = useState("Ukraine");
    const [click, setClick] = useState(false);

    useEffect(() => {
        dispatch(fetchCountry(value));
        setValue("");
    }, [dispatch, click]);

    console.log(error);

    return (
        <div className="wrapper-container">
            <div className="wrapper-header">
                <input
                    type="text"
                    placeholder="Search City..."
                    className="input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button className="btn" onClick={() => setClick((click) => !click)}>
                    Search
                </button>
            </div>
            {error?.length > 10 ? (
                <p className="error">Error: is invalid country, please enter valid name of country</p>
            ) : null}
            <div className="wrapper-card">
                {loading === false ? (
                    data.countries?.map((item) => {
                        return (
                            <Card
                                carSide={item.car.side}
                                continents={item.continents}
                                currencies={item.currencies}
                                flags={item.flags.png}
                                population={item.population}
                                coatOfArms={item.coatOfArms.png}
                                name={item.name.official}
                                area={item.area}
                                independent={item.independent}
                                region={item.subregion}
                                key={item.flag}
                                capital={item.capital}
                            />
                        );
                    })
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
};

export default AllCountries;
