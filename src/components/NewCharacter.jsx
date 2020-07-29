import React, {useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import {CharacterContext} from "../context/CharacterContext";
import Input from "./Input";

export default function NewCharacter() {

    let history = useHistory();
    const {value} = useContext(CharacterContext);
    const [characters,setCharacters] = value;
    const [name,setName] = useState("");
    const [birthYear,setBirthYear] = useState("");
    const [gender,setGender] = useState("");
    const [errors, setErrors] = useState({});

    const handleName = name => {
        setName(name);
    };

    const handleBirthYear = year => {
        setBirthYear(year);
    };

    const handleGenre = gender => {
        setGender(gender);
    };

    const validate = () => {
        const errors = {};

        if (name.trim() === "") {
            errors.name ="Name is required.";
        }

        if (birthYear.trim() === "") {
            errors.birthYear = "Birth year is required";
        }

        if (gender.trim() === "") {
            errors.gender = "Gender is required";
        }

        return Object.keys(errors).length === 0 ? null : errors;
    }

    const handleSubmit = e => {
        e.preventDefault()
        const errors = validate();

        if (errors === null) {
            setErrors({});
        } else {
            setErrors(errors);
        }

        if (errors) return

        const character = {
            name,
            birth_year: birthYear,
            gender
        }
        setCharacters([...characters, character])
        history.push("/characters");
    }

    return (
        <div>
            <h1>Add more characters</h1>
            <form onSubmit={handleSubmit}>
                <Input 
                    name="name"
                    placeholder="Characters name"
                    onChange={handleName}
                    value={name}
                    label="Name"
                    error={errors.name}
                />
                <Input 
                name="birthYear"
                placeholder="Characters birth year"
                onChange={handleBirthYear}
                value={birthYear}
                label="Birth year"
                error={errors.birthYear}
                />
                <Input 
                name="gender"
                placeholder="Characters gender"
                onChange={handleGenre}
                value={gender}
                label="Gender"
                error={errors.gender}
                />
                <button className="btn btn-add btn-large">Add</button>
            </form>
        </div>
    )
}
