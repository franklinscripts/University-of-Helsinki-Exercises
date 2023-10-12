import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'


function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const all = good + bad + neutral

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" onClick={() => setGood(prev => prev + 1 )}/>
      <Button  text='Neutral' onClick={() => setNeutral(prev => prev + 1 )}/>
      <Button text='Bad' onClick={() => setBad(prev => prev + 1 )}/>
      <hr />
  
  {
    good !== 0 || bad !== 0 || neutral !== 0
? (

  <Statistics
    good={good}
    bad={bad}
    all={all}
    neutral={neutral}
    />
): (
  <p>You Do not have any records</p>
)
  }

    </div>
  )
}

export default App
