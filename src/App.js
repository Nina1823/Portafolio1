import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { WorkExperience } from "./components/WorkExperience/WorkExperience";
import {AcademicTraining} from "./components/AcademicTraining/AcademicTraining";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About/>
      <WorkExperience/>
      <AcademicTraining/>
      
    </div>
  );
}

export default App;
