import { useState } from "react";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

const addUser=(user)=>{
    setUsers((prev)=>[...prev,user])
  }
const deleteUser = (id) => {
  setUsers((prev) => {
    return prev.filter((val) => val.id !== id);
  });
}
const updateUser = (updatedUser) => {
  setUsers((prev) => {
    return prev.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
  });
};


  return (
    <UserContext.Provider value={{ users, addUser ,deleteUser,updateUser,editingUser,setEditingUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;