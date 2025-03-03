import React from 'react';
import headerBg from './images/header.jpg';

function Header(){
    return(
      <>
        <div className={`bg-url(${header})`}></div>
      </>
    );
}

export default Header;