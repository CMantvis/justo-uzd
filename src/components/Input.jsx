import React from 'react'

export default function SearchInput({value,onChange,placeholder,name,label, error}) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
        <input type="text"
        name={name}
        className="form-control my-3"
        placeholder={placeholder}
        value={value}
        onChange={ e => onChange(e.target.value)}
        />
        { error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}
