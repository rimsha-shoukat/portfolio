import React from 'react';
import header from '.s/images/header.jpg';

function Header(){
    return(
      <>
        <div style={{backgroundImage:`url(${header})`}}></div>
      </>
    );
}

export default Header;