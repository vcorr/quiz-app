
'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";


interface ContextProps {
    score: number,
    setScore: Dispatch<SetStateAction<number>>,
}

const GlobalContext = createContext<ContextProps>({
    score: 0,
    setScore: (): number => 0,

})

export const GlobalContextProvider = ({ children }) => {
    const [score, setScore] = useState(0);
    
    return (
        <GlobalContext.Provider value={{ score, setScore }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);