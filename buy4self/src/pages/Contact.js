import React from 'react';
import Layout from '../layout/Layout';

const Contact = () => {
    return (
    <Layout>
        <div class="d-flex justify-content-center align-items-center">
            <form class="card shadow-2-strong w-50 p-3">
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
                        <textarea class="form-control" rows="5"></textarea>
                    </div>
                <button type="submit" class="btn btn-primary mb-2 mt-4">Submit</button>
            </form>
        </div>
    </Layout>
    );
};

export default Contact;