import currencies from "../currencies";
import { useState } from "react";
import Result from "./Result";
import Clock from "./Clock";
import { FormContainer, StyledForm, Header, Button, Paragraph, LabelText, FormField, Footer } from "./styled";
import { useRatesData } from "./useRatesData";

const Form = ({ calculateResult, result }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].symbol);
    const ratesData = useRatesData();

    const onSelectChange = ({ target }) => setCurrency(target.value);

    const onSubmit = (event) => {
        event.preventDefault();

        calculateResult(amount, currency);
    }

    return (
        <FormContainer>
            <StyledForm onSubmit={onSubmit}>
                <Clock />
                <Header>
                    Kantor wymiany walut
                </Header>
                <Paragraph>
                    <LabelText>
                        Podaj kwotę w zł:
                    </LabelText>
                    <FormField
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        type="number"
                        step="0.01"
                        name="kwota_zl"
                        placeholder="0.00"
                        autoFocus
                        required
                        min="0.01"
                    />
                </Paragraph>
                <Paragraph>
                    <LabelText>
                        Wybierz walutę:
                    </LabelText>
                    <FormField as={"select"}
                        value={currency}
                        onChange={onSelectChange}
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.symbol}
                                value={currency.symbol}
                            >
                                {currency.symbol}
                            </option>
                        )))};
                    </FormField>
                </Paragraph>
                <Button>
                    Przelicz
                </Button>
                <Result result={result} />
                <Footer>
                    Kursy walut zostały pobrane z Europejskiego Banku Centralnego
                    <br /> Aktualne na dzień: {ratesData.date}
                </Footer>
            </StyledForm>

        </FormContainer>
    );
}

export default Form