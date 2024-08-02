import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { WorkExperience } from "./components/WorkExperience/WorkExperience";
import {AcademicTraining} from "./components/AcademicTraining/AcademicTraining";
import {Technologies } from "./components/Technologies/Technologies.jsx"
// import { Skills } from "./components/Skills/Skills";
import {Projects } from "./components/Projects/Projects.jsx"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About/>
      <WorkExperience/>
      <AcademicTraining/>
      {/* <Skills /> */}
      <Projects/>
      <Technologies/>
    </div>
  );
}

export default App;
