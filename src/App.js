import './index.css';

function App() {
  return (
    <body className="body backgroundImage">
    <div className="container">
        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kantor wymiany walut</legend>
                <p>
                    <label>
                        <span className="form__labelText">
                            Podaj kwotę w zł:
                        </span>
                        <input className="form__field" type="number" step="0.01" name="kwota_zl" placeholder="0.00"
                            autofocus required min="0.01"/>
                    </label>
                </p>
                <p>Wybierz walutę (kurs z dn. 20.12.2022):</p>
                <ul className="form__labelList">
                    <li>
                        <label>
                            <input type="radio" name="currency" value="5.35" checked/> £ funt
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="currency" value="4.40"/> $ dolar
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="currency" value="4.67"/> € euro
                        </label>
                    </li>
                </ul>
                <p>
                    <label>
                        Po wymianie otrzymasz: <span className="form__labelResult">0.00</span>
                    </label>
                </p>
                <p>
                    <button className="form__button">
                        Przelicz
                    </button>
                </p>
            </fieldset>

        </form>

    </div>
</body>
  )
}

export default App;
