import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("start");

  return (
    <UserContext.Provider value={{ user, setUser, page, setPage }}>
      {children}
    </UserContext.Provider>
  );
}
