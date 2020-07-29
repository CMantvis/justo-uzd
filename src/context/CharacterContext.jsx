import React, { useState, createContext, useEffect } from 'react';
import axios from "axios";
export const CharacterContext = createContext();

export const CharacterProvider = props => {

    const dummydata = [
        {
            "name": "Luke Skywalker",
            "birth_year": "19BBY",
            "gender": "male",
            "planet": "baba"
        },
        {
            "name": "john seena",
            "birth_year": "18BBY",
            "gender": "male",
            "planet": "baba"
        },
        {
            "name": "davy johns",
            "birth_year": "19BBY",
            "gender": "male",
            "planet": "baba"
        },
        {
            "name": "davy johns",
            "birth_year": "19BBY",
            "gender": "male",
            "planet": "baba"
        },
        {
            "name": "davy johns",
            "birth_year": "19BBY",
            "gender": "male",
            "planet": "baba"
        },
        {
            "name": "davy johns",
            "birth_year": "19BBY",
            "gender": "male",
            "planet": "baba"
        },
        {
            "name": "davy johns",
            "birth_year": "19BBY",
            "gender": "male",
            "planet": "baba"
        },
        {
            "name": "davy johns",
            "birth_year": "19BBY",
            "gender": "male",
            "planet": "baba"
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
    //         gender: "",
    //         planet: ""
    //     };

    //     function getDetail(apiURL) {
    //         axios.get(apiURL).then((response) => {
    //             showDetail(response.data);
    //         });
    //     };

    //     function getPlanet(url,name, birth_year,gender) {
    //         return axios.get(url)
    //         .then(rez => {
    //             let homeworld = rez.data.name;
    //             console.log(rez.data.name)
    //             person.planet = homeworld;
    //             person.name = name;
    //             person.birth_year = birth_year;
    //             person.gender = gender;

    //             persons.push(person);

    //             person = {
    //                 name: "",
    //                 birth_year: "",
    //                 gender: "",
    //                 planet: ""
    //             };
    //         })
    //     }

    //     function showDetail(data) {
    //         for (let i = 0; i < data.results.length; i++) {
    //             let name = data.results[i].name;
    //             let birth_year = data.results[i].birth_year;
    //             let gender = data.results[i].gender;
    //             let homeworldUrl = data.results[i].homeworld;
    //             getPlanet(homeworldUrl, name, birth_year, gender);
    //             // persons.push(person);
    //         }

    //         setCharacters([...characters, ...persons]);

    //         if (data.next) {
    //             getDetail(data.next);
    //         }
    //     };

    //     // axios.get("https://swapi.dev/api/planets/1/").then( rez => console.log(rez.data.name))

    //     getDetail("https://swapi.dev/api/people/");
    //     setLoading(false);
    // }, []);

        console.log(characters);
    return (
        <CharacterContext.Provider value={{value: [characters, setCharacters], value2: [loading,setLoading]}}>
            {props.children}
        </CharacterContext.Provider>
    )
}
