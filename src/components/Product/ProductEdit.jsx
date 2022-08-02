import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { EDITTUTORIAL } from "../../Services/Actions/actions"

const ProductEdit = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)
    const getdata = useSelector((state) => state.tutorialReducers)
    const compar = () => {
        const comparedata = getdata.filter((item) => {
            setDescription(item.description)
            setTitle(item.title)
        })

    }
    useEffect(() => {
        compar()
    }, [id])
    const handletSubmit = () => {
        console.log('dsfa');
        if (title && description) {
            dispatch(EDITTUTORIAL({ id, title, description }))
            setError(null)
            history("/product")
        } else {

        }

    }
    return (
        <div>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="title" />
            <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description" />
            <button type="submit" onClick={handletSubmit}>submit</button>
        </div>
    )
}

export default ProductEdit
