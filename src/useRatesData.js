import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://api.exchangerate.host/latest?base=PLN"

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({ loading: true });

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await axios.get(API_URL);

                setRatesData({
                    date: response.data.date,
                    rates: response.data.rates
                });
            }
            catch (error) {
                console.error(error);

                setRatesData({
                    error
                });
            }
        };

        setTimeout(getRates, 1500);
    }, []);

    return ratesData
}
