import { useState } from "react";
import Result from "./Result";
import Clock from "./Clock";
import { FormContainer, ErrorContainer, StyledForm, Header, LoadingHeader, Button, Paragraph, LabelText, FormField, Footer } from "./styled";

const Form = ({ calculateResult, result, ratesData }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("AED");

    const onSelectChange = ({ target }) => setCurrency(target.value);

    const onSubmit = (event) => {
        event.preventDefault();

        calculateResult(amount, currency);
    }

    if (ratesData.status === "error") {
        return (
            <ErrorContainer>
                Ups ...😕 wygląda na to że coś poszło nie tak 🤔
                <br />Sprawdź proszę swoje połączenie z internetem 🧐
                <br />Jeśli masz połączenie, to znaczy, że błąd jest po naszej stronie, już nad tym pracujemy👨‍💻
                <br />Zapraszamy później😀 do zobaczenia 👋
            </ErrorContainer>
        )
    }
    return (
        <FormContainer>
            <StyledForm onSubmit={onSubmit}>
                <Clock />
                <Header>
                    Kantor wymiany walut
                </Header>
                {ratesData.status === "loading" ?
                    <LoadingHeader>
                        Zanim zdążysz mrugnąć ...😉
                        <br /> Pobierzemy dla Ciebie aktualne kursy walut z Europejskiego Banku Centarlnego🤓
                    </LoadingHeader> :
                    <>
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
                                {Object.keys(ratesData.rates).map((currency => (
                                    <option
                                        key={currency}
                                        value={currency}
                                    >
                                        {currency}
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
                    </>
                }
            </StyledForm>

        </FormContainer>
    );
}

export default Form