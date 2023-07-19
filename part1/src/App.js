import { useState } from 'react'

const Display = (props) => {
  console.log(props.value)
  return(
  <div>
    {props.options} {props.value}
  </div>
  )
} 



  

const Header = (props) => {
  console.log(props)
  return(
  <h1>{props.heading}</h1>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({clicks}) => {
  const total = clicks.good + clicks.neutral + clicks.bad
  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return(
    <>
    <Display options="Good" value={clicks.good} />
    <Display options= "Neutral" value = {clicks.neutral}/>
    <Display options= "Bad" value = {clicks.bad}/>
    <Display options = "All" value = {total}/>
    <Display options = "Average" value = {(clicks.good*1 + clicks.bad*-1)/total}/>
    <Display options = "Positive" value = {clicks.good* (100/total)}/>

    </>

  )

  }

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const heading1 = "Give Feedback"
  const [clicks, setClicks] = useState({good:0 , neutral:0 , bad: 0})
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)


  const handleGoodClick = () =>
    setClicks({...clicks, good: clicks.good + 1})

  const handleNeutralClick = () =>
    setClicks({...clicks, neutral: clicks.neutral + 1})

  const handleBadClick = () =>
    setClicks({...clicks, bad: clicks.bad + 1})



  return(
    <div>
      
      <Header heading={heading1}/>
      
      <Button handleClick = {handleGoodClick} text= "Good"/>
      <Button handleClick = {handleNeutralClick} text = "Neutral"/>
      <Button handleClick = {handleBadClick} text = "Bad"/>
      <Header heading="Statistics" />
      <Statistics clicks= {clicks}/>
    </div>
  )

  }


export default App