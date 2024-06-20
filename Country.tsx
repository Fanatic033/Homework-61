import CountryList from "./src/Components/CountryList/CountryList.tsx";
import {useState} from "react";
import CountryInfo from "./src/Components/CountryInfo/CountryInfo.tsx";

const Country = () => {
    const [selectedCountry, SetSelectedCountry] = useState<string | null>(null)
    const handleSelectCountry = (alpha3Code: string) => {
        SetSelectedCountry(alpha3Code);
    }
    return (
        <>
            <CountryList onSelectedCountry={handleSelectCountry}/>
            <div className={'country-info'}>
                {selectedCountry && <CountryInfo id={selectedCountry}/>}
            </div>
        </>
    );
};

export default Country;