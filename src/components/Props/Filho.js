import React, {Component} from 'react';

class Filho extends Component {
    render() {
        return(
            <div>
                Eu sou o Filho!!<br/>
                {this.props.Dados}
            </div>
        );
    }
}

export default Filho;