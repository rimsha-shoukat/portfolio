import React from 'react';
import header from './images/header.j'

function Header(){
    return(
      <>
        <div style={{backgroundImage:`url(${header})`}}></div>
      </>
    );
}

export default Header;