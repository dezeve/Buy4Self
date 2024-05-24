import React from 'react';
import Layout from '../layout/Layout';

const Contact = () => {
    return (
    <Layout>
        <div className="p-3 card shadow-2-strong w-75 d-flex mx-auto mt-4" style={{ maxWidth: "500px" }}>
            <div className="row">
                <div className="col-12">
                    <form>
                        <h3 className="mb-4 mt-4 text-center">Contact us</h3>
                            <div className="form-group">
                                <label className="mb-2">Email address</label>
                                <input type="email" className="form-control" placeholder="name@example.com" />
                            </div>
                            <div className="form-group mt-4">
                                <label className="mb-2">Subject</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group mt-4">
                                <label className="mb-2">Message</label>
                                <textarea className="form-control" rows="10"></textarea>
                            </div>
                        <div className='d-grid'>
                            <button type="submit" className="btn btn-primary mb-2 mt-4">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
    );
};

export default Contact;