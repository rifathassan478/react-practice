import React, { use } from 'react'
import Country from './Country';

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise);
    
    return (
        <>
            <Country countries={countries}></Country>
        </>
    );
};

export default Countries