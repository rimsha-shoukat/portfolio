import React from 'react';
import header from '.src/images/header.jpg';

function Header(){
    return(
      <>
        <div style={{backgroundImage:`url(${header})`}}></div>
      </>
    );
}

export default Header;