import React from 'react';
import Layout from '../layout/Layout';

const Contact = () => {
    return (
    <Layout>
        <div class="p-3 card shadow-2-strong w-75 d-flex m-auto">
            <div class="row">
                <div class="col-lg-6 col-sm-12 d-flex align-items-center justify-content-center">
                    <img style={{height:"650px"}} className='rounded img-fluid' src="https://images.unsplash.com/photo-1495129532087-1456841824ed?auto=format&fit=crop&q=80&w=1954&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sale" />
                </div>
                <div class="col-lg-6 col-sm-12">
                    <form>
                        <h3 class="mb-4 mt-4 text-center">Contact us</h3>
                            <div class="form-group">
                                <label class="mb-2">Email address</label>
                                <input type="email" class="form-control" placeholder="name@example.com" />
                            </div>
                            <div class="form-group mt-4">
                                <label class="mb-2">Subject</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="form-group mt-4">
                                <label class="mb-2">Message</label>
                                <textarea class="form-control" rows="10"></textarea>
                            </div>
                        <div className='d-grid'>
                            <button type="submit" class="btn btn-primary mb-2 mt-4">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
    );
};

export default Contact;