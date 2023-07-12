import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Display = (props) => {
    const { allGroceries, setAllGroceries } = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/allGroceries')
            .then((res) => {
                console.log(res);
                setAllGroceries(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deleteHandler = (id) => {
        axios
            .delete(`http://localhost:8000/api/deleteGrocery/${id}`)
            .then((res) => {
                console.log(res);
                setAllGroceries(allGroceries.filter((grocery) => grocery._id !== id));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container py-4">
            <h2 className="text-green-custom text-center mb-4">My Grocery Bag</h2>
            <table className="table table-bordered table-striped">
                <thead className="table-secondary">
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allGroceries.map((grocery) => {
                        return (
                            <tr key={grocery._id}>
                                <td>{grocery.groceryItem}</td>
                                <td>{grocery.quantity}</td>
                                <td>
                                    <Link to={`/updateGrocery/${grocery._id}`} className="btn btn-green-custom">
                                        Edit
                                    </Link>
                                    <button onClick={() => deleteHandler(grocery._id)} className="btn btn-green-custom delete-button">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Display;
