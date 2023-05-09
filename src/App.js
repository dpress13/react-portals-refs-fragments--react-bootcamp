import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

export default function App() {
  const [usersList, setUsersList] = useState([]);
  
  const usersInList = usersList.length > 0;
  
  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUsersList => {
      // 'Id' set this way for quick creation / keep focus on React-based initiatives
      return [ ...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }, ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      {usersInList && <UsersList users={usersList} />}
    </>
  );
}