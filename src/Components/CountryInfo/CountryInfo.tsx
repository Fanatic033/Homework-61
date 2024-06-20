import React, {useCallback, useEffect, useState} from "react";
import {CountryInfoType} from "../../../types.ts";
import axios from "axios";
import {ONECOUNTRY_URL} from "../../../Api.ts";
import './CountryInfo.css'

interface Props {
    id: string | null;
}

const CountryInfo: React.FC<Props> = ({id}) => {

    const [info, SetInfo] = useState<null | CountryInfoType>(null)

    const countryAxios = useCallback(async () => {
        if (id !== null) {
            const {data: country} = await axios.get(ONECOUNTRY_URL + id)
            console.log(country.borders)
            SetInfo(country)
        }
    }, [id])

    useEffect(() => {
        void countryAxios();

    }, [countryAxios]);

    return info && (
        <>
            <div className={'info-between'}>
                <div className={'Info-header'}>
                    <h1>{info.name}</h1>
                    <strong>Capital: {info.capital}</strong>
                    <p>Population: {info.population}</p>
                </div>
                <img src={info.flag} className={'Country-Image'} alt={info.name}/>
            </div>
            <p>Borders: {info.borders}</p>
        </>
    );
};

export default CountryInfo;
