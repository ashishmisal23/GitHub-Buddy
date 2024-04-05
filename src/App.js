import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import SearchResults from './components/SearchResults';

const App = () => {
    const [username, setUsername] = useState('');

    const sendUsername = (username) => {
        setUsername(username);
    };

    return (
        <Router>
            <Navbar />
            <Routes>

                <Route exact path="/" element={<Search searchquery={sendUsername} />} />
                <Route path="/searchresults/:username" element={<SearchResults username={username} />} />
            </Routes>
        </Router>
    )
}

export default App;
