import React from 'react';
import Layout from '../layout/Layout';

const Offers = () => {
    return (
    <Layout>
        <div class="p-4 text-white rounded w-100 d-flex m-auto flex-column" style={{backgroundColor:"#d9d9d9"}}>
            <div id="carouselIndicators" class="carousel slide w-75 m-auto mb-5" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1557618159-7d6fe547ae20?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100 rounded" alt="sale" />
                    <div className='carousel-caption d-none d-md-block'>
                        <h5>Flash Sales</h5>
                        <p>Integer iaculis sapien quis velit ultricies blandit. Nullam pellentesque porttitor turpis eget sodales.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070" class="d-block w-100 rounded" alt="sale" />
                    <div className='carousel-caption d-none d-md-block'>
                        <h5>10% Off</h5>
                        <p>Aliquam id bibendum ante. Sed non faucibus mauris. Duis ut sapien finibus, aliquam justo nec, tempus tortor.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1581515286348-98549702050f?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100 rounded" alt="sale" />
                    <div className='carousel-caption d-none d-md-block'>
                        <h5>Super Sale</h5>
                        <p>Etiam nec ligula ut metus dignissim volutpat at sit amet elit. Vestibulum quis pellentesque arcu, vel mattis magna.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1521805103424-d8f8430e8933?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100 rounded" alt="sale" />
                    <div className='carousel-caption d-none d-md-block'>
                        <h5>Buy One Get One</h5>
                        <p> Vestibulum sollicitudin elit eget enim scelerisque, et fringilla metus bibendum. Integer viverra ornare nunc a interdum.</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="d-flex m-auto mb-5 row">
                <div class="card col" style={{backgroundColor:"#8c8c8c"}}>
                    <div class="card-body">
                        <h5 class="card-title">Lorem Ipsum</h5>
                        <p class="card-text">Pellentesque enim tortor, maximus ac mauris sed, tempor condimentum risus. Proin ultrices, erat eu aliquet dapibus, justo magna facilisis nibh, eu gravida ipsum leo accumsan sem. Proin id orci at nibh laoreet venenatis. Vestibulum pretium quis arcu nec accumsan. Nunc in mi dui.</p>
                        <a href="/" class="btn btn-primary">Submit</a>
                    </div>
                </div>
                <div class="card col" style={{backgroundColor:"#8c8c8c"}}>
                    <div class="card-body">
                        <h5 class="card-title">Lorem Ipsum</h5>
                        <p class="card-text">Pellentesque enim tortor, maximus ac mauris sed, tempor condimentum risus. Proin ultrices, erat eu aliquet dapibus, justo magna facilisis nibh, eu gravida ipsum leo accumsan sem. Proin id orci at nibh laoreet venenatis. Vestibulum pretium quis arcu nec accumsan. Nunc in mi dui.</p>
                        <a href="/" class="btn btn-primary">Submit</a>
                    </div>
                </div>
                <div class="card col" style={{backgroundColor:"#8c8c8c"}}>
                    <div class="card-body">
                        <h5 class="card-title">Lorem Ipsum</h5>
                        <p class="card-text">Pellentesque enim tortor, maximus ac mauris sed, tempor condimentum risus. Proin ultrices, erat eu aliquet dapibus, justo magna facilisis nibh, eu gravida ipsum leo accumsan sem. Proin id orci at nibh laoreet venenatis. Vestibulum pretium quis arcu nec accumsan. Nunc in mi dui.</p>
                        <a href="/" class="btn btn-primary">Submit</a>
                    </div>
                </div>
                <div class="card col" style={{backgroundColor:"#8c8c8c"}}>
                    <div class="card-body">
                        <h5 class="card-title">Lorem Ipsum</h5>
                        <p class="card-text">Pellentesque enim tortor, maximus ac mauris sed, tempor condimentum risus. Proin ultrices, erat eu aliquet dapibus, justo magna facilisis nibh, eu gravida ipsum leo accumsan sem. Proin id orci at nibh laoreet venenatis. Vestibulum pretium quis arcu nec accumsan. Nunc in mi dui.</p>
                        <a href="/" class="btn btn-primary">Submit</a>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    );
};

export default Offers;