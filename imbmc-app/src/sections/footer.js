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
            <footer className="row justify-content-between p-5">
                <div className="pe-5">
                    <div className="col-4">
                    <a href="">
                        <div className="">
                            <img src={whatsapp} className="imgfooter" />
                        </div>
                        <p>+55 34 99928-4080</p>
                    </a>
                    </div>
                </div>
                <div className="col-4">
                    <p>Viva Real</p>
                    <a href="">
                        <div className="">
                            <img src={vivareal} alt="" className="imgfooter"/>
                        </div>
                    </a>
                </div>
                <div className="col-4">
                    <p>Redes Sociais</p>
                    <a href="">
                        <div className="">
                            <img src={instagram} alt="" className="imgfooter"/>
                        </div>
                    </a>
                    <a href="">
                        <div className="">
                            <img src={youtube} alt="" className="imgfooter"/>
                        </div>
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer;