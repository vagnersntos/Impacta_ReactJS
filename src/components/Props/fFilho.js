import React from 'react';

function FuncFilho (props) {
    return (
        <div>
            <h2>Componente Função Filho!</h2>
            {props.dados}
        </div>
    );
}

export default FuncFilho;
