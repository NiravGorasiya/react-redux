import React, { useEffect } from 'react'
import MovieApi from '../common/apis/MovieApi'
import MovieListing from '../MovieListing/MovieListing'
import { APIKey } from '../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovie, fetchAsyncShows } from '../features/movies/moviesSlice'

const Home = () => {
    const dispatch = useDispatch()
    const movieText = "RRR"
    const ShowText = "vikings"
    useEffect(() => {
        dispatch(fetchAsyncMovie(movieText))
        dispatch(fetchAsyncShows(ShowText))
    }, [dispatch])
    return (
        <div>
            <div className='banner-img'></div>
            <MovieListing />
        </div >
    )
}

export default Home
