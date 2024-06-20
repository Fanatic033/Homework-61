import React, {useCallback, useEffect, useState} from 'react';
import {Countries, CountryInfoType} from '../../../types.ts';
import axios from 'axios';
import {ONECOUNTRY_URL} from '../../../Api.ts';
import './CountryInfo.css';

interface Props {
  id: string | null;
}

const CountryInfo: React.FC<Props> = ({id}) => {

  const [info, SetInfo] = useState<null | CountryInfoType>(null);

  const countryAxios = useCallback(async () => {
    try {
      if (id) {
        const {data} = await axios.get(ONECOUNTRY_URL + id);
        if (!data.borders) {
          alert('У Страны нет соседей');
          console.error('У Страны нет соседей');
        }
        const bordersPromises = data.borders.map((border: string) => axios.get(ONECOUNTRY_URL + border));
        const bordersResponses = await Promise.all(bordersPromises);
        const borders: Countries[] = bordersResponses.map((response) => ({
          name: response.data.name,
          alpha3Code: response.data.alpha3Code,
        }));
        SetInfo({...data, borders});
      }
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    void countryAxios();

  }, [countryAxios, id]);

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
      <p>
        Borders:{' '}
        {info.borders.map((border) => border.name).join(', ')}
      </p>
    </>
  );
};

export default CountryInfo;
