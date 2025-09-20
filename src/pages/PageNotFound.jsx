import { Link } from 'react-router-dom'
import pageNotFoundImage from './../assets/page_not_found.png'
import { useTitle } from '../hooks/useTitle'

export const PageNotFound = () => {

    useTitle('Page Not Found');

  return (
    <>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center my-4'>
                <p className='text-4xl font-bold'>Page not found</p>
                <div className='max-w-96'>
                    <img src={pageNotFoundImage} alt=""/>
                </div>
            </div>
            <div>
                <Link to="/"><button className='bg-pink-300 text-white p-2 m-2 rounded'>Back to Home</button></Link>
            </div>
        </div>
    </>
  )
}
