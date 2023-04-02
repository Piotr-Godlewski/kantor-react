import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://api.exchangerate.host/latest?base=PLN"

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({ status: "loading" });

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await axios.get(API_URL);

                setRatesData({
                    date: response.data.date,
                    rates: response.data.rates,
                    status: "success"
                });
            }
            catch (error) {
                console.error(error);

                setRatesData({
                    status: "error"
                });
            }
        };

        setTimeout(getRates, 1500);
    }, []);

    return ratesData
}
