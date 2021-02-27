import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { FaUpload } from 'react-icons/fa';

const PetForm = (props) => {
    const { initialPetName,
            initialPetType,
            initialPetDesc,
            initialPetSkillOne,
            initialPetSkillTwo,
            initialPetSkillThree,
            initialErrors,
            onSubmitProp } =  props;
    const [ petName, setPetName ] = useState(initialPetName);
    const [ petType, setPetType ] = useState(initialPetType);
    const [ petDesc, setPetDesc ] = useState(initialPetDesc);
    const [ petSkillOne, setPetSkillOne ] = useState(initialPetSkillOne);
    const [ petSkillTwo, setPetSkillTwo ] = useState(initialPetSkillTwo);
    const [ petSkillThree, setPetSkillThree ] = useState(initialPetSkillThree);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ petName, petType, petDesc, petSkillOne, petSkillTwo, petSkillThree});
    };

    return (
        <div className="pet-form">
            <form onSubmit={ onSubmitHandler }>
                <div className="d-flex justify-content-center">
                    <div className="form-column">
                        <div className="form-group">
                            <label className="d-block" htmlFor="petName">Pet Name:
                                { initialErrors && (
                                    <>
                                        { initialErrors.petName ?
                                            <span className="ml-3 text-danger">{ initialErrors.petName.message }</span>
                                            : null
                                        }
                                    </>
                                )}
                            </label>
                            <input
                                id="petName"
                                name="petName"
                                className=""
                                type="text"
                                placeholder="Enter pet name"
                                onChange={ (e) => setPetName(e.target.value) }
                                value={ petName }
                            />
                        </div>
                        <div className="form-group">
                            <label className="d-block" htmlFor="petType">Pet Type:
                                { initialErrors && (
                                    <>
                                        { initialErrors.petType ?
                                            <span className="ml-3 text-danger">{ initialErrors.petType.message }</span>
                                            : null
                                        }
                                    </>
                                )}
                            </label>
                            <input
                                id="petType"
                                name="petType"
                                className=""
                                type="text"
                                placeholder="Enter pet type"
                                onChange={ (e) => setPetType(e.target.value) }
                                value={ petType }
                            />
                        </div>
                        <div className="form-group">
                            <label className="d-block" htmlFor="petDesc">Pet Description:
                                { initialErrors && (
                                    <>
                                        { initialErrors.petDesc ?
                                            <span className="ml-3 text-danger">{ initialErrors.petDesc.message }</span>
                                            : null
                                        }
                                    </>
                                )}
                            </label>
                            <input
                                id="petDesc"
                                name="petDesc"
                                className=""
                                type="text"
                                placeholder="Enter pet description"
                                onChange={ (e) => setPetDesc(e.target.value) }
                                value={ petDesc }
                            />
                        </div>
                    </div>
                    <div className="form-column">
                        <p>Skills (optional):</p>
                        <div className="form-group">
                            <label className="d-block" htmlFor="petSkillOne">Skill 1:
                                { initialErrors && (
                                    <>
                                        { initialErrors.petSkillOne ?
                                            <span className="ml-3 text-danger">{ initialErrors.petSkillOne.message }</span>
                                            : null
                                        }
                                    </>
                                )}
                            </label>
                            <input
                                id="petSkillOne"
                                name="petSkillOne"
                                className=""
                                type="text"
                                placeholder="Enter pet skill"
                                onChange={ (e) => setPetSkillOne(e.target.value) }
                                value={ petSkillOne }
                            />
                        </div>
                        <div className="form-group">
                            <label className="d-block" htmlFor="petSkillTwo">Skill 2:
                                { initialErrors && (
                                    <>
                                        { initialErrors.petSkillTwo ?
                                            <span className="ml-3 text-danger">{ initialErrors.petSkillTwo.message }</span>
                                            : null
                                        }
                                    </>
                                )}
                            </label>
                            <input
                                id="petSkillTwo"
                                name="petSkillTwo"
                                className=""
                                type="text"
                                placeholder="Enter pet skill"
                                onChange={ (e) => setPetSkillTwo(e.target.value) }
                                value={ petSkillTwo }
                            />
                        </div>
                        <div className="form-group">
                            <label className="d-block" htmlFor="petSkillThree">Skill 3:
                                { initialErrors && (
                                    <>
                                        { initialErrors.petSkillThree ?
                                            <span className="ml-3 text-danger">{ initialErrors.petSkillThree.message }</span>
                                            : null
                                        }
                                    </>
                                )}
                            </label>
                            <input
                                id="petSkillThree"
                                name="petSkillThree"
                                className=""
                                type="text"
                                placeholder="Enter pet skill"
                                onChange={ (e) => setPetSkillThree(e.target.value) }
                                value={ petSkillThree }
                            />
                        </div>
                    </div>
                </div>
                {
                    initialPetName === "" || initialPetName === null ?
                        <button className="btn btn-sm btn-primary" type="submit"><FaUpload className="mx-2 my-1" />Add Pet</button>
                        : <button className="btn btn-sm btn-primary" type="submit"><FaPen className="mx-2 my-1" />Edit Pet </button>
                }
                {/* <button className="btn btn-sm btn-primary" type="submit" >
                    {
                        initialPetName === "" || initialPetName === null ?
                            "Add Pet" : "Edit Pet"
                    }
                </button> */}
            </form>
        </div>
    );
};

export default PetForm;