import React from 'react';
function Header(){
    return(
      <>
        <div className="w-100vw h-90vh bg-[url('/header-bg.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/30"></div>
          <div className='relative'>
              hello Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est voluptatem illum nemo eos eveniet repudiandae earum, molestiae distinctio a numquam quo debitis velit laborum rem ratione maxime quae dicta fuga.
          </div>
          <div></div>
        </div>
      </>
    );
}

export default Header;