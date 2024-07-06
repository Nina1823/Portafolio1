import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { WorkExperience } from "./components/WorkExperience/WorkExperience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About/>
      <WorkExperience/>
    </div>
  );
}

export default App;
