export interface Countries {
    name: string;
    alpha3Code: string;
}


export interface CountryInfoType {
    name: string;
    capital: string;
    borders: Countries[];
    flag: string;
    population: number
}