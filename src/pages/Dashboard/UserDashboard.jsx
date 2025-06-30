import React from 'react'

function UserDashboard() {

  return (
    <div className="grid sm:grid-cols-2 mt-2 ">
      <div className="align-middle">
        <div className='w-1/2 m-auto mt-2'>
        
          <aside>
            <li>Account Details</li>
            <li>Order Details</li>
          </aside>
        </div>
      </div>

      <div className="">
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