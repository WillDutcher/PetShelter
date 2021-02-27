import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { FaThumbsUp } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';

const SinglePet = (props) => {
    const { id } = props;
    const [ pet, setPet ] = useState({});
    const [ allPets, setAllPets ] = useState([]);
    const [ disable, setDisable ] = useState(false);
    let [ likes, setLikes ] = useState(0);

    const disableButton = () => {
        console.log("Clicked");
        setLikes(likes += 1);
        setDisable(true)
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${ id }`)
            .then((res) => {
                const pet = res.data;
                setPet(pet);
                console.log("Use Effect")
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);
    
    const adoptPet = (id) => {
        const temp_id = pet._id;
        console.log(temp_id)
        axios.delete(`http://localhost:8000/api/pets/${ id }`)
            .then((res) => {
                const updatedPetList = allPets.filter(pet => temp_id !== id)
                setAllPets(updatedPetList);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1 className="d-block">Pet Shelter</h1>
                { window.location.href === 'http://localhost:3000/' ? 
                    <Link to={ `/pets/new` }>add a pet to the shelter</Link>
                    : <Link className="d-block" to={ `/` }>back to home</Link>
                }
            </div>
            <div className="mb-3 d-flex justify-content-between align-content-center">
                <h2 className="">Details about: { pet.petName }</h2>
                <button className="btn btn-danger" onClick={() => adoptPet(id) }><FaHome className="mx-2 my-1" /> Adopt { pet.petName }</button>
            </div>
            <div className="pet-details">
                <div className="d-flex">
                    <div className="">
                        <div className="my-3 detail">Pet type:</div>
                        <div className="my-3 detail">Description:</div>
                        <div className="my-3 detail">Skills:</div>
                    </div>
                    <div className="">
                        <div className="my-3 detail-value">{ pet.petType }</div>
                        <div className="my-3 detail-value">{ pet.petDesc }</div>
                        <div className="my-3 detail-value">
                            <div className="my-1">{ pet.petSkillOne }</div>
                            <div className="my-1">{ pet.petSkillTwo }</div>
                            <div className="my-1">{ pet.petSkillThree }</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-block">
                        <div className="d-flex justify-content-around align-content-center">
                            <button 
                                disabled={ disable }
                                className="btn btn-sm btn-success d-flex justify-content-center"
                                onClick={ disableButton }
                            >
                                    <FaThumbsUp className="mx-2 my-1" />Like { pet.petName }
                            </button>
                            <h5 className="my-0">{ likes } like(s)</h5>
                            <h3></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePet;