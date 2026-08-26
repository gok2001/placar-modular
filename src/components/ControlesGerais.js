export default function ControlesGerais({ onReiniciar, onDesfazerJogada }) {
    return (
        <div>
            <button onClick={() => onReiniciar()}>Reiniciar Partida</button>
            <button onClick={() => onDesfazerJogada()}>Desfazer Jogada</button>
        </div>
    );
}