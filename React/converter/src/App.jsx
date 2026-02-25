import React , { useState } from 'react'
import Converter from './Converter'
import Display from './Display'

function App() {
    const [usd, setUsd] = useState("");
  const [npr, setNpr] = useState(0);
    const conversionRate = 144.76;
  return (
    <>
    <Converter
        usd={usd}
        setUsd={setUsd}
        setNpr={setNpr}
        conversionRate={conversionRate}
      />

      <Display USD={usd} NPR={npr} />
    </>
  )
}

export default App
