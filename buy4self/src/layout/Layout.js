import React from 'react';

const Layout = ({children}) => {
    return (
      <div className="container-fluid mt-3 mb-3 p-3 justify-content-center h-100 min-vh-100">
        <div className="row"> {children}</div>
      </div>
    );
};

export default Layout;