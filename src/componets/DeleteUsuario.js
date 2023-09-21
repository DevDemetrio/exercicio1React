import { useState } from "react";

const DeleteUsuario = () => {
  const [alunos, setAlunos] = useState([
    { id: 1, name: "Sara" },
    { id: 2, name: "Emanuele" },
    { id: 3, name: "Julia" },
    { id: 4, name: "Thamara" },
    { id: 5, name: "Melinda" },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 6);

    setAlunos((prevAlunos) => {
      return prevAlunos.filter((aluno) => randomNumber !== aluno.id);
    });
  };
  return (
    <div>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>{aluno.name} </li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete</button>
    </div>
  );
};

export default DeleteUsuario;
