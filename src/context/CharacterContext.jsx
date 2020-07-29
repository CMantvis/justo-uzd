import React, { useState, createContext, useEffect } from 'react';
import axios from "axios";
export const CharacterContext = createContext();

export const CharacterProvider = props => {

    const dummydata = [
        {
            "name": "Luke Skywalker",
            "birth_year": "19BBY",
            "gender": "male",
        },
        {
            "name": "john seena",
            "birth_year": "18BBY",
            "gender": "male",
        },
        {
            "name": "davy johns",
            "birth_year": "19BBY",
            "gender": "male",
        },
    ];

    // const [characters, setCharacters] = useState([])
    const [characters,setCharacters] = useState(dummydata)
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     let persons = [];

    //     let person = {
    //         name: "",
    //         birth_year: "",
    //         gender: ""
    //     };

    //     function getDetail(apiURL) {
    //         axios.get(apiURL).then((response) => {
    //             showDetail(response.data);
    //         });
    //     };

    //     function showDetail(data) {
    //         for (let i = 0; i < data.results.length; i++) {
    //             person.name = data.results[i].name;
    //             person.birth_year = data.results[i].birth_year;
    //             person.gender = data.results[i].gender;
    //             persons.push(person);
                
    //             person = {
    //                 name: "",
    //                 birth_year: "",
    //                 gender: ""
    //             };
    //         }

    //         setCharacters([...characters, ...persons]);

    //         if (data.next) {
    //             getDetail(data.next);
    //         }
    //     };

    //     getDetail("https://swapi.dev/api/people/");
    //     setLoading(false);
    // }, []);

    return (
        <CharacterContext.Provider value={{value: [characters, setCharacters], value2: [loading,setLoading]}}>
            {props.children}
        </CharacterContext.Provider>
    )
}
