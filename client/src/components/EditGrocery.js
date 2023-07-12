import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const EditGrocery = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [grocery, setGrocery] = useState({
        groceryItem: '',
        quantity: ''
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setGrocery({ ...grocery, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneGrocery/${id}`)
            .then((res) => {
                setGrocery(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateGrocery/${id}`, grocery)
            .then((res) => {
                console.log(res);
                navigate('/groceryBag')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div className="container py-4">
            <form className="needs-validation" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="groceryItem" className="text-dark font-weight-bold">Grocery Item</label>
                    <input type="text" className="form-control custom-input" onChange={changeHandler} value={grocery.groceryItem} name='groceryItem' required />
                    {
                        errors.groceryItem ?
                            <p className='text-danger'>{errors.groceryItem.message}</p> :
                            null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="quantity" className="text-dark font-weight-bold">Quantity</label>
                    <input type="number" className="form-control custom-input" onChange={changeHandler} value={grocery.quantity} name='quantity' required />
                    {
                        errors.quantity ?
                            <p className='text-danger'>{errors.quantity.message}</p> :
                            null
                    }
                </div>
                <div className="custom-button-container">
                    <button type="submit" className="btn btn-primary custom-button btn-block">Update</button>
                </div>
            </form>
            <a href="/" className="btn btn-green-custom mt-3">Back to My Grocery Bag</a>
        </div>
    )
}

export default EditGrocery;