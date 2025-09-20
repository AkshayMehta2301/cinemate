import { Route, Routes } from "react-router-dom"
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages"

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route index element={<MovieList path="money" title="Home"/>}/>
            <Route path="/movies/popular" element={<MovieList path="brain" title="Popular"/>}/>
            <Route path="/movies/top-rated" element={<MovieList path="dead" title="Top Rated"/>}/>
            <Route path="/movies/upcoming" element={<MovieList path="care" title="Upcoming"/>}/>

            <Route path="/movies/search" element={<Search/>}/>

            <Route path="/movie/:id" element={<MovieDetail/>}/>
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
    </>
  )
}
