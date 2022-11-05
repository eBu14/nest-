import { createContext, useState } from "react"

export const ColorModeContext = createContext()
export const TooProvider = ({children}) => {
    const [darkMode , setDarkmode] = useState(0)
    const ToggleSwitch = () => {
        setDarkmode(!darkMode)
    }

    return(
        <ColorModeContext.Provider value={{darkMode, ToggleSwitch}}>
            {children}
        </ColorModeContext.Provider>
    )
}