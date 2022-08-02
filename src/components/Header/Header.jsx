import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import user from "../../image/download.jpg"
import { fetchAsyncMovie, fetchAsyncShows } from '../features/movies/moviesSlice'
import "./Header.scss"

const Header = () => {
    const [term, setTerm] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchAsyncMovie(term))
        dispatch(fetchAsyncShows(term))
        setTerm(" ")
    }
    return (
        <div className='header'>
            <div className="logo">
                <Link to="/">Movie app</Link>
            </div>
            <div className='search-bar'>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={term} placeholder='Search movie in text' onChange={(e) => setTerm(e.target.value)}></input>
                    <button type="submit"><i className='fa fa-search'></i></button>
                </form>
            </div>
            <div className='user-image'>
                <img src={user} alt="user" />
            </div>
        </div>
    )
}

export default Header
