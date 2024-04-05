import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = ({ searchquery }) => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the searchquery function directly with the username
        searchquery(username);
        navigate(`/searchresults/${username}`);
    };

    return (

        <div className="container">

            <div className='formcontainer'>
                <h1>GitHub User Search</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        autoFocus
                        value={username}
                        onChange={handleInputChange}
                        placeholder="Enter Github Username Here!"
                        required
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search;
