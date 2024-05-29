import React from 'react';
import Layout from '../layout/Layout';

const Contact = () => {
    return (
        <Layout>
            <div className="d-flex mx-auto mt-4" style={{ maxWidth: "400px" }}>
                <div className="row gx-0 w-100 mx-auto">
                    <div className="col-12 col-md-10 w-100">
                        <div className='card shadow-2-strong'>
                            <form className='card-body'>
                                <h3 className="mb-4 mt-4 text-center fw-bold">Contact us</h3>
                                <div class="form-floating mb-2 mt-4">
                                    <input type="email"
                                        className="form-control"
                                        id="contactEmail"
                                        placeholder="email@example.com" />
                                    <label htmlFor="registerInputName">
                                        Email Address
                                    </label>
                                </div>
                                <div class="form-floating mb-2 mt-4">
                                    <input type="text"
                                        className="form-control"
                                        id="contactSubject"
                                        placeholder="Subject" />
                                    <label htmlFor="registerInputName">
                                        Subject
                                    </label>
                                </div>
                                <div className="form-group mt-4">
                                    <label className="mb-2">Message</label>
                                    <textarea className="form-control" rows="5"></textarea>
                                </div>
                                <div>
                                    <a href="/"
                                        className="fw-bold btn btn-primary text-white mb-3 mt-4 w-100"
                                    >
                                        Submit
                                    </a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;