import React from 'react'

function UserDashboard() {

  return (
    <div>
        <div><h1 className='text-3xl'>My Account</h1></div>
      <div>Welcome to The Store {localStorage.getItem("fullName")}</div>
    </div>
  );
}

export default UserDashboard