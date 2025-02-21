import React from 'react';
import header from 'src/images/eader.jpg';

function Header(){
    return(
      <>
        <div style={{backgroundImage:`url(${header})`}}></div>
      </>
    );
}

export default Header;