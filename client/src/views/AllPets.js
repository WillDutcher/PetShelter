import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllPets = (props) => {
    const [ pets, setPets ] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets`)
            .then((res) => {
                console.log(res.data);
                setPets(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1 className="d-block">Pet Shelter</h1>
                {/* { window.location.href === 'http://localhost:3000/' ? 
                    <Link to={ `/pets/new` }>add a pet to the shelter</Link>
                    : <Link className="d-block" to={ `/` }>back to home</Link>
                } */}
                { window.location.href === 'http://3.138.140.202/' ? 
                    <Link to={ `/pets/new` }>add a pet to the shelter</Link>
                    : <Link className="d-block" to={ `/` }>back to home</Link>
                }
            </div>
	    <h5><Link to={ '/pets/new' }>add a pet to the shelter</Link></h5>
            <Link to={ `/pets/new` }>add a pet to the shelter</Link>
            <h2>These pets are looking for a good home</h2>
            <table id="" className="table table-striped table-bordered table-hover mt-3">
                <thead>
                    <tr>
                        <th className="table-dark">Pet Name</th>
                        <th className="table-dark">Type</th>
                        <th className="table-dark">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((pet, index) => {
                            return (
                                <tr key={ index }>
                                    <td className="">{ `${ pet.petName }` }</td>
                                    <td className="">{ `${ pet.petType }` }</td>
                                    <td><Link to={ `/pets/${ pet._id }` }>details</Link> | <Link to={ `/pets/${ pet._id }/edit` }>edit</Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllPets;
