import React from 'react'
import './usersLists.css'

export default function SearchBox({ onChange }) {
    return (
        <input type="text"
            name="search"
            placeholder="Search By Name..." 
            onChange={onChange}
            className="seachInput"
         />
    )
}
