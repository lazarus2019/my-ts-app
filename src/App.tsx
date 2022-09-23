import "./App.css";
import { Footer, Header } from "./components/common";
import { Student } from "./features/labs/Student";
import { IStudent } from "@/models";

function App() {
  const krix: IStudent = {
    name: "Krix",
    age: 20,
  };

  function handleStudentClick(student: IStudent) {
    console.log("student click", student);
  }

  return (
    <div className="App">
      <Header />
      <Student student={krix} onClick={handleStudentClick} />
      <Footer />
    </div>
  );
}

export default App;
