import './index.css';
import Form from './Form';
import currencies from './Currencies';
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
    <body className="body">
      <Form
        calculateResult={calculateResult}
        result={result}>
      </Form>
    </body>
  )
}

export default App;
