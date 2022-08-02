import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Productdetail = () => {
    const { id } = useParams()
    const data = useSelector((state) => state.productReducers.product)
    console.log(data);
    return (
        <div>
            <h2>hello</h2>
        </div>
    )
}

export default Productdetail
