import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../API";

import styles from "./Country.module.css";

function Country ({ handleCountryChange }) {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(event) => handleCountryChange(event.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Country;