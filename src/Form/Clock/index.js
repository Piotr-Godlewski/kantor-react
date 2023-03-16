import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
    const date = useCurrentDate();

    return (
        <StyledClock>
            Dzisiaj jest {" "}
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