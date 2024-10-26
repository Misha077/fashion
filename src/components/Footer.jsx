import React from 'react'

function Footer() {
  return (
    <div>
      {/* /instagram */}
      <footer className="bg-secondary">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                <a href="index.html">
                  <img
                    src="images/logo1.avif"
                    width="105"
                    alt="fashion"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                <h6>Address</h6>
                <ul className="list-unstyled">
                  <li className="font-secondary text-dark">Sydney</li>
                  <li className="font-secondary text-dark">
                    6 rip carl Avenue CA 90733
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                <h6>Contact Info</h6>
                <ul className="list-unstyled">
                  <li className="font-secondary text-dark">
                    Tel: +90 000 333 22
                  </li>
                  <li className="font-secondary text-dark">
                    Mail: exmaple@ymail.com
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                <h6>Follow</h6>
                <ul className="list-inline d-inline-block">
                  <li className="list-inline-item">
                    <a href="https://facebook.com/login/" className="text-dark">
                      <i className="ti-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/" className="text-dark">
                      <i className="ti-twitter-alt" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://in.linkedin.com/" className="text-dark">
                      <i className="ti-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://github.com/" className="text-dark">
                      <i className="ti-github" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pb-3">
          <p className="mb-0">
            Copyright © a theme by{" "}
            <a href="https://world-one.vercel.app/">world-one</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer