import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Add_TUTORIAL } from '../../Services/Actions/actions'
import { useNavigate } from "react-router-dom"

const Productadd = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const history = useNavigate()

    const handletSubmit = () => {
        if (title && description) {
            dispatch(Add_TUTORIAL({ title, description }))
            setError(null)
            history("/product")
        } else {
            setError("Fill in all field")
        }
        setDescription('')
        setTitle('')
    }

    return (
        <div>
            <h3>hello </h3>
            {error && error}
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="title" />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} name="description" />
            <button type="submit" onClick={handletSubmit}>submit</button>
        </div >
    )
}

export default Productadd
