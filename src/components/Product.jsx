export default function Product() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://dashboard.bruninprado.com.br/imagens/_miniaturas/20231017_652f02cc36961e728f09691a228789a603ff16e980df3.jpeg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">XT 660 DOS SONHOS + 10 BILHETE PREMIADO</h2>
        <p>🏍️ CB300F 2023 COMPLETA!!</p>
        <div className="card-actions justify-end">
          <div className="badge badge-accent">Disponível!</div>
        </div>
      </div>
    </div>
  );
}
