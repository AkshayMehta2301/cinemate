import { Link, NavLink, useNavigate } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { BiCameraMovie } from "react-icons/bi";

export const Header = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const search = event.target.search.value;
        event.target.reset();

        navigate(`/movies/search?q=${encodeURIComponent(search)}`)
    }

    return (
        <>
        <div className="w-[100%]">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[90%] m-auto md:h-10">
                <div className="flex flex-row gap-2">
                    <Link className="text-3xl text-pink-300" to="/">
                        <BiCameraMovie />
                    </Link>
                    <Link className="text-2xl" to="/">
                        <p>Cinemate</p>
                    </Link>
                </div>
                <div className="flex flex-row gap-4">
                    <NavLink to="/" className={({ isActive }) => `py-1 px-2 rounded ${isActive ? "bg-pink-300 text-white" : "hover:bg-gray-300"}`}>
                        <p>Home</p>
                    </NavLink>
                    <NavLink to="/movies/popular" className={({ isActive }) => `py-1 px-2 rounded ${isActive ? "bg-pink-300 text-white" : "hover:bg-gray-300"}`}>
                        <p>Popular</p>
                    </NavLink>
                    <NavLink to="/movies/top-rated" className={({ isActive }) => `py-1 px-2 rounded ${isActive ? "bg-pink-300 text-white" : "hover:bg-gray-300"}`}>
                        <p>Top Rated</p>
                    </NavLink>
                    <NavLink to="/movies/upcoming" className={({isActive}) => `${isActive ? "bg-pink-300 text-white" : "hover:bg-gray-300"} py-1 px-2 rounded`}>
                        <p>Upcoming</p>
                    </NavLink>
                </div>
                <div>
                    <form className="flex flex-row border-1 border-solid rounded-md py-1 px-2" onSubmit={handleSubmit}>
                        <CiSearch className="text-2xl"/>
                        <input name="search" type="text" placeholder="Search..." className="outline-0 pl-2"/>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}