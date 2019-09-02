import React, { Component, Fragment } from 'react';

import './normalize.css';
import './skeleton.css';

import Formulario from './componentes/Formulario';
import { calcularTotal } from './helpers';

class App extends Component {
	datosPrestamo = (cantidad, plazo) => {
		calcularTotal();
	};

	render() {
		return (
			<Fragment>
				<h1>Cotizador de Prestamos</h1>
				<div className="container">
					<Formulario datosPrestamo={this.datosPrestamo} />
				</div>
			</Fragment>
		);
	}
}

export default App;
