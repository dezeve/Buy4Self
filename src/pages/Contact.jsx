import React from 'react';
import Layout from '../layout/Layout';

const Contact = () => {
    return (
        <Layout>
            <div className="p-3 card shadow-2-strong w-75 d-flex mx-auto mt-4" style={{ maxWidth: "500px" }}>
                <div className="row">
                    <div className="col-12 px-4">
                        <form>
                            <h3 className="mb-4 mt-4 text-center fw-bold">Contact us</h3>
                            <div class="form-floating mb-2 mt-4">
                                <input type="email" className="form-control" id="contactEmail" placeholder="email@example.com" />
                                <label htmlFor="registerInputName">Email Address</label>
                            </div>
                            <div class="form-floating mb-2 mt-4">
                                <input type="text" className="form-control" id="contactSubject" placeholder="Subject" />
                                <label htmlFor="registerInputName">Subject</label>
                            </div>
                            <div className="form-group mt-4">
                                <label className="mb-2">Message</label>
                                <textarea className="form-control" rows="5"></textarea>
                            </div>
                            <div>
                                <a href="/"
                                    className="fw-bold btn btn-primary text-white mb-3 mt-4 w-100">
                                    Submit
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;