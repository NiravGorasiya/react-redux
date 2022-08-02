import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { DELETETUTORIAL, EDITTUTORIAL, REMOVE_ALL_TUTORIAL } from '../../Services/Actions/actions'

const Product = () => {
    const history = useNavigate()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.tutorialReducers)
    const dataAdd = () => {
        history("/productadd")
    }
    const deleteToturial = (id) => {
        dispatch(DELETETUTORIAL(id))
        history("/product")
    }
    const removeAll = () => {
        dispatch(REMOVE_ALL_TUTORIAL())
    }
    return (
        <div>
            <button onClick={dataAdd} >Add tutorial</button>
            <table border="1">
                <thead>
                    <tr>
                        <th>title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>
                                <button onClick={() => deleteToturial(item.id)}>Delete</button>
                                <NavLink to={"/product/" + item.id} >
                                    <button> Edit</button>
                                </NavLink>
                            </td>
                        </tr>
                    )) : " not data found"}
                </tbody>
            </table>
            <button onClick={removeAll}>removeAll</button>
        </div>
    )
}

export default Product
