import Form from './Form';
import currencies from './currencies'
import { useState } from 'react';

function App() {
  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ symbol }) => symbol === currency).rate;

    setResult({
      sourceAmount: + amount,
      targetResult: amount / rate,
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
