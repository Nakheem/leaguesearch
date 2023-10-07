import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import SearchBar from "./SearchBar"

export default function Layout({championNames}) {
    return (
        <div>
        <Header />
        <SearchBar championNames={championNames}/>
            <main>
                <Outlet />
            </main>
        </div>
    )
}