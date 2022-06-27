import React, { Component } from 'react';
import '../css/ourstrap.css';
import '../css/style.css';
import whatsapp from '../imgs/whatsapp.png'
import instagram from '../imgs/instagram.png'
import youtube from '../imgs/youtube.png'
import vivareal from '../imgs/vivareal.png'

class Footer extends Component {
    render() {
        return (
            <footer className="d-flex flex-row justify-content-between p-5">
                <div className="d-flex flex-row p-3">
                    <p>+55 34 99928-4080</p>
                    <a href="">
                        <img src={whatsapp} className="imgfooter" />
                    </a>
                </div>
                <div className="d-flex flex-row col-4">
                    <p>Viva Real</p>
                    <a href="">
                        <img src={vivareal} alt="" className="imgfooter" />
                    </a>
                </div>
                <div className="d-flex flex-row col-4">
                    <p>Redes Sociais</p>
                    <a href="">
                        <img src={instagram} alt="" className="imgfooter" />
                    </a>
                    <a href="">
                        <img src={youtube} alt="" className="imgfooter" />
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer;