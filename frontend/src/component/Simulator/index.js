import { useState } from 'react';
import iconInfo from '../../assets/info.svg';
import './styles.css'

const Simulator = () => {
    const [valueIpca, setValueIpca] = useState('');
    const [valueCdi, setValueCdi] = useState('');

    const getBack = async (resources) => {
        const api = await fetch(`http://localhost:3000/${resources}`);
        const response = await api.json();
        console.log(response)
        if(resources === 'indicadores'){
            setValueCdi(response[0].valor);
            setValueIpca(response[1].valor);
        }
        if(resources === 'simulações'){
        }
    }
    getBack('indicadores')
    getBack('simulacoes')
    
    const handleTypeRend = {
        typeBruto(){
            document.querySelector('.typeBruto').classList.add('active');
            document.querySelector('.typeLiquido').classList.remove('active');
        },
        typeLiquido(){
            document.querySelector('.typeLiquido').classList.add('active');
            document.querySelector('.typeBruto').classList.remove('active');
        }
    }
    const handleTypeIndex = {
        typePre(){
            document.querySelector('.typePre').classList.add('active');
            document.querySelector('.typePos').classList.remove('active');
            document.querySelector('.typeFix').classList.remove('active');
        },
        typePos(){
            document.querySelector('.typePos').classList.add('active');
            document.querySelector('.typePre').classList.remove('active');
            document.querySelector('.typeFix').classList.remove('active');
        },
        typeFix(){
            document.querySelector('.typeFix').classList.add('active');
            document.querySelector('.typePos').classList.remove('active');
            document.querySelector('.typePre').classList.remove('active');
        },
    }
    return (
        <div className="containerSimulator">
            <h3>Simulador</h3>
            <div className='infos'>
                <div className='form'>
                    <div>
                        <p>
                            Rendimento
                            <img src={iconInfo} alt="Icone de Informação" />
                        </p>
                        <div className='selectButton'>
                            <div className='typeBruto active' onClick={handleTypeRend.typeBruto}>Bruto</div>
                            <div className='typeLiquido' onClick={handleTypeRend.typeLiquido}>Líquido</div>
                        </div>
                    </div>
                    <label>Aporte Inicial
                    <span>R$<input type="number" /></span>
                    </label>
                    <label>Prazo em meses
                        <input type="number" />
                    </label>
                    <label>IPCA (ao ano)
                        <input type="text" value={valueIpca + '%'} />
                    </label>
                    <button>Limpar campos</button>
                </div>
                <div className='form'>
                    <div>
                        <p>
                            Tipos de indexação
                            <img src={iconInfo} alt="Icone de Informação" />
                        </p>
                        <div className='selectButton'>
                            <div className='typePre active' onClick={handleTypeIndex.typePre}>PRÉ</div>
                            <div className='typePos' onClick={handleTypeIndex.typePos}>POS</div>
                            <div className='typeFix' onClick={handleTypeIndex.typeFix}>FIXADO</div>
                        </div>
                    </div>
                    <label>Aporte Mensal
                        <span>R$<input type="number" /></span>
                    </label>
                    <label>Rentabilidade
                        <input type="number" />
                    </label>
                    <label>CDI (ao ano)
                        <input type="text" value={valueCdi + '%'} />
                    </label>
                    <button className='active'>Simular</button>
                </div>
            </div>
        </div>
    )
}

export default Simulator;