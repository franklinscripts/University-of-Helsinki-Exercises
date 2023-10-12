import { useState } from 'react'

const App = () => {
  const anecdotes = [
    {title: 'If it hurts, do it more often.', 
    upVote: 0
  },
  {
    title: 'Adding manpower to a late software project makes it later!',
    upVote: 0


  },
  {
    title: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    upVote: 0


  },
  {
    title: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    upVote: 0


  },
  {
    title: 'Premature optimization is the root of all evil.',
    upVote: 0


  },
  {
    title: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    upVote: 0


  },
  {
    title: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    upVote: 0


  },
  {
    title: 'The only way to go fast, is to go well.',
    upVote: 0


  },
  ]
   
  const [selected, setSelected] = useState(0)
  const [upVote, setupVote] = useState(anecdotes)

  return (
    <div>
      <p>
      {upVote[selected].title}
      </p>
      <p>{upVote[selected].upVote}</p>
      <Button onClick={ () => {
        const upVoteCountArr = [...upVote];
        upVoteCountArr[selected].upVote +=  1 
        setupVote(upVoteCountArr)

        
     }} text='Upvote'/>

      <Button onClick={ () => {
        const randomIndex = Math.floor(Math.random() * anecdotes.length);
       setSelected(randomIndex);
        
      } } text='Next Anecdotes'/>
    </div>
  )
}

const Button =  (props) => {
  return(
    <button {...props}>
     {props.text}   </button>
  )

}
export default App