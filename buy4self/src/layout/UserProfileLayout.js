import React from 'react';
import UserProfileSidebar from '../components/UserProfileSidebar';

const UserProfileLayout = ({children}) => {
    return (
      <div className="container-fluid p-3 justify-content-center h-100 min-vh-100 mt-5" >
        <div className="row">
            <div className='col-sm-3'><UserProfileSidebar /></div>
            <div className='col-sm-9'>{children}</div>
        </div>
      </div>
    );
};

export default UserProfileLayout;
