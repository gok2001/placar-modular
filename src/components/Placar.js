export default function Placar({ pontosA, pontosB, posseTimeA }) {
    return (
        <div className="placar">

            <div className="times">

                <div className={`time ${posseTimeA ? "time-ativo" : ""}`}>
                    <span>
                        Time A {posseTimeA && "🏀"}
                    </span>

                    <strong>{pontosA}</strong>
                </div>

                <div className={`time ${!posseTimeA ? "time-ativo" : ""}`}>
                    <span>
                        Time B {!posseTimeA && "🏀"}
                    </span>

                    <strong>{pontosB}</strong>
                </div>

            </div>

            <p className="ataque">
                Ataque Atual:{" "}
                <strong>{posseTimeA ? "Time A" : "Time B"}</strong>
            </p>

        </div>
    );
}