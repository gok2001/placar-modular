export default function ControlesGerais({ onReiniciar}) {
    return (
        <div>
            <button onClick={() => onReiniciar()}>Reiniciar Partida</button>
        </div>
    );
}