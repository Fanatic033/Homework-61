import React, {useCallback, useEffect, useState} from 'react';
import CountryItem from "./CountryItem.tsx";
import {Countries} from "../../../types.ts";
import axios from "axios";
import {ALLCOUNTRY_URL} from "../../../Api.ts";
import './CountryList.css'

interface Props {
    onSelectedCountry: (alpha3Code: string) => void
}

const CountryList: React.FC<Props> = ({onSelectedCountry}) => {
    const [countries, setCountries] = useState<Countries[]>([])

    const axiosCountries = useCallback(async () => {
        const response = await axios.get(ALLCOUNTRY_URL)
        setCountries(response.data)
    }, [])


    useEffect(() => {
        void axiosCountries()
    }, [axiosCountries])
    return (
        <div className={'list-main'}>
            <h2>Country List</h2>
            <ul className="countryList">
                {countries.map((country) => (
                    <CountryItem key={country.alpha3Code} name={country.name}
                                 onClick={() => onSelectedCountry(country.alpha3Code)}/>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;