
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect( () => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  const handleAddUser = event => {
    event.preventDefault();
  }

  return (
    <div className="App">
      
      <form onSubmit={handleAddUser}>
        <input type='text' name='name'></input>
        <br />
        <input type='email' name='email'></input>
        <br />
        <button type='submit'>Add User</button>
      </form>
      <h1>User:{users.length}</h1>
      <div>
        {
          users.map(user => <p key={user.id}> {user.name} {user.email}</p>)
        }
      </div>
    </div>
  );
}

export default App;
