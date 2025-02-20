import { useState } from 'react'
import Button from './button'
import Display from './display'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }



  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={handleClickGood} text='good' />
      <Button onClick={handleClickNeutral} text='neutral' />
      <Button onClick={handleClickBad} text='bad' />

      <h1>statistics</h1>

      <Display counter={good} text='Good ' />
      <Display counter={neutral} text='Neutral '/>
      <Display counter={bad} text='Bad '/>



    </div>
  )
}

export default App