import React, { createContext, useContext, useState } from 'react';

type setState<T> = React.Dispatch<React.SetStateAction<T>>;

interface ContextType {
  SelectedRating: number | null;
  SetSelectedRating: setState<number>;
  IsSubmited: boolean;
  SetIsSubmited: setState<boolean>;
}

interface ContextProviderProps {
  children: JSX.Element;
}

const StateInfoContext = createContext<ContextType | undefined>(undefined);

export function useStateInfo() {
  return useContext(StateInfoContext);
}

export function StateInfoProvider({ children }: ContextProviderProps) {
  const [SelectedRating, SetSelectedRating] = useState(0);
  const [IsSubmited, SetIsSubmited] = useState(false);

  return (
    <StateInfoContext.Provider
      value={{ SelectedRating, IsSubmited, SetSelectedRating, SetIsSubmited }}
    >
      {children}
    </StateInfoContext.Provider>
  );
}
