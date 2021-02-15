import React from 'react';

function Search() {
    return (
        <form>
            <label>
                <input type="text" name="search" />
            </label>
            <input className="submitBtn" type="submit" value="Submit" />
        </form>
    )
}

export default Search