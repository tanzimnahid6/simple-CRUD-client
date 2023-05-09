// import React from 'react';

import { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"

const Users = () => {
  const data = useLoaderData()
  const [users,setUsers] = useState(data)


//Delete operation========================
  const handleDelete=(id)=>{
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const remaining = users.filter(user=>user._id!==id)
        setUsers(remaining)

    })

  }
  console.log(data)
  return (
    <div>
      <h1>User Length {users.length}</h1>

      <div>
        {users.map((user) => (
          <p key={user._id}>{user.name} <button onClick={()=>handleDelete(user._id)}>X</button> <Link to={`/update/${user._id}`}><button>Update</button></Link> </p>
        ))}
      </div>
    </div>
  )
}

export default Users
