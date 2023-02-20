import './index.css';
import Form from './Form';
import currencies from './Currencies';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ symbol }) => symbol === currency).rate;
    setResult({
      target: amount / rate
    })
  }

  return (
    <body className="body backgroundImage">
      <Form
        calculateResult={calculateResult}
        result={result}>
      </Form>
    </body>
  )
}

export default App;
