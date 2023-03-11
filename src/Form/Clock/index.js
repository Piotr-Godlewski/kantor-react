import { useEffect, useState } from "react"
import { StyledClock } from "./styled";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <StyledClock>
            Dzisiaj jest
            {date.toLocaleDateString(
                undefined,
                {
                    weekday: "long",
                    day: "numeric",
                    month: "long"
                })},
            {date.toLocaleTimeString()}
        </StyledClock>
    )
}

export default Clock