import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([{ name: 'Jhon Wick', age: 43, id: 0.1 }, { name: 'Bart Simpson', age: 8, id: 0.12 }]);
  const addUser = ({ newName, newAge }) => {
    setUsersList(prevList => [...prevList, { name: newName, age: newAge, id: Math.random().toString() }]);
  }

  return (
    <div>
      <AddUsers onAddUser={ addUser }/>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
