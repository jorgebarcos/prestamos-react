import React, { Component, Fragment } from 'react';

import './normalize.css';
import './skeleton.css';

import Formulario from './componentes/Formulario';
import { calcularTotal } from './helpers';
import Resultado from './componentes/Resultado';
import Mensaje from './componentes/Mensaje';

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

		// cargar un componente condicionalmente
		let componente;
		if (total === '') {
			componente = <Mensaje />;
		} else {
			componente = <Resultado total={total} plazo={plazo} cantidad={cantidad} />;
		}
		return (
			<Fragment>
				<h1>Cotizador de Prestamos</h1>
				<div className="container">
					<Formulario datosPrestamo={this.datosPrestamo} />

					<div className="mensajes" />
					{componente}
				</div>
			</Fragment>
		);
	}
}

export default App;
