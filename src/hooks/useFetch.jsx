import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (path) => {

    const [data, setData] = useState([])

    useEffect(()=> {
        async function fetchMovies() {
            try {
                const resp = await axios.get(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${path}&type=movie&page=1`);
                setData(resp.data.Search);
            } catch(err) {
                console.log(err);
            }
        }
        fetchMovies();
    }, [path])
    
    return {data};
}