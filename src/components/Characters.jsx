import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { CharacterContext } from "../context/CharacterContext";
import Table from "./Table";
import SearchInput from './Input';
import Pagination from './Pagination';

export default function Characters() {

    const { value, value2 } = useContext(CharacterContext);
    const [characters, setCharacters] = value;
    const [loading] = value2;
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10);

    const labels = {
        name: "name",
        birth_year: "birth year",
        gender: "gender",
        planet: "Homeworld"
    };

    const handleDelete = name => {
        setCharacters([...characters.filter(character => character.name !== name)]);
    };

    const handleSearch = query => {
        setSearchQuery(query);
        setCurrentPage(1)
    };

    const handlePageChange = page => {
        setCurrentPage(page)
    };

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
        const paginatedCharacters = filtered.slice(indexOfFirstChar, indexOfLastChar);
        return { totalCount: filtered.length, data: paginatedCharacters };
    };

    const { totalCount, data: filteredCharacters } = getPagedData();
    return (
        <div className="row">
            <div className="col-10">
                <p>total characters found: {totalCount}</p>
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
                    loading ? <h1 className="loading">Content is loading </h1> :
                        <Table
                            headerLabels={labels}
                            characters={filteredCharacters}
                            onDelete={handleDelete}
                        />
                }

                {
                    loading === true || (filteredCharacters.length < pageSize && currentPage === 1) ? null :
                        <Pagination
                            itemsCount={totalCount}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                }
            </div>
        </div>
    )
}
