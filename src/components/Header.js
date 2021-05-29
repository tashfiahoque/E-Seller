import React from 'react'
import img1 from '../components/laura-chouette-2H_8WbVPRxM-unsplash.jpg';
import img2 from '../components/banner1-1350x570.jpg';
import img3 from '../components/banner-1350x570.jpg';
import '../components/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header"> 
            <main style={{ height: '600px' }} className="row d-flex container-fluid justify-content-center align-items-center">
                <div className="col-md-6 text-home offset-md-1">
                    <h1> Welcome To E-Seller.  </h1>
                    <h6>You Want It We Cut It For You</h6>
                    <p className="text-color-p">
                    We are here to provide you the best services. To make your <br />
                    life easier try out our servies and the best facilities.
                       </p>
                    <Link to=''><button className="btn btn-color-home btn-animetion">View Products</button></Link>
                </div>
                <div className="col-md-5 img-home">
                    <div id="carouselExampleCaptions" class="carousel slide  cstm-crsl" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={img1} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={img2} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={img3} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </main>

        </div>
    )
}

export default Header
