import React from 'react';
import header from './image'

function Header(){
    return(
      <>
        <div style={{backgroundImage:`url(${header})`}}></div>
      </>
    );
}

export default Header;