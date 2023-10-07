import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {

    return (
        <header>
            <Link to="/">League Search Bar!</Link>
            <nav>
                <NavLink 
                    to="/Player"
                >
                    Host
                </NavLink>
                <NavLink 
                    to="/Champion"
                >
                    About
                </NavLink>

            </nav>
        </header>
    )
}