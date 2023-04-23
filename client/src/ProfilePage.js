import React from "react";

const ProfilePage = ({ user }) => {
  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container">
          <a className="navbar-brand" href="#">
            Profile Page
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/logout">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Profile Info */}
      <div className="container my-4">
        <div className="row">
          <div className="col-md-4">
            <img
              src={user.photos[0].value}
              alt="Profile Picture"
              className="img-thumbnail"
            />
          </div>
          <div className="col-md-8">
            <p>User Name: {user.displayName}</p>

            <p>User Email: {user.emails[0].value}</p>
            <p>User ID: {user.id}</p>
          </div>
        </div>
      </div>

      {/* Bootstrap Scripts */}
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    </>
  );
};

export default ProfilePage;
