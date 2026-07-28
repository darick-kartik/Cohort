import React from 'react'
import useUsers from '../hooks/useUsers'
import UserCard from './UserCard';
const UserList = () => {
    const {users}=useUsers();
  return (
    <div>
    {users.map((user) => {
  console.log(user);
  return <UserCard user={user} key={user?.id} />;
})}
    </div>
  )
}

export default UserList
