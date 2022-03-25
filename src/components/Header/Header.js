import React from 'react';

const Header = () => {
  return (
    <div className='row w-100 mt-5 mb-5'>
        <div className="col-md-4">
        <img src={'https://www.thesportsdb.com/images/main12.png'} alt="" />
        </div>
        <div className="col-md-4 text-white">
          <h3 className='fw-bold'>Welcome to TheSportsDB</h3>
          <p>
          An open, crowd-sourced database of sports artwork and metadata with a free API.
          The content here is only possible thanks to the hard work of our users.
          If you like the site, please consider registering as an editor or click below...
          </p>     
          <img width={'200px'} src={'https://www.thesportsdb.com/images/patreon_logo.png'} alt="" /> 
        </div>
        <div className="col-md-4">
          <img src={'https://www.thesportsdb.com/images/main224.png'} alt="" />
        </div>
        <hr className='text-white mt-5' />
        <h4 className='text-white'>Match Centre YouTube Highlights</h4>
    </div>
  );
};

export default Header;