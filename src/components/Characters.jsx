import React, { useState, useContext } from 'react';

import {CharacterContext} from "../context/CharacterContext";
import Table from "./Table";
import SearchInput from './Input';
import { Link } from "react-router-dom";

export default function Characters() {

    const {value, value2} = useContext(CharacterContext);
    const [characters,setCharacters] = value;
    const [loading, setLoading] = value2;
    const [searchQuery, setSearchQuery] = useState("");

    const labels = {
        name: "name",
        birth_year: "birth year",
        gender: "gender"
    };

    const handleDelete = name => {
        setCharacters([...characters.filter(character => character.name !== name)]);
    };

    console.log(characters.length);

    const handleSearch = query => {
        setSearchQuery(query);
    }

    const getSearchedData = () => {
        let filtered = characters;
        if (searchQuery) {
            filtered = characters.filter(obj => {
                return Object.keys(obj).some(key => {
                    return obj[key].trim().toLowerCase().includes(searchQuery);
                })
            });
        }
        return filtered
    }

    return (
        <div className="row">
            <div className="col-10">
                <Link
                    to="/add"
                    className="btn btn-primary"
                    style={{ marginBottom: 20 }}
                >
                    New Character
          </Link>

                <SearchInput
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search..."
                    name="query"
                />

            {
                loading? <div>Content is loading </div>:
                <Table
                headerLabels={labels}
                characters={getSearchedData()}
                // characters={characters}
                onDelete={handleDelete}
            />
            }
            </div>
        </div>
    )
}
