import React from 'react'
import { useDispatch } from "react-redux"
import { INCREMENT_ONE, DECREMENT_ONE } from '../Services/Actions/actions'
import { useSelector } from 'react-redux'


const Home = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) =>
        state.cartReducer.count
    )
    const addItem = () => {
        dispatch(INCREMENT_ONE(1))
    }
    const removeItem = () => {
        dispatch(DECREMENT_ONE(1))
    }
    return (
        <div>
            <div>
                <button type="submit" onClick={addItem}>+</button>
                {count}
                <button type="submit" onClick={removeItem}>-</button>
            </div>
        </div>
    )
}

export default Home
