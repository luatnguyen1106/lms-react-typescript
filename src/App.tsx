import { Routes, Route } from "react-router-dom";
import {Login} from "./Components/login/login";
import Forgot from "./Components/login/forgot";
import Home from "./Components/home/homepage/home";
import Detail from "./Components/home/homepage/DetailClass"
import List_student from "./Components/home/homepage/List_student";
import Student_profile_home from "./Components/home/homepage/Student_Profile";

function App() {
  return (
    <div className="App">
      <Routes>  
        <Route  path="/" element={<Login />} />
        <Route  path="/forgot" element={<Forgot />} />
        <Route  path="/home" element={<Home />} />
        <Route  path="/detailclass" element={<Detail />} />

        <Route  path="/liststudent" element={<List_student />} />
        <Route  path="/studentprofile" element={<Student_profile_home/>} />
      </Routes>
    </div>
  );
}

export default App;