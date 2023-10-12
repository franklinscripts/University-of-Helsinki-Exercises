import React from 'react'

const Statistics = ({good, neutral, bad, all}) => {
  return (
    <div>
        <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      
      <p>All {all}</p>
      <p>Average {good + neutral + bad / 3}</p>
      <p>Positivity percentage {good * all/100}</p>
    </div>
  )
}

export default Statistics