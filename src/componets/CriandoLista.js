const CriandoLista = () => {
  /*
  Qual a diferença entre:
    const alunos = ["Melinda", "Thamara", "Luviane"];
    e

const [alunos] = useState(["Melinda", "Thamara", "Luviane"]);

  */
  const alunos = ["Melinda", "Thamara", "Luviane"];

  /*
  Qual a diferença entre
    {alunos.map((item) => (
        <li>{item}</li>
      ))}
    
       {alunos.map((item) => {
        <li>{item}</li>
      })}
  
      
  */
  return (
    <div>
      <ul>
        {alunos.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h1>Outro exemplo</h1>
    </div>
  );
};

export default CriandoLista;
