import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import mainLogo from '../../img/YELLOW-3.png';
import './Splash.css';

const Splash = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const loginURL = 'http://localhost:3001/users';
  const marianaGithub = 'https://github.com/marurevi';
  const andresGithub = 'https://github.com/anagudelogu';
  const axelGithub = 'https://github.com/AxelSoler';
  const tadesseGithub = 'https://github.com/Tadesse-Alemayehu';

  const userSubmit = async (e) => {
    e.preventDefault();
    axios.get(loginURL).then((response) => {
      const data = response.data
        .filter((item) => item.name === userName && item.password === userPassword);
      if (data[0]) {
        setUserName('');
        setUserPassword('');
        window.location.href = '/Rooms';
      }
    });
  };
  return (
    <div className="splash-page">
      <img src={mainLogo} alt="mainLogo" className="mainLogo" />
      <form className="login-form" onSubmit={userSubmit}>
        <div className="title-splash">
          <h2 className="welcome">WELCOME</h2>
          <NavLink className="register-link" to="signup">REGISTER</NavLink>
        </div>
        <input onChange={(e) => setUserName(e.target.value)} className="loginInput" type="text" placeholder="User" required />
        <input onChange={(e) => setUserPassword(e.target.value)} className="loginInput" type="text" placeholder="Password" required />
        <button className="loginBtn" type="submit">LOGIN</button>
      </form>
      <footer className="footer">
        <li className="profile">Microverse Final Capstone Team</li>
        <ul className="ulProfile">
          <li><a className="profile" href={marianaGithub} target="_blank" rel="noopener noreferrer">Mariana</a></li>
          <li><a className="profile" href={andresGithub} target="_blank" rel="noopener noreferrer">Andres</a></li>
          <li><a className="profile" href={axelGithub} target="_blank" rel="noopener noreferrer">Axel</a></li>
          <li><a className="profile" href={tadesseGithub} target="_blank" rel="noopener noreferrer">Tadesse</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Splash;
