import "./App.css";
import { Footer, Header } from "./components/common";
import { Student } from "./features/labs/Student";
import { IStudent } from "./models";

function App() {
  const handleOnClick = () => {};

  const krix: IStudent = {
    name: "Krix",
    age: 20,
    onClick: handleOnClick,
  };

  return (
    <div className="App">
      <Header />
      <Student student={krix} />
      <Footer />
    </div>
  );
}

export default App;
