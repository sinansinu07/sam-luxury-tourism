import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [searchActivityName, setSearchActivityName] = useState("")
    const [selectedCurrencyName, setSelectedCurrencyName] = useState("AED")
    const [selectedCurrencySymbol, setSelectedCurrencySymbol] = useState("AED")
    const [currencyValue, setCurrencyValue] = useState(1);
    
    useEffect(() => {
      switch (selectedCurrencyName) {
        case "AED":
          setCurrencyValue(1);
          setSelectedCurrencySymbol("AED")
          break;
        case "USD":
          setCurrencyValue(0.27);
          setSelectedCurrencySymbol("$")
          break;
        case "EUR":
          setCurrencyValue(0.25);
          setSelectedCurrencySymbol("€")
          break;
        case "GBP":
          setCurrencyValue(0.21);
          setSelectedCurrencySymbol("£")
          break;
        default:
          setCurrencyValue(1);
          setSelectedCurrencySymbol("AED")
      }
    }, [selectedCurrencyName]);

    useEffect(() => {
        const currencyName = localStorage.getItem("currencyName")
        if (currencyName) {
            setSelectedCurrencyName(currencyName)
        }
        console.log(selectedCurrencyName)
    }, [])

    return (
        <AuthContext.Provider value={{ 
            searchActivityName, 
            setSearchActivityName,
            selectedCurrencyName,
            setSelectedCurrencyName,
            selectedCurrencySymbol, 
            setSelectedCurrencySymbol,
            currencyValue,
            setCurrencyValue
            }}>
            { children }
        </AuthContext.Provider>
    )
}