import React from 'react';
import UserProfileSidebar from '../components/UserProfileSidebar';

const UserProfileLayout = ({ children }) => {
  return (
    <div
      className="container-fluid p-3 justify-content-center h-100 min-vh-100 mt-5"
    >
      <div className="row mt-3">
        <div className='col-12 mb-3 mb-md-0 col-sm-12 col-md-4 col-xl-3'>
          <UserProfileSidebar />
        </div>
        <div className='col-12 col-sm-12 col-md-8 col-xl-9'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default UserProfileLayout;
