import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({ loading: true });

    useEffect(() => {
        const axiosRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                setRatesData({
                    date: response.data.date,
                    rates: response.data.rates
                });
            }
            catch (error) {
                console.error("masz błąd", error);
                setRatesData({
                    error
                });
            }
        };

        setTimeout(axiosRates, 1500);
    }, [])

    return ratesData
}
