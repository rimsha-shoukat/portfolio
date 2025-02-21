import React from 'react';
import headerBg from 'src/images/header.jpg';

function Header(){
    return(
      <>
        <div className={`bg-url(${headerBg})`}></div>
      </>
    );
}

export default Header;