import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <>
        <div className="w-[100%]">
            <div className="flex flex-row justify-between max-w-[90%] m-auto">
                <p className="italic">@2025 Copyrights</p>
                <div className="flex flex-row gap-2">
                    <Link to="/"><p>Instagram</p></Link>
                    <Link to="/"><p>Twitter</p></Link>
                    <Link to="/"><p>Youtube</p></Link>
                    <Link to="/"><p>Facebook</p></Link>
                </div>
            </div>
        </div>
    </>
  )
}
