import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import StatsBoard from "./components/StatsBoard";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rohit", score: 45 },
    { id: 2, name: "Aman", score: 30 }
  ]);

  const updateScore = (id, newScore) => {
    setStudents(students.map(s =>
      s.id === id ? { ...s, score: Number(newScore) } : s
    ));
  };

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score)
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="app">
      <Header />

      <section className="section stats-section">
        <StatsBoard students={students} />
      </section>

      <section className="section form-section">
        <AddStudentForm addStudent={addStudent} />
      </section>

      <section className="section table-section">
        <StudentTable
          students={students}
          updateScore={updateScore}
        />
      </section>
    </div>
  );
}

export default App;
