import React from 'react'

function Pagination() {
  return (
    <div>
      {" "}
      <div className="row">
        <div className="col-12">
          <nav>
            <ul className="pagination justify-content-center align-items-center">
              <li className="page-item">
                <span className="page-link">« Previous</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  01
                </a>
              </li>
              <li className="page-item active">
                <span className="page-link">02</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  03
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  04
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  05
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  06
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next »
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination