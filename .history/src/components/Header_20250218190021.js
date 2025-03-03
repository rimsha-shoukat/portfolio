import React from 'react';
import headerBg from './sr/images/header.jpg';

function Header(){
    return(
      <>
        <div className={`bg-url(${headerBg})`}></div>
      </>
    );
}

export default Header;