import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import UserCard from './components/UserCard';

const App = () => {
  const [users, setUsers] = useState([]);
  const [toggle, setToogle] = useState(false);

  return (
    <div className="bg-gray-400 h-screen flex flex-col justify-center items-center gap-4">
      {toggle ? (
        users.map((elem, index) => (
          <UserCard key={index} user={elem} />
        ))
      ) : (
        <Register setToogle={setToogle} setUsers={setUsers} />
      )}
    </div>
  );
};

export default App;