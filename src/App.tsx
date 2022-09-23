import { IStudent } from "@/models";
import { useEffect, useState } from "react";
import "./App.css";
import { Widget } from "./components/common/Widget";
import { MainLayout } from "./components/Layout";
import { MyText } from "./features/labs/MyText";
import { Student } from "./features/labs/Student";

function App() {
  const krix: IStudent = {
    name: "Krix",
    age: 20,
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function handleStudentClick(student: IStudent) {
    console.log("student click", student);
  }

  const studentList = [
    { id: 1, name: "Lucas" },
    { id: 2, name: "Kimmie" },
  ];

  return (
    <div className="App">
      {loading && <p>Loading...</p>}
      {loading ? <p>Loading...</p> : <p>Data ready!</p>}
      <p>{loading ? "loading..." : "data ready!"}</p>

      {true && "show true"}
      {false && "show false"}
      {"" && "show empty"}
      {"0" && "show zero string"}
      {0 && "show zero"}
      {[].length > 0 && "show zero"}
      {Boolean(NaN) && "show NaN"}

      <ul>
        {studentList.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>

      <MainLayout>
        <Student student={krix} onClick={handleStudentClick} />
      </MainLayout>

      <MyText></MyText>
      <MyText>dasdasd</MyText>
      <MyText>{123}</MyText>
      <MyText>{false}</MyText>
      <MyText>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ad.
        </span>
      </MyText>

      <div>
        <div>
          <Widget title="Earning Overview">Chart 1</Widget>
        </div>
        <div>
          <Widget title="Revenue Sources">Chart 2</Widget>
        </div>
        <div>
          <Widget title="Earning Overview">Chart 3</Widget>
        </div>
        <div>
          <Widget title="Earning Overview">Chart 4</Widget>
        </div>
      </div>
    </div>
  );
}

export default App;
