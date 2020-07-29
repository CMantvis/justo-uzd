import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import {CharacterContext} from "../context/CharacterContext";
import Table from "./Table";
import SearchInput from './Input';
import Pagination from './Pagination';

export default function Characters() {

    const {value, value2} = useContext(CharacterContext);
    const [characters,setCharacters] = value;
    const [loading, setLoading] = value2;
    const [searchQuery, setSearchQuery] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const labels = {
        name: "name",
        birth_year: "birth year",
        gender: "gender",
        planet: "Homeworld"
    };


    
    // console.log(indexOfLastChar)
    // console.log(indexOfFirstChar)
    // console.log(characters)
    // console.log(currentChar)

    const handleDelete = name => {
        setCharacters([...characters.filter(character => character.name !== name)]);
    };

    const handleSearch = query => {
        setSearchQuery(query);
    };

    const handlePageChange = page => {
        console.log(page)
        setCurrentPage(page)
    }

    const getPagedData = () => {
        
        const indexOfLastChar = currentPage * pageSize;
        const indexOfFirstChar = indexOfLastChar - pageSize;

        let filtered = characters;
        if (searchQuery) {
            filtered = characters.filter(obj => {
                return Object.keys(obj).some(key => {
                    return obj[key].trim().toLowerCase().includes(searchQuery);
                })
            });
        }
        return filtered.slice(indexOfFirstChar, indexOfLastChar);
    }

    const filteredCharacters = getPagedData();

    return (
        <div className="row">
            <div className="col-10">
                <p>{filteredCharacters.length}</p>
                <Link
                    to="/add"
                    className="btn btn-add"
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
                characters={filteredCharacters}
                // characters={characters}
                onDelete={handleDelete}
            />
            }

                <Pagination 
                totalCharacters={characters.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                />
            

            </div>
        </div>
    )
}
