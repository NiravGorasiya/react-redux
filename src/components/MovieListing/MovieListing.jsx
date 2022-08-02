import React from 'react'
import Slider from "react-slick"
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../features/movies/moviesSlice'
import MovileCard from '../MovieCard/MovileCard'
import "./MovieListing.scss"
import { setting } from '../common/setting'
const MovieListing = () => {

    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)

    let renderMovie, renderShows = " "
    renderMovie = movies.Response === "True" ? (
        movies.Search.map((movie, index) => (
            <MovileCard key={index} data={movie} />
        ))
    ) : (
        <div className="movie-error">
            {movies.error}
        </div >
    );
    renderShows = shows.Response === "True" ? (
        shows.Search.map((shows, index) => (
            <MovileCard key={index} data={shows} />
        ))
    ) : (
        <div className="movie-error">
            {shows.error}
        </div >
    );



    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    <Slider {...setting}>
                        {renderMovie}
                    </Slider>
                </div>
            </div>
            <div className='shows-list'>
                <h2>Shows</h2>
                <div className='movie-container'>
                    <Slider {...setting}>
                        {renderShows}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default MovieListing
