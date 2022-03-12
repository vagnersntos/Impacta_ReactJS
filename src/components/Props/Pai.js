import React, {Component} from 'react';
import Filho from './Filho';

class Pai extends Component {

    state = {counter: 0};

incrementar = () => {
    this.setState({counter: this.state.counter + 1});
}

decrementar = () => {
    if(this.state.counter > 0){
        this.setState({counter: this.state.counter - 1});
    }
}

render() {
    return (
        <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.incrementar}>incrementar</button>
            <button onClick={this.decrementar}>decrementar</button>
           {/* <Filho Dados = "Estou Recebendo dados pelo Pai!!!"/> */}
        </div>
    );
}
}

export default Pai;