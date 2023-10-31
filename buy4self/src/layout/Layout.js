import React from 'react';

const Layout = ({children}) => {
    return (
      <div className="container-fluid p-3 justify-content-center h-100 min-vh-100 mt-5" >
        <div className="row"> {children}</div>
      </div>
    );
};

export default Layout;
