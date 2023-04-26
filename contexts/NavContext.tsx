import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

export const navStates = {
  HOME: "Home",
  PORTFOLIO: "Portfolio",
};

const NavContext = createContext<any>(null);

export const useNavContext = () => useContext(NavContext);
const NavProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [activeNav, setActiveNav] = useState(navStates.HOME);

  return (
    <NavContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
