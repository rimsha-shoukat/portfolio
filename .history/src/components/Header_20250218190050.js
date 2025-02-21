import React from 'react';
import headerBg from 'E:\3D Objects\portfolio\src\images\header.jpg';

function Header(){
    return(
      <>
        <div className={`bg-url(${headerBg})`}></div>
      </>
    );
}

export default Header;