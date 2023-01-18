import React from "react";
import PropTypes from 'prop-types';

const Search = ({handleSearch, setInput, input}) =>{
    return(
        <form onSubmit={handleSearch}>
            <input type={'text'} onChange={e => setInput(e.target.value)} value={input} />
            <button className="block ml-auto rounded-md bg-complement1 text-accent2 p-1 m-2" type="submit">Search</button>
        </form>

    )
}

Search.propTypes = {
    handleSearch: PropTypes.func,
    setInput: PropTypes.func,
    input: PropTypes.string
}

export default Search;
