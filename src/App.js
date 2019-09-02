import React, { Component, Fragment } from 'react';

import './normalize.css';
import './skeleton.css';

import Formulario from './componentes/Formulario';
import { calcularTotal } from './helpers';
import Resultado from './componentes/Resultado';

class App extends Component {
	state = {
		total: '',
		cantidad: '',
		plazo: ''
	};

	datosPrestamo = (cantidad, plazo) => {
		const total = calcularTotal(cantidad, plazo);

		// Colocar el resultado en el state junto a la cantidad y el plazo
		this.setState({
			total,
			cantidad,
			plazo
		});
	};

	render() {
		const { total, plazo, cantidad } = this.state;
		return (
			<Fragment>
				<h1>Cotizador de Prestamos</h1>
				<div className="container">
					<Formulario datosPrestamo={this.datosPrestamo} />

					<div className="mensajes">
						<Resultado total={total} plazo={plazo} cantidad={cantidad} />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default App;
