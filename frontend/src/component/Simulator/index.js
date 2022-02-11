import iconInfo from '../../assets/info.svg';
import './styles.css'

const Simulator = () => {
    return (
        <div className="container">
            <h1>Simulador de Investimentos</h1>
            <h3>Simulador</h3>
            <div className='infos'>
                <div className='form'>
                    <div>
                        <p>
                            Rendimento
                            <img src={iconInfo} alt="" />
                        </p>
                        <div className='selectButton'>
                            <div className='active'>Bruto</div>
                            <div>Líquido</div>
                        </div>
                    </div>
                    <label>Aporte Inicial
                        <input type="number" />
                    </label>
                    <label>Prazo em meses
                        <input type="number" />
                    </label>
                    <label>IPCA (ao ano)
                        <input type="number" />
                    </label>
                    <button>Limpar campos</button>
                </div>
                <div className='form'>
                    <div>
                        <p>
                            Tipos de indexação
                            <img src={iconInfo} alt="" />
                        </p>
                        <div className='selectButton'>
                            <div>PRÉ</div>
                            <div className='active'>POS</div>
                            <div>FIXADO</div>
                        </div>
                    </div>
                    <label>Aporte Mensal
                        <input type="number" />
                    </label>
                    <label>Rentabilidade
                        <input type="number" />
                    </label>
                    <label>CDI (ao ano)
                        <input type="number" />
                    </label>
                    <button className='active'>Simular</button>
                </div>
            </div>
        </div>
    )
}

export default Simulator;