import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { LoadingSpinner } from "../components";
import { useTitle } from "../hooks/useTitle";

export const MovieDetail = () => {
    const param = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    useTitle(movie.Title)

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${param.id}`);
                setMovie(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchMovie();
    }, [])

  if (loading) {
    return (
        <>
            <LoadingSpinner/>
        </>
    )
  }
    
  return (
    <>
        <div className="flex max-w-[90%] m-auto justify-center items-center gap-5 my-4">
            <div className="max-w-sm flex-1 m-auto">
                <img src={movie.Poster} className="rounded" alt="" />
            </div>
            <div className="flex flex-col flex-1 gap-4">
                <h1 className="text-3xl">{movie.Title}</h1>
                <p>{movie.Plot}</p>
                <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <p>{movie.imdbRating}</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank">{movie.imdbVotes}</a>
                </div>

                {movie.Genre && 
                <div className="flex gap-1">
                    <p className="font-bold py-1">Genre: </p>
                    <div className="flex flex-row gap-1">
                        {movie.Genre.split(',').map((genre) => (
                            <p className="border-gray-300 border p-1 rounded">{genre}</p>
                        ))}
                    </div>
                </div>}
                
                <div className="flex gap-1">
                    <p className="font-bold">Actors: </p>
                    <p>{movie.Actors}</p>
                </div>

                <div className="flex gap-1">
                    <p className="font-bold">Director: </p>
                    <p>{movie.Director}</p>
                </div>

                <div className="flex gap-1">
                    <p className="font-bold">Writer: </p>
                    <p>{movie.Writer}</p>
                </div>

                <div className="flex gap-1">
                    <p className="font-bold">Released on: </p>
                    <p>{movie.Released}</p>
                </div>

                <div className="flex gap-1">
                    <p className="font-bold">Movie Length: </p>
                    <p>{movie.Runtime}</p>
                </div>

                {movie.Country && 
                <div className="flex gap-1">
                    <p className="font-bold py-1">Released in: </p>
                    <div className="flex flex-row gap-1">
                        {movie.Country.split(',').map((country) => (
                            <p className="border-gray-300 border p-1 rounded">{country}</p>
                        ))}
                    </div>
                </div>}
            </div>
        </div>
    </>
  )
}
