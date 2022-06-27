import React, { Component } from 'react';
import '../css/ourstrap.css';
import '../css/style.css';
import casas from '../imgs/casaalto.jpg'
import apartamentos from '../imgs/apartamentoalto.jpg'
import terrenos from '../imgs/casaalto.jpg'
import Carousel from 'react-bootstrap/Carousel';


class Imoveis extends Component {
    render() {
        return (

            //carrocel não funciona ainda 
            //1280x720
            <section className="mt-4 mb-4 pb-5 bgcinza">
                <div className="container">
                    <div className="row justify-content-center p-5">
                        <div className="col-md-auto ">
                            <h2>Meu serviço</h2>
                            <h4>(Um serviço personalizado na escolha do seu imovel)</h4>
                        </div>
                    </div>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={casas}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={apartamentos}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h5>Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        );
    }
}

export default Imoveis;