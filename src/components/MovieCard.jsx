import { Link } from "react-router-dom"

export const MovieCard = ({movie}) => {

  return (
    <>
        <Link to={`/movie/${movie.imdbID}`}>
            <div className="flex flex-wrap flex-col justify-between items-center border-2 rounded p-2">
                <div className="h-60">
                    <img src={movie.Poster} alt="" className="h-[100%] w-60"/>
                </div>
                <p>{movie.Title}</p>
                <p>{movie.imdbID}</p>
            </div>
        </Link>
    </>
  )
}
