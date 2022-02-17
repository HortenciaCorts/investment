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

    const arrayGrafico = [];
    const height = [];
    let size = 20;
    for (let i = 0; i < 18; i++) {
        arrayGrafico.push(i)
        size += 8
        height.push(size);
    }
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
            <div className='containerProjecao'>
                <h5>Projeção de valores</h5>
                <div className='grafico'>
                <div>
                    <small>Valor (R$)</small>
                </div>
                    <div>
                        {arrayGrafico.map((el, i) => (
                            <div className='cardOrange' key={i} style={{height: `${height[i]}px`}} ></div>
                        ))}
                    </div>
                    <div>
                        {arrayGrafico.map(i => (
                            <div className='cardBlack' key={i}></div>
                        ))}
                    </div>
                    <div className='graficoNumber'>

                        {arrayGrafico.map(i => (
                            <span key={i}>{(i)}</span>
                        ))}
                    </div>
                    <small>Tempo (meses)</small>
                    <div className='aportType'>
                        <span>
                            <div className='colorOrange'></div>
                            <p>Com aporte</p>
                        </span>
                        <span>
                            <div className='colorBlack'></div>
                            <p>Sem aporte</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimulationResult;