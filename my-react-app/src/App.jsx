import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Link } from 'react-router-dom';
import Counter from "./components/counter";
import DisplayName from "./components/displayName";
import FetchAPI from "./components/fetchAPI";
import Task1 from "./components/task1";
import Task2 from "./components/task2";
import Task3 from "./components/task3";
import Task4 from "./components/task4";
import Task5 from "./components/task5";
import Task6 from "./components/task6";
import Task7 from "./components/task7";
import Task8 from "./components/task8";
import Task9 from "./components/task9";
import Task10 from "./components/task10";




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
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/counter">Counter</Link> | 
        <Link to="/displayname">Display Name</Link> | 
        <Link to="/task1">Task1</Link> | 
        <Link to="/task2">Task2</Link> | 
        <Link to="/task3">Task3</Link> | 
        <Link to="/task4">Task4</Link> | 
        <Link to="/task5">Task5</Link> | 
        <Link to="/task6">Task6</Link> | 
        <Link to="/task7">Task7</Link> | 
        <Link to="/task8">Task8</Link> |
        <Link to="/task9">Task9</Link> |
        <Link to="/task10">Task10</Link>
      </nav>
      <Routes>
        <Route path="/" element={<><h1>Vite + React</h1><p className="read-the-docs">Click on the Vite and React logos to learn more</p></>} />
        <Route path="/counter" element={<Counter initial={5} maxCount={10} minCount={0} />} />
        <Route path="/displayname" element={<DisplayName name={"Heshiya"} />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 name={"karthik"} />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
        <Route path="/task6" element={<Task6 />} />
        <Route path="/task7" element={<Task7 />} />
        <Route path="/task8" element={<Task8 />} />
        <Route path="/task9" element={<Task9/>} /> 
        <Route path="/task10" element={<Task10/>} />
      </Routes>
    </>
  );
}

export default App;
