import React from "react";
import Context from "./context";

const ContextProvider: React.FC = ({children}) => {

    const provider = {}

    return <Context.Provider value={provider}>{children}</Context.Provider>
}

export default ContextProvider;