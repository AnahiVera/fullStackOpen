import { useState } from 'react'
import Button from './button'
import DisplayStatistics from './display'

const NoStatistics = ({ totalComments }) => {
  return (
    <div>No feedback given</div>
  )

}

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

  const totalComments = good + neutral + bad

  const average = (good - bad) / totalComments

  const positive = (good / totalComments) * 100



  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={handleClickGood} text='good' />
      <Button onClick={handleClickNeutral} text='neutral' />
      <Button onClick={handleClickBad} text='bad' />

      <h1>statistics</h1>

      {totalComments === 0 ? <NoStatistics /> :
        <table>
          <thead>    
          </thead>
          <tbody>
            <DisplayStatistics counter={good} text='Good ' />
            <DisplayStatistics counter={neutral} text='Neutral ' />
            <DisplayStatistics counter={bad} text='Bad ' />
            <DisplayStatistics counter={totalComments} text='All Comments ' />
            <DisplayStatistics counter={average} text='Average ' />
            <DisplayStatistics counter={positive} text='Positive' />
          </tbody>
        </table>
      }



    </div >
  )
}

export default App