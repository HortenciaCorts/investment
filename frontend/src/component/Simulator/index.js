import { useState } from 'react';
import iconInfo from '../../assets/info.svg';
import getApi from '../../server';
import SimulationResult from '../SimulationResult';
import './styles.css'

const Simulator = () => {
    const [valueCdi, setValueCdi] = useState('');
    const [valueIpca, setValueIpca] = useState('');

    const [simulacoes, setSimulacoes] = useState('');
    const [tipoRendimento, setTipoRendimento] = useState('bruto');
    const [tipoIndexacao, setTipoIndexacao] = useState('pre');

    const getInfo = async (resources) => {
        const response = await getApi(resources);
        if (resources === 'indicadores') {
            setValueCdi(response[0].valor);
            setValueIpca(response[1].valor);
        } else if (resources === 'simulacoes') {
            setSimulacoes(response);
        }
    }
    getInfo('indicadores')

    const handleTypeRend = {
        typeBruto() {
            setTipoRendimento('bruto');
            document.querySelector('.typeBruto').classList.add('active');
            document.querySelector('.typeLiquido').classList.remove('active');
        },
        typeLiquido() {
            setTipoRendimento('liquido');
            document.querySelector('.typeLiquido').classList.add('active');
            document.querySelector('.typeBruto').classList.remove('active');
        }
    }
    const handleTypeIndex = {
        typePre() {
            setTipoIndexacao('pre');
            document.querySelector('.typePre').classList.add('active');
            document.querySelector('.typePos').classList.remove('active');
            document.querySelector('.typeFix').classList.remove('active');
        },
        typePos() {
            setTipoIndexacao('pos');
            document.querySelector('.typePos').classList.add('active');
            document.querySelector('.typePre').classList.remove('active');
            document.querySelector('.typeFix').classList.remove('active');
        },
        typeFix() {
            setTipoIndexacao('ipca');
            document.querySelector('.typeFix').classList.add('active');
            document.querySelector('.typePos').classList.remove('active');
            document.querySelector('.typePre').classList.remove('active');
        },
    }

    const limparCampos = () => {
        document.querySelector('form').reset()
    }

    const simular = (e) => {
        e.preventDefault();
        getInfo('simulacoes');
    }

    const formatarInputs = (idName) => {
        var elemento = document.getElementById(idName);
        var valor = elemento.value;

        valor = parseInt(valor.replace(/[\D]+/g, ''));
        valor = valor + '';

        if (idName === 'aporteInicial' || idName === 'aporteMensal') {
            valor = valor.replace(/([0-9]{2})$/g, ",$1");

            if (valor.length > 6) {
                valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
            }
        }

        idName === 'rentabilidade' ? elemento.value = valor + '%' : elemento.value = valor;
        if (valor === 'NaN') elemento.value = '';
    }

    return (
        <div className='containerInfos'>
            <div className="containerSimulator">
                <h3>Simulador</h3>
                <div className='infos'>
                    <form>
                        <div className='tipos'>
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
                        </div>
                        <div className='tipos'>
                            <label>Aporte Inicial
                                <span>R$<input type="text" maxLength="9" id="aporteInicial" onChange={e => formatarInputs('aporteInicial')} /></span>
                            </label>
                            <label>Aporte Mensal
                                <span>R$<input type="text" maxLength="9" id="aporteMensal" onChange={e => formatarInputs('aporteMensal')} /></span>
                            </label>
                        </div>
                        <div className='tipos'>
                            <label>Prazo em meses
                                <input type="text" id="prazoMeses" onChange={e => formatarInputs('prazoMeses')} />
                            </label>
                            <label>Rentabilidade
                                <input type="text" id="rentabilidade" onKeyUp={e => formatarInputs('rentabilidade')} />
                            </label>
                        </div>
                        <div className='tipos'>
                            <label>IPCA (ao ano)
                                <input type="text" value={valueIpca + '%'} readOnly />
                            </label>
                            <label>CDI (ao ano)
                                <input type="text" value={valueCdi + '%'} readOnly />
                            </label>
                        </div>
                        <div className='tipos'>
                            <button onClick={limparCampos}>Limpar campos</button>
                            <button className='active' onClick={e => simular(e)}>Simular</button>
                        </div>
                    </form>
                </div>
            </div>
            {simulacoes !== '' &&
                <SimulationResult simulacoes={simulacoes}
                    tipoIndexacao={tipoIndexacao} tipoRendimento={tipoRendimento} />}
        </div>
    )
}

export default Simulator;