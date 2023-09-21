const MetodoFilter = () => {
  const nome = ["carro1", "carro2", "carro3", "carro4"];
  const carroFiltrados = nome.filter((item) => item === "carro1");
  return (
    <div>
      <ul>
        {carroFiltrados.map((carro, i) => (
          <li key={i}>{carro}</li>
        ))}
      </ul>
    </div>
  );
};

export default MetodoFilter;
