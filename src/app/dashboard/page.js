import React from 'react'
import Sidebar from '../component/sidebar/page';

function page() {
  return (
    <div className="flex">
    <div>
        <Sidebar />
    </div>
    <div>
      <h1>Dashboard Page</h1>
    </div>
    </div>
  )
}

export default page