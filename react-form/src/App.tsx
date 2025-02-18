import ClassCard from "./components/classCard";
import turmas from "./mocks/turmas.json"

function App() {
  return (
    <>
      <header>
        <a href="/">Turmas</a>
      </header>
      <main>
        <h1>Turmas</h1>
        <section>
          {
            turmas.map(turma => (
              <ClassCard key={turma.id} turma={turma} />
            ))
          }
        </section>    
      </main>
    </>
  );
}

export default App;
