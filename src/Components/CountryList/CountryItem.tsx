import React, {MouseEventHandler} from "react";

interface Props {
    name: string;
    onClick: MouseEventHandler;
}

const CountryItem: React.FC<Props> = ({name, onClick}) => {
    return (
        <li onClick={onClick}><p>{name}</p></li>
    );
};

export default CountryItem;