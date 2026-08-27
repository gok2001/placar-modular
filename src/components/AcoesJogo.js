export default function AcoesJogo({ onPontuar, onPassarBola }) {
    return (
        <div className="acoes-jogo">

            <button
                className="btn btn-ponto"
                onClick={() => onPontuar(1)}
            >
                +1 Ponto
            </button>

            <button
                className="btn btn-ponto"
                onClick={() => onPontuar(2)}
            >
                +2 Pontos
            </button>

            <button
                className="btn btn-ponto"
                onClick={() => onPontuar(3)}
            >
                +3 Pontos
            </button>

            <button
                className="btn btn-posse"
                onClick={onPassarBola}
            >
                Trocar Posse 🔁
            </button>

        </div>
    );
}