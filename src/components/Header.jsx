import React from 'react';

const logocss = {
  width: '50px',
}

const Header = () => {
  return (
    <header>
      <img src='./src/assets/images/senac_logo.png' style={logocss}></img> {' - '}
      Quiz Senac
    </header>
  );
};

export default Header;