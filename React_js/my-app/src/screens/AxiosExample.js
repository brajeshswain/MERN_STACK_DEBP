import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
const AxiosExample = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.log("error:", error)
      })

  }, [])
  return (
    <div style={{ textAlign:"left" }}>

      <h1> User List</h1>
      {users.map((user) => 

        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      )}
    </div>


  )
}

export default AxiosExample
