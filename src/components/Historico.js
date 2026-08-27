export default function Historico({ historico }) {
    return (
        <div className="historico">

            <h3>Histórico de Jogadas</h3>

            {historico.length === 0 ? (
                <p className="historico-vazio">
                    Nenhuma jogada registrada ainda.
                </p>
            ) : (
                <ul className="lista-historico">
                    {historico.map((jogada, index) => (
                        <li key={index}>
                            {jogada}
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
}