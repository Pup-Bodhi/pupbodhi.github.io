import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import "./../App.css"

export default function About() {

    const navigate = useNavigate();

    return (
        <div>
            <div className="font-starline text-6xl lg:text-8xl py-3 text-center">about</div>
            <div className="text-center">Under construction! For now, please check out my profiles on FetLife and Recon.</div>
        </div>
    )
};