import {useCallback, useEffect, useState} from "react";
import {Countries} from "../../../types.ts";
import axios from "axios";
import {ALLCOUNTRY_URL} from "../../../Api.ts";
import CountryList from "../CountryList/CountryList.tsx";

const Country = () => {
    const [countries, setCountries] = useState<Countries[]>([])

    const axiosCountries = useCallback(async () => {
        const response = await axios.get(ALLCOUNTRY_URL)
        setCountries(response.data)
    }, [])
    useEffect(() => {
        void axiosCountries()
    }, []);

    return (
        <>
            <ul>
            {countries.map((country) => (
                <CountryList key={country.alpha3Code} name={country.name}/>
            ))}
            </ul>
        </>
    );
};

export default Country;