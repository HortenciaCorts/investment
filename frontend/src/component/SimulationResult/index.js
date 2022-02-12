import './styles.css';

const SimulationResult = () => {
    return(
        <div className="containerSimulationResult">
            <h3>Resultado da Simulação</h3>
            <div className="cardContainer">
                <div className="card">
                    <h5>Valor final Bruto</h5>
                    R$ 15.509,27
                </div>
                <div className="card">
                    <h5>Alíquota do IR</h5>
                    20%
                </div>
                <div className="card">
                    <h5>Valor Pago em IR</h5>
                    R$ 1.509,27
                </div>
                <div className="card">
                    <h5>Valor Final Líquido</h5>
                    R$ 56.509,27
                </div>
                <div className="card">
                    <h5>Valor Total Investido</h5>
                    R$ 9.509,27
                </div>
                <div className="card">
                    <h5>Ganho Líquido</h5>
                    R$ 47.000,00
                </div>
            </div>
        </div>
    )
}

export default SimulationResult;