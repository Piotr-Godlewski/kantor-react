import Form from './Form';
import { useState } from 'react';
import { useRatesData } from './Form/useRatesData';

function App() {
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (amount, currency) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: + amount,
      targetResult: amount * rate,
      currency
    })
  }

  return (
    <Form
      calculateResult={calculateResult}
      result={result}>
    </Form>
  )
}

export default App;
