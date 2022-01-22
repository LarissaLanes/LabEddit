import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext"

const GlobalStateProvider = (props) => {
    const [showPassWord, setPassWord] = useState(true);
    const [loading, setLoading] = useState(false)

   
    const data = {
        showPassWord,
        setPassWord,
        loading,
        setLoading,


    }
    return (
        <div>
            <GlobalStateContext.Provider value={data}>
                {props.children}
            </GlobalStateContext.Provider>
        </div>
    )
}

export default GlobalStateProvider;