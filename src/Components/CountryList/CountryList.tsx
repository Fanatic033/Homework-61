import React from "react";

interface Props {
    name: string
}

const CountryList: React.FC<Props> = ({name}) => {

    return (
        <>
    <li><p>{name}</p></li>
        </>
    );
};

export default CountryList;