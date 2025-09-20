import { MovieCard } from "../components";
import { useFetch } from "../hooks/useFetch"
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({path, title}) => {
  
    const {data: movies} = useFetch(path);
    useTitle(title);

    return (
    <>
        <div className="grid grid-cols-4 gap-4 my-4 max-w-[90%] m-auto">
            {movies.map((movie) =>(
                <MovieCard movie={movie}/>
            ))}
        </div>
    </>
  )
}
