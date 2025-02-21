import React from 'react';
import header from 'src/imagesheader.jpg';

function Header(){
    return(
      <>
        <div style={{backgroundImage:`url(${header})`}}></div>
      </>
    );
}

export default Header;