import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const useUsers = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUsers must be used inside UserProvider");
  }

  return context;
};

export default useUsers;