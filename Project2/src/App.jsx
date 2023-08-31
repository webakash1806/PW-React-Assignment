import Button from "./Button";

const App = () => {
  const btnClick = () => {
    alert("Welcome");
  }

  return (
    <>
      <Button text="Click Me!" onClick={btnClick} />
    </>
  )
}

export default App