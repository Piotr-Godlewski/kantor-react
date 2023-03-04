import { useEffect, useState } from "react"
import "./style.css"

const Clock = () => {
const [date, setDate] = useState(new Date());

useEffect(() => {
    setInterval(() => {
        setDate(date => date = new Date());
    }, 1000);
}, []);

return (
    <p className="form__date">
        Dzisiaj jest {date.toLocaleDateString(undefined, {weekday:"long", day:"numeric", month:"long"})}, {date.toLocaleTimeString()}
    </p>
)
}


export default Clock