import "./App.css";
import { Footer, Header } from "./components/common";
import { Student } from "./features/labs/Student";

function App() {
  return (
    <div className="App">
      <Header />
      <Student name="Lazarus" isHero age={20} />
      <Footer />
    </div>
  );
}

export default App;
