import { createContext } from 'react';

export const ContextHook = createContext();

export const ContextHookProvider = ({ children }) => {
  const contextValue = 'testing context';

  return (
    <ContextHook.Provider value={{ contextValue }}>
      {children}
    </ContextHook.Provider>
  );
};
