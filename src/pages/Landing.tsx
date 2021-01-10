import React from 'react';

import { Link } from 'react-router-dom';

import {FaChevronRight} from 'react-icons/fa';
import "../styles/pages/landing.css";

import logoImg from '../images/logo2.png'

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="rever e aprender" />
        <main>
          <h1>Reforço escolar Rever e Aprender</h1>
          <p>Visite-nos e confira!</p>
        </main>

        <div className="location">
          <strong>Belém</strong>
          <span>Pará</span>
        </div>

        <Link to="/app" className="enter-app">
          <FaChevronRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}