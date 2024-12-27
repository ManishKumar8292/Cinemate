import { useState, useEffect } from "react";


export const useFetch = (apiPath, queryTerm = "") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=3ee5ba8ede42f8587a809f9063ec547c&q=${queryTerm}`

    useEffect(() => {
        async function fetchmovies() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
        }
        fetchmovies();
    }, [url])
    return { data }
}
