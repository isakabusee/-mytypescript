import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[users, setUsers] = useState([])
  

  interface Users {
    name: string;
    id: number;
    username: string;
    email:string;
  }

  useEffect(()=> {
    const fetchData = async () => {
        try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const results = await response.json()
        setUsers(results.slice(0,4))
      
        console.log(results)
    }
    catch (error) {
      console.log(error)
    }
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <h1>Hello Isaac!</h1>
      <h2>data here</h2>
      <div>{ users.map((user: Users) =><div key={user.id}><li>{user.name}</li>
      <li>{user.email}</li>

      </div>)
        }</div>
    </div>
  );
}

export default App;
