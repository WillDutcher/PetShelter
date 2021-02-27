import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import PetForm from '../components/PetForm';

const UpdatePet = (props) => {
    const { id } = props;
    const [ petName, setPetName ] = useState();
    const [ petType, setPetType ] = useState();
    const [ petDesc, setPetDesc ] = useState();
    const [ petSkillOne, setPetSkillOne ] = useState();
    const [ petSkillTwo, setPetSkillTwo ] = useState();
    const [ petSkillThree, setPetSkillThree ] = useState();
    const [ loaded, setLoaded ] = useState(false);
    const [ errors, setErrors ] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${ id }`)
            .then((res) => {
                const pet = res.data;
                console.log(pet);
                setPetName(pet.petName);
                setPetType(pet.petType);
                setPetDesc(pet.petDesc);
                setPetSkillOne(pet.petSkillOne);
                setPetSkillTwo(pet.petSkillTwo);
                setPetSkillThree(pet.petSkillThree);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);

    const updatePet = (pet) => {
        axios.put(`http://localhost:8000/api/pets/${ id }`, {
            petName: pet.petName,
            petType: pet.petType,
            petDesc: pet.petDesc,
            petSkillOne: pet.petSkillOne,
            petSkillTwo: pet.petSkillTwo,
            petSkillThree: pet.petSkillThree
        })
            .then((res) => {
                console.log(res.data);
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
            <h2 className="">Edit { petName }</h2>
            {
                loaded && (
                    <PetForm initialPetName={ petName } initialPetType={ petType } initialPetDesc={ petDesc }
                        initialPetSkillOne={ petSkillOne } initialPetSkillTwo={ petSkillTwo} initialPetSkillThree={ petSkillThree }
                        onSubmitProp={ updatePet } initialErrors={ errors }
                    />
                )
            }
        </div>
    );
};

export default UpdatePet;