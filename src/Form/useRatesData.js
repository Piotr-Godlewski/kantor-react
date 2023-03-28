import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState();
    
    useEffect(() => {
        fetch("https://api.exchangerate.host/latest?base=PLN")
        .then(response => response.json())
        .then(setRatesData)   
    }, [])

    return ratesData
}
