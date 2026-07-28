import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users,setUsers]=useState(()=>{
    return JSON.parse(localStorage.getItem("users"))||[];
  });
  const deleteUser=(id)=>{
    console.log(id);
  }

  return (
    <div className="min-h-screen bg-black p-6">
      <Navbar setToggle={setToggle} />

      <div className="mt-8 flex justify-center">
        {toggle ? (
          <Form setUsers={setUsers} setToggle={setToggle} users={users}/>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {users.map((elem,index)=>{
              return <UserCard user={elem} key={index} deleteUser={deleteUser}/>
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;