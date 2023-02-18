import "./style.css"
import currencies from "../Currencies";
import { useState } from "react";

const Form = () => {
    const [amount, setAmount] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="container">
            <form className="form" onSubmit={onSubmit}>
                <fieldset className="form__fieldset">
                    <legend className="form__legend">Kantor wymiany walut</legend>
                    <p>
                        <label>
                            <span className="form__labelText">
                                Podaj kwotę w zł:
                            </span>
                            <input
                                value={amount}
                                onChange={({ target }) => setAmount(target.value)}
                                className="form__field"
                                type="number"
                                step="0.01"
                                name="kwota_zl"
                                placeholder="0.00"
                                autoFocus
                                required
                                min="0.01" />
                        </label>
                    </p>
                    <p>Wybierz walutę (kurs z dn. 18.02.2023):</p>
                    <ul className="form__labelList">
                        {currencies.map((currency => (
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        name="currency"
                                    />
                                    {currency.name}
                                </label>
                            </li>
                        )))}
                    </ul>
                    <p>
                        <button className="form__button">
                            Przelicz
                        </button>
                    </p>
                    <p>
                        <label>
                            Po wymianie otrzymasz: <span className="form__labelResult">0.00</span>
                        </label>
                    </p>
                </fieldset>

            </form>

        </div>
    );
}

export default Form