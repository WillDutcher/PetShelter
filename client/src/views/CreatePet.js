import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import PetForm from '../components/PetForm';

const CreatePet = (props) => {
    const [ errors, setErrors ] = useState();

    const addPet = (pet) => {
        axios.post(`http://localhost:8000/api/pets`, pet)
            .then((res) => {
                console.log(res);
                navigate(`/`);
            })
            .catch((err) => {
                console.log(err.response);
                setErrors(err.response.data.errors);
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
            <h2 className="">Know a pet needing a home?</h2>
            <PetForm
                initialPetName="" initialPetType="" initialPetDesc=""
                initialPetSkillOne="" initialPetSkillTwo="" initialPetSkillThree=""
                onSubmitProp={ addPet } initialErrors={ errors }
            />
        </div>
    );
};

export default CreatePet;