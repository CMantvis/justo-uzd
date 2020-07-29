import React from 'react'

export default function Table({headerLabels, characters, onDelete}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>{headerLabels.name}</th>
                    <th>{headerLabels.birth_year}</th>
                    <th>{headerLabels.gender}</th>
                </tr>
            </thead>

            <tbody>
                {
                    characters.map(person => (
                        <tr key={Math.random()}>
                            <td>{person.name}</td>
                            <td>{person.birth_year}</td>
                            <td>{person.gender}</td>
                            <td><button className="btn btn-danger" onClick={() => onDelete(person.name)}>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
