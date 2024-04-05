import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navbar = {
        top: 0,
        minWidth: "100vh",
        minHeight: "2rem",
        backgroundColor: "#6524cc",
        padding: "10px 20px"
    }
    const navbarList = {

        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        listStyle: "none",
        textDecoration: "none",
        fontFamily: "Poppins",
        color: "white",
        fontSize: "1.5rem",
        fontWeight: "bold",
        gap: "10px"
    }
    return (


        <nav style={navbar}>
            <Link style={navbarList} to="/">
                <div>
                    <FaGithub /> Git Hub Buddy
                </div>

            </Link>
        </nav>
    )
}

export default Navbar