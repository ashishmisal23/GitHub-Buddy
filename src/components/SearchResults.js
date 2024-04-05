import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const SearchResults = ({ username }) => {
    const BaseURL = 'https://api.github.com/users';

    const [userData, setUserData] = useState(null);
    const [reposData, setReposData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResp = await fetch(`${BaseURL}/${username}`);
                const userData = await userResp.json();
                setUserData(userData);

                const reposResp = await fetch(`${BaseURL}/${username}/repos`);
                const reposData = await reposResp.json();
                setReposData(reposData);

                console.log(userData, reposData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
         


        };

        fetchData();

    }, [username]);

    const goBack = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div id='search-result'>
            <div id="main" className="main">
                {userData ? (
                    <div className='card'>
                        <div className='avtar-container'>
                            <img
                                className="avatar"
                                src={userData.avatar_url}
                                alt={userData.name}
                            />
                        </div>
                        <div className="user-info">
                            <h2>{userData.name}</h2>
                            <p>{userData.bio ? userData.bio : "Bio Not Available"}</p>
                            <ul className="info">
                                <li>
                                    {userData.followers} <strong>Followers</strong>
                                </li>
                                <li>
                                    {userData.following} <strong>Following</strong>
                                </li>
                                <li>
                                    {userData.public_repos} <strong>Repos</strong>
                                </li>
                            </ul>
                            <div id="repos">
                                {
                                    userData.public_repos >= 0 ? (
                                        <div id="repo-item">
                                            {reposData.map((repo) => (
                                                <Link
                                                    key={repo.id}
                                                    className="repo"
                                                    to={repo.html_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {repo.name}
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <p id='error-msg'>No Repos are Present</p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='msg-container'>
                        <p id='error-msg'>Something Went Wrong...</p>
                    </div>
                )}
            </div>
            <button onClick={goBack} id='search-another-btn'>Search Another User</button>
        </div>
    );
};

export default SearchResults;
