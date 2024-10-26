import React from 'react'

function SinglePost() {
  return (
    <div>
      <>
        <link rel="stylesheet" href="plugins/bootstrap/bootstrap.min.css" />
        {/* slick slider */}
        <link rel="stylesheet" href="plugins/slick/slick.css" />
        {/* themefy-icon */}
        <link rel="stylesheet" href="plugins/themify-icons/themify-icons.css" />
        {/* Main Stylesheet */}
        <link href="css/style.css" rel="stylesheet" />
        {/*Favicon*/}
        <link
          rel="shortcut icon"
          href="images/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
       
       
        {/* page-title */}
        <section className="section bg-secondary">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h4>As a Designer, I Refuse to Call People ‘Users’</h4>
              </div>
            </div>
          </div>
        </section>
        {/* /page-title */}
        {/* blog single */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <ul className="list-inline d-flex justify-content-between py-3">
                  <li className="list-inline-item">
                    <i className="ti-user mr-2" />
                    Post by Jhon Abraham
                  </li>
                  <li className="list-inline-item">
                    <i className="ti-calendar mr-2" />
                    June 2, 2018
                  </li>
                </ul>
                <img
                  src="images/post-single.jpg"
                  alt="post-thumb"
                  className="w-100 img-fluid mb-4"
                />
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                    dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                    dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>
                  <blockquote>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum
                  </blockquote>
                  <img
                    src="images/post-img.jpg"
                    alt="image"
                    className="img-fluid"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                    dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="widget search-box">
                  <i className="ti-search" />
                  <input
                    type="search"
                    id="search-post"
                    className="form-control border-0 pl-5"
                    name="search-post"
                    placeholder="Search"
                  />
                </div>
                <div className="widget">
                  <h6 className="mb-4">LATEST POST</h6>
                  <div className="media mb-4">
                    <div className="post-thumb-sm mr-3">
                      <img
                        className="img-fluid"
                        src="images/masonary-post/post-1.jpg"
                        alt="post-thumb"
                      />
                    </div>
                    <div className="media-body">
                      <ul className="list-inline d-flex justify-content-between mb-2">
                        <li className="list-inline-item">Post By Jhon</li>
                        <li className="list-inline-item">June 2, 2018</li>
                      </ul>
                      <h6>
                        <a className="text-dark" href="blog-single.html">
                          Lorem ipsum dolor sit amet, consectetur
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="media mb-4">
                    <div className="post-thumb-sm mr-3">
                      <img
                        className="img-fluid"
                        src="images/masonary-post/post-6.jpg"
                        alt="post-thumb"
                      />
                    </div>
                    <div className="media-body">
                      <ul className="list-inline d-flex justify-content-between mb-2">
                        <li className="list-inline-item">Post By Jhon</li>
                        <li className="list-inline-item">June 2, 2018</li>
                      </ul>
                      <h6>
                        <a className="text-dark" href="blog-single.html">
                          Lorem ipsum dolor sit amet, consectetur
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="media mb-4">
                    <div className="post-thumb-sm mr-3">
                      <img
                        className="img-fluid"
                        src="images/masonary-post/post-3.jpg"
                        alt="post-thumb"
                      />
                    </div>
                    <div className="media-body">
                      <ul className="list-inline d-flex justify-content-between mb-2">
                        <li className="list-inline-item">Post By Jhon</li>
                        <li className="list-inline-item">June 2, 2018</li>
                      </ul>
                      <h6>
                        <a className="text-dark" href="blog-single.html">
                          Lorem ipsum dolor sit amet, consectetur
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="widget">
                  <h6 className="mb-4">TAG</h6>
                  <ul className="list-inline tag-list">
                    <li className="list-inline-item m-1">
                      <a href="blog-single.html">ui ux</a>
                    </li>
                    <li className="list-inline-item m-1">
                      <a href="blog-single.html">developmetns</a>
                    </li>
                    <li className="list-inline-item m-1">
                      <a href="blog-single.html">travel</a>
                    </li>
                    <li className="list-inline-item m-1">
                      <a href="blog-single.html">article</a>
                    </li>
                    <li className="list-inline-item m-1">
                      <a href="blog-single.html">travel</a>
                    </li>
                    <li className="list-inline-item m-1">
                      <a href="blog-single.html">ui ux</a>
                    </li>
                    <li className="list-inline-item m-1">
                      <a href="blog-single.html">article</a>
                    </li>
                    <li className="list-inline-item m-1">
                      <a href="blog-single.html">developmetns</a>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h6 className="mb-4">CATEGORIES</h6>
                  <ul className="list-inline tag-list">
                    <li className="list-inline-item m-1">
                      <a href="blog-single.html">ui ux</a>
                    </li>
                    <li className="list-inline-item m-1">
                      <a href="blog-single.html">developmetns</a>
                    </li>
                    <li className="list-inline-item m-1">
                      <a href="blog-single.html">travel</a>
                    </li>
                    <li className="list-inline-item m-1">
                      <a href="blog-single.html">article</a>
                    </li>
                    <li className="list-inline-item m-1">
                      <a href="blog-single.html">travel</a>
                    </li>
                    <li className="list-inline-item m-1">
                      <a href="blog-single.html">ui ux</a>
                    </li>
                    <li className="list-inline-item m-1">
                      <a href="blog-single.html">article</a>
                    </li>
                    <li className="list-inline-item m-1">
                      <a href="blog-single.html">developmetns</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </>
    </div>
  );
}

export default SinglePost