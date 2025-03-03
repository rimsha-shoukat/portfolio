import React from 'react';
import headerBg from '';

function Header(){
    return(
      <>
        <div className={`bg-url(${headerBg})`}></div>
      </>
    );
}

export default Header;