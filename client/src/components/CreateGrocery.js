import React, { useState } from 'react';
import axios from 'axios'

const CreateGrocery = (props) => {
    const { allGroceries, setAllGroceries } = props;

    const [grocery, setGrocery] = useState({
        groceryItem: '',
        quantity: ''
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setGrocery({ ...grocery, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newGrocery', grocery, { withCredentials: true })
            .then((res) => {
                console.log(res);
                setAllGroceries([...allGroceries, res.data]);
                setGrocery({
                    groceryItem: '',
                    quantity: ''
                });
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div className="container py-4">
            <h2 className="text-green-custom">Add to My Grocery Bag</h2>
            <form className="needs-validation text-center" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="groceryItem" className="text-dark font-weight-bold">Grocery Item</label>
                    <div className="d-flex justify-content-center">
                        <input type="text" className="form-control custom-form-control" onChange={changeHandler} value={grocery.groceryItem} name="groceryItem" />
                    </div>
                    {
                        errors.groceryItem ?
                            <p className='text-danger'>{errors.groceryItem.message}</p> :
                            null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="quantity" className="text-dark font-weight-bold">Quantity</label>
                    <div className="d-flex justify-content-center">
                        <input type="number" className="form-control custom-form-control" onChange={changeHandler} value={grocery.quantity} name="quantity" />
                    </div>
                    {
                        errors.quantity ?
                            <p className='text-danger'>{errors.quantity.message}</p> :
                            null
                    }
                </div>
                <button type="submit" className="btn btn-green-custom btn-lg">Add</button>
            </form>
        </div>
    )
}

export default CreateGrocery;