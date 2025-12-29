import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/counter";
import DisplayName from "./components/displayName";
import FetchAPI from "./components/fetchAPI";
import Task1 from "./components/task1";
import Task2 from "./components/task2";


function App() {
  console.log("bbb");

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Counter initial={5} maxCount={10} minCount={0} />
      
        <DisplayName name={"Heshiya"}></DisplayName>
        <Task2 name = {"karthik"}></Task2>
      {/* <FetchAPI limit = {2} />  */}
      <Task1/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
