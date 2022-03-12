import React, {useState, useEffect} from 'react';
import FuncFilho from './fFilho'

function FuncPai () {

    const [nome, setNome] = useState('');

    useEffect(() => {setNome('Componente Função!!!')},[nome]);
    
    return (
        <div>
            <h2>{nome}</h2><br/>
            <FuncFilho dados = "Estou recebendo dados do Pai func!!"/>
        </div>
    );
}

export default FuncPai;