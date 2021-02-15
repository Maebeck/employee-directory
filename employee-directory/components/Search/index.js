import React from 'react';

function Search(props) {
    return (
        <input className = 'form-control mr-sm-2' type='search' placeholder = 'Searchbar' label= 'Search for a user!' onChange = {props.handleSearch} />
    )
};

export default Search;