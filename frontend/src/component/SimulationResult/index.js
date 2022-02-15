import { useEffect, useState } from 'react';
import './styles.css';

const SimulationResult = ({ simulacoes, tipoIndexacao, tipoRendimento }) => {
    const [valorFinalBruto, setValorFinalBruto] = useState('');
    const [aliquotaIR, setAliquotaIR] = useState('');
    const [valorPagoIR, setValorPagoIR] = useState('');
    const [valorFinalLiquido, setValorFinalLiquido] = useState('');
    const [valorTotalInvestido, setValorTotalInvestido] = useState('');
    const [ganhoLiquido, setGanhoLiquido] = useState('');

    useEffect(() => {
        simulacoes.forEach(element => {
            if (tipoIndexacao === element.tipoIndexacao && tipoRendimento === element.tipoRendimento) {
                setValorFinalBruto(element.valorFinalBruto);
                setAliquotaIR(element.aliquotaIR);
                setValorPagoIR(element.valorPagoIR);
                setValorFinalLiquido(element.valorFinalLiquido);
                setValorTotalInvestido(element.valorTotalInvestido);
                setGanhoLiquido(element.ganhoLiquido);
            }
        });
    }, [simulacoes, tipoIndexacao, tipoRendimento]);

    return (
        <div className="containerSimulationResult">
            <h3>Resultado da Simulação</h3>
            <div className="cardContainer">
                <div className="card">
                    <h5>Valor final Bruto</h5>
                    R$ {valorFinalBruto.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                </div>
                <div className="card">
                    <h5>Alíquota do IR</h5>
                    {aliquotaIR}%
                </div>
                <div className="card">
                    <h5>Valor Pago em IR</h5>
                    R$ {valorPagoIR.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                </div>
                <div className="card">
                    <h5>Valor Final Líquido</h5>
                    R$ {valorFinalLiquido.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                </div>
                <div className="card">
                    <h5>Valor Total Investido</h5>
                    R$ {valorTotalInvestido.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                </div>
                <div className="card">
                    <h5>Ganho Líquido</h5>
                    R$ {ganhoLiquido.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                </div>
            </div>
            <div className='grafico'>oi</div>
        </div>
    )
}

export default SimulationResult;