import { useState } from "react";

//1) como é a sintaxe da vas usadas no useSate?
const MudaNomeClick = () => {
  const [name, setName] = useState("Demétrio");
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("Melinda")}>Muda nome</button>
    </div>
  );
};

export default MudaNomeClick;
