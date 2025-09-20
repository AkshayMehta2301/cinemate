import { useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Search = () => {

    const [searchParams] = useSearchParams();
    const query = searchParams.get('q')
    const {data: movies} = useFetch(query)
    useTitle(`Search Result For ${query}`);

  return (
    <>
        <div className="text-3xl my-4 max-w-[90%] m-auto">
            {movies.length === 0 ? `No movies found for '${query}'` : `Result for '${query}'`}
        </div>
        <div className="grid grid-cols-4 gap-4 my-4 max-w-[90%] m-auto">
            {movies.map((movie) =>(
                <MovieCard movie={movie}/>
            ))}
        </div>
    </>
  )
}
