import React, { useState, useRef } from "react";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { useNavigate } from "react-router-dom";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import "./../App.css"

export default function Navbar() {

    const navigate = useNavigate();

    const navbarLinkStyle = {
        padding: 0,
        textDecoration: 'underline',
        cursor: 'pointer',
        textAlign: 'center',
    }

    return (
        <nav className="flex justify-content-between gap-3 lg:gap-5 align-items-center w-full">
            <div className="font-starline text-2xl text-800">Pup_Bodhi</div>
            <div className="flex row-reverse gap-2 align-items-center justify-content-end text-800 flex-wrap lg:flex-nowrap">
            <a className="nav-link" onClick={() => navigate("/")} style={navbarLinkStyle}>home</a>
            •
            <a className="nav-link" onClick={() => navigate("/about")} style={navbarLinkStyle}>about</a>
            •
            <a className="nav-link" href="https://bsky.app/profile/pup-bodhi.bsky.social" style={navbarLinkStyle}>horny stuff</a>
            {/* •
            <a className="nav-link" onClick={() => navigate("/blog")} style={navbarLinkStyle}>blog</a> */}
            •
            <a className="nav-link" href="https://bodhirubberworks.etsy.com" style={navbarLinkStyle}>Bodhi Rubberworks</a>
            •
            <a className="nav-link" onClick={() => navigate("/vetting-form")} style={navbarLinkStyle}>play with me</a>
            {/* •
            <a className="nav-link" onClick={() => navigate("/links")} style={navbarLinkStyle}>links & socials</a> */}
            </div>
        </nav>
    )
}