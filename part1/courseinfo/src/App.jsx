import {Content} from "./components/Content"
import Header from "./components/Header"

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

const sum = course.parts.reduce((acc, curr) =>  acc + curr.exercises, 0)
console.log(sum)

  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      
      <b>Total of {sum} exercises </b>
    </div>
  )
}

export default App