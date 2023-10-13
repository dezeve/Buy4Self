import React from 'react';
import Layout from '../layout/Layout';

const ForgotPassword = () => {
    return <Layout>
        <section class="vh-60">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-2-strong">
                    <div class="card-body p-5 text-center">

                        <h3 class="mb-5">Password reset</h3>
                        
                        <label class="form-label">Enter your email for verification</label>
                        <div class="form-outline mb-4">
                        <input type="email" class="form-control form-control-lg" />
                        </div>
                        <button class="btn btn-primary btn-lg btn-block" type="submit">Submit</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    </Layout>;
};

export default ForgotPassword;