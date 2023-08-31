import List from "./List";

const App = () => {
  return (
    <>
      <h1>List Items are shown Below :-</h1>
      <ul>
        <List items="C++" />
        <List items="JAVA" />
        <List items="HTML" />
        <List items="CSS" />
        <List items="JAVASCRIPT" />
      </ul>
    </>
  )
}

export default App