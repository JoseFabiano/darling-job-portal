import React from 'react';
import { Background } from './styles';
import { Link } from 'react-router-dom';

export const NavbarHome = () => {
  return (
    <>
      <Background>
        <img src="logo.svg" alt="Logo do projeto" id="logo-projeto" />
        <Link to="/login">
          <img src="user-blue.svg" alt="Logo do usuário" id="logo-usuario" />
        </Link>
      </Background>
    </>
  );
};
