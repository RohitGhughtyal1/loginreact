import React from 'react';

function Login() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container">
          <a className="navbar-brand" href="#">Login Page</a>
        </div>
      </nav>
      <div className="container my-4">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title">Login with Google</h1>
                <p className="card-text">Click the button below to login with your Google account.</p>
                <a href="/google" className="btn btn-primary">
                  <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
                  Login with Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
