import React from 'react';

const Footer = () => {
  return (
    <div className='p-4 bg-dark mt-3' >
        <div className='d-flex justify-content-center'>
        <img src={'https://www.thesportsdb.com/images/logo-tcdb.png'} alt="" />
        <img src={'https://www.thesportsdb.com/images/logo-tadb.png'} alt="" />
        <img src={'https://www.thesportsdb.com/images/logo-tmdb.png'} alt="" />
        </div>
        <p><small className='text-white'>Development by Mohammad Faisal</small></p>
        <p><small className='text-white'>© 2022 TheSportsDB.</small></p>
    </div>
  );
};

export default Footer;