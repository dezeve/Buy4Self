import React from 'react';
import Layout from '../layout/Layout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import products from "../dummyData/products.json";

const Offers = () => {
    return (
      <Layout>

        <div class="p-5 bg-primary bg-gradient text-white rounded">
            
            <div class="row">
                <div class="col-sm">
                    <h1 class="mb-4">Flash Sales</h1>
                    Integer iaculis sapien quis velit ultricies blandit. Nullam pellentesque porttitor turpis eget sodales. Vivamus eros ligula, convallis at aliquam et, finibus at mi. Phasellus accumsan semper quam eget convallis. Morbi non sem tempus, mollis nibh a, molestie nunc. Nullam ultricies magna ligula, ac tempor magna commodo id. Morbi eget facilisis nulla. Nullam aliquam dui eget neque cursus, volutpat blandit orci pulvinar. Duis eget ullamcorper mauris, vitae luctus massa. Mauris facilisis mi nec augue vulputate, in efficitur purus hendrerit. Mauris auctor lorem vitae leo interdum, vel tincidunt est ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Suspendisse potenti.
                </div>
                <div class="col-sm">
                    <img className='rounded img-fluid' src="https://images.unsplash.com/photo-1583573636246-18cb2246697f?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1938" alt="sale" width="700" height="300" />
                </div>
            </div>
        </div>

        <div className='container my-5'>
            <div className='row'>
                <div className='col-6 fs-3'>
                    Mega Sale
                </div>
                <div className='col-6 text-end'>
                    <a class="btn btn-primary mb-3 mr-1 text-white" href="#carousel" role="button" data-bs-slide="prev">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </a>
                    <a class="btn btn-primary mb-3 text-white" href="#carousel" role="button" data-bs-slide="next">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
                <div class="col-12">
                    <div id="carousel" class="carousel slide" data-ride="carousel">
                        <div className='carousel-inner'>
                            <div className='carousel-item active'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <div className='card'>
                                            <img className='img-fluid' style={{objectFit:"contain"}} src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                            <div class="card-body">
                                                <h4 class="card-title">Lorem Ipsum</h4>
                                                <p class="card-text">Aliquam id bibendum ante. Sed non faucibus mauris.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className='card'>
                                            <img className='img-fluid' style={{objectFit:"contain"}} src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                            <div class="card-body">
                                                <h4 class="card-title">Lorem Ipsum</h4>
                                                <p class="card-text">Aliquam id bibendum ante. Sed non faucibus mauris.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className='card'>
                                            <img className='img-fluid' style={{objectFit:"contain"}} src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                            <div class="card-body">
                                                <h4 class="card-title">Lorem Ipsum</h4>
                                                <p class="card-text">Aliquam id bibendum ante. Sed non faucibus mauris.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className='card'>
                                            <img className='img-fluid' style={{objectFit:"contain"}} src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                            <div class="card-body">
                                                <h4 class="card-title">Lorem Ipsum</h4>
                                                <p class="card-text">Aliquam id bibendum ante. Sed non faucibus mauris.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <div className='card'>
                                            <img className='img-fluid' style={{objectFit:"contain"}} src="https://images.unsplash.com/photo-1564703048291-bcf7f001d83d?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                            <div class="card-body">
                                                <h4 class="card-title">Lorem Ipsum</h4>
                                                <p class="card-text">Aliquam id bibendum ante. Sed non faucibus mauris.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className='card'>
                                            <img className='img-fluid' style={{objectFit:"contain"}} src="https://images.unsplash.com/photo-1564703048291-bcf7f001d83d?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                            <div class="card-body">
                                                <h4 class="card-title">Lorem Ipsum</h4>
                                                <p class="card-text">Aliquam id bibendum ante. Sed non faucibus mauris.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className='card'>
                                            <img className='img-fluid' style={{objectFit:"contain"}} src="https://images.unsplash.com/photo-1564703048291-bcf7f001d83d?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                            <div class="card-body">
                                                <h4 class="card-title">Lorem Ipsum</h4>
                                                <p class="card-text">Aliquam id bibendum ante. Sed non faucibus mauris.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className='card'>
                                            <img className='img-fluid' style={{objectFit:"contain"}} src="https://images.unsplash.com/photo-1564703048291-bcf7f001d83d?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                            <div class="card-body">
                                                <h4 class="card-title">Lorem Ipsum</h4>
                                                <p class="card-text">Aliquam id bibendum ante. Sed non faucibus mauris.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</Layout>
    );
};

export default Offers;