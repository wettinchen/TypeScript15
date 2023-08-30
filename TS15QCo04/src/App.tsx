import Counter from "./counter"

function App() {
  return (
    <>
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </>
  )
}

export default App