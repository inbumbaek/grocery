import React, { useState } from 'react';
import CreateGrocery from '../components/CreateGrocery';
import Display from '../components/Display';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const GroceryBag = (props) => {
    const navigate = useNavigate()
    const [allGroceries, setAllGroceries] = useState([]);
    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
        .then((res) => {
            navigate('/')
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-4">
                    <CreateGrocery allGroceries={allGroceries} setAllGroceries={setAllGroceries} />
                </div>
                <div className="col-md-6 mt-4">
                    <Display allGroceries={allGroceries} setAllGroceries={setAllGroceries} />
                </div>
            </div>
            <button className = "btn btn-primary" onClick={logout}>Logout</button>
        </div>
    )
}

export default GroceryBag;