import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"

function App() {
  const part1 = { name: 'Fundamentals of React', exercises: 10}
  const part2 = { name: 'Using props to pass data', exercises: 7}
  const part3 = { name: 'State of a component', exercises: 14}
  const course = {name: 'Half Stack application development', parts: [part1, part2, part3]}

  return (
    <div>
      <Header name={course.name}/>  
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
