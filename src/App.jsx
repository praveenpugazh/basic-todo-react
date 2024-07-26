import './App.css'
// import { twoSum } from './utils/twoSum'
import { useState } from 'react'
// import Button from './components/Button'

const App = () => {
  // const x = 10
  // const y = 15
  // console.log(x)
  // // let result = twoSum(x, y)

  const [inputTodo, setInputTodo] = useState('')
  const [allTodos, setAllTodos] = useState(['grocery'])

  // const loginOnClick = () => {
  //   console.log('login btn clicked')
  // }

  // const submitOnClick = () => {
  //   console.log('submit btn clicked')
  // }

  // return (
  //   <>
  //     <h1>{counter}</h1>
  //     <button
  //       onClick={() => {
  //         setCounter(counter + 1)
  //       }}
  //     >
  //       Increase
  //     </button>
  //     <button
  //       onClick={() => {
  //         setCounter(counter - 1)
  //       }}
  //     >
  //       Decrease
  //     </button>
  //   </>
  // )
  return (
    <>
      <h1>Todolist App</h1>
      <input
        type='text'
        onChange={(event) => setInputTodo(event.target.value)}
        value={inputTodo}
      />
      <button
        onClick={() => {
          setAllTodos([...allTodos, inputTodo])
          setInputTodo('')
        }}
      >
        add
      </button>
      {allTodos.map((todo, index) => {
        return <p key={index}>{todo}</p>
      })}
    </>
  )
}

export default App

