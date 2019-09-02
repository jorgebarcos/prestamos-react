import React, { Component, Fragment } from 'react';

import './normalize.css';
import './skeleton.css';

import Formulario from './componentes/Formulario';

class App extends Component {
	datosPrestamo = (cantidad, plazo) => {};

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
