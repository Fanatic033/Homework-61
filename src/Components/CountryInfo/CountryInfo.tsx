import {CountryInfoType} from "../../../types.ts";
import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {ONECOUNTRY_URL} from "../../../Api.ts";

interface Props {
    id: string | null;
}

const CountryInfo: React.FC<Props> = ({id}) => {

    const [info, SetInfo] = useState<null | CountryInfoType>(null)
    const countryAxios = useCallback(async () => {
        if (id !== null) {
            const {data: country} = await axios.get(ONECOUNTRY_URL + id)
            SetInfo(country)
        }
    }, [])


    useEffect(() => {
        void countryAxios();

    }, []);
    return info && (
        <div>
            <h1>{info.name}</h1>
            <p>{info.capital}</p>
            <p>{info.borders}</p>
        </div>
    );
};

export default CountryInfo;