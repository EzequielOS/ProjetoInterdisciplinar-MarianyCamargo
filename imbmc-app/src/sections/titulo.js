import React, { Component } from 'react';
import '../css/style.css';
import image from '../imgs/headerfoto.jpeg'

class Titulo extends Component {
    render() {
        return (
            <section>
                <div className="container-xxl position-relative">
                    <img className="img-fluid" src={image} alt="Mariany Camargo acessoria imobiliaria" />
                        <div className="position-absolute top-50 end-0 pe-5">
                            <h1>Mariany Camargo</h1>
                            <h5>Acessoria imobiliária</h5>
                            <h5>CRECI:</h5>
                            <h5>Entender para atender</h5>
                        </div>
                </div>
            </section>
        );
    }
}

export default Titulo;