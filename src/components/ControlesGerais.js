export default function ControlesGerais({ onReiniciar, onDesfazerJogada }) {
    return (
        <div className="controles">

            <button
                className="btn btn-reiniciar"
                onClick={() => onReiniciar()}
            >
                Reiniciar Partida
            </button>

            <button
                className="btn btn-desfazer"
                onClick={() => onDesfazerJogada()}
            >
                Desfazer Jogada
            </button>

        </div>
    );
}