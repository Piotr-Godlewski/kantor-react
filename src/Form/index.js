import "./style.css"
import currencies from "../currencies";
import { useState } from "react";
import Result from "./Result";
import Clock from "./Clock";

const Form = ({ calculateResult, result }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].symbol);

    const onSelectChange = ({ target }) => setCurrency(target.value);

    const onSubmit = (event) => {
        event.preventDefault();

        calculateResult(amount, currency);
    }

    return (
        <div className="container">
            <form className="form" onSubmit={onSubmit}>
                <fieldset className="form__fieldset">
                    <Clock />
                    <header className="form__header">Kantor wymiany walut</header>
                    <p className="form__paragraph">
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

                    </p>
                    <p className="form__paragraph">
                        <span className="form__labelText">Wybierz walutę:</span>
                        <select
                            className="form__labelList"
                            value={currency}
                            onChange={onSelectChange} >
                            {currencies.map((currency => (
                                <option
                                    key={currency.symbol}
                                    value={currency.symbol} >
                                    {currency.name} {currency.symbol}
                                </option>
                            )))};
                        </select>
                    </p>
                    <p>
                        <button className="form__button">
                            Przelicz
                        </button>
                    </p>
                    <Result result={result} />
                    <footer className="form__footer">kursy walut z dn. 18.02.2023</footer>
                </fieldset>
            </form>

        </div>
    );
}

export default Form