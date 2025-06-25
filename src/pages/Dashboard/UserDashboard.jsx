import React from 'react'

function UserDashboard() {

  return (
    <div className="flex ">
      <div>
        <aside>
          <li>Account Details</li>
          <li></li>
          <li></li>
        </aside>
      </div>

      <div className=''>
        <div>
          <h1 className="text-3xl">My Account</h1>
        </div>

        <main className="">
          <div>Welcome to The Store {localStorage.getItem("fullName")}</div>
        </main>
      </div>
    </div>
  );
}

export default UserDashboard