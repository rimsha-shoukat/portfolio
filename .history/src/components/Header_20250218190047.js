import React from 'react';
import headerBg from './src/images/header.jp';

function Header(){
    return(
      <>
        <div className={`bg-url(${headerBg})`}></div>
      </>
    );
}

export default Header;