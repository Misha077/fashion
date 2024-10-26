import React from "react";
import Pagination from "./Pagination"

function Home() {
  return (
    <div>
      <>
        <meta charSet="utf-8" />
        <title>Fashion</title>
        {/* mobile responsive meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        {/* ** Plugins Needed for the Project ** */}
        {/* Bootstrap */}
        <link rel="stylesheet" href="plugins/bootstrap/bootstrap.min.css" />
        {/* slick slider */}
        <link rel="stylesheet" href="plugins/slick/slick.css" />
        {/* themefy-icon */}
        <link rel="stylesheet" href="plugins/themify-icons/themify-icons.css" />
        {/* Main Stylesheet */}
        <link href="css/style.css" rel="stylesheet" />

        <link href="plugins/slick/slick.min.js" />
        {/*Favicon*/}
        <link
          rel="shortcut icon"
          href="images/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
        
        {/* hero area */}
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-end">
                <h1 className="mb-0">Welcome</h1>
                <h2 className="mb-100 title-border-lg">
                  to <i>Jhon Abraham Blog</i>
                </h2>
                <p className="mb-80 mr-5">
                  I’m a Freelance Interactive Art Director based in France.
                  Focusing across branding and identity, digital and print.
                </p>
                <span className="font-secondary text-dark mr-3 mr-sm-5">
                  Follow
                </span>
                <ul className="list-inline d-inline-block mb-5">
                  <li className="list-inline-item mx-3">
                    <a href="#" className="text-dark">
                      <i className="ti-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item mx-3">
                    <a href="#" className="text-dark">
                      <i className="ti-twitter-alt" />
                    </a>
                  </li>
                  <li className="list-inline-item mx-3">
                    <a href="#" className="text-dark">
                      <i className="ti-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item mx-3">
                    <a href="#" className="text-dark">
                      <i className="ti-github" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 text-right">
                <img
                  className="img-fluid"
                  src="images/banner-img.png"
                  alt="banner-image"
                />
              </div>
            </div>
          </div>
        </section>
        {/* /hero area */}
        {/* blog post */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-100">
                <article
                  data-file="articles/b.html"
                  data-target="article"
                  className="article-full-width"
                >
                  <div className="post-image">
                    <img
                      className="img-fluid"
                      src="images/masonary-post/post-2.jpg"
                      alt="post-thumb"
                    />
                  </div>
                  <div className="post-content">
                    <ul className="list-inline d-flex justify-content-between border-bottom post-meta pb-2 mb-4">
                      <li className="list-inline-item">
                        <i className="ti-calendar mr-2" />
                        June 2, 2018
                      </li>
                      <li className="list-inline-item">
                        <i className="ti-alarm-clock mr-2" />
                        <span className="eta">8 min</span> read
                      </li>
                    </ul>
                    <h4 className="mb-4">
                      <a href="blog-single.html" className="text-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </a>
                    </h4>
                    <p className="mb-0 post-summary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a
                      className="btn btn-transparent mb-4"
                      href="blog-single.html"
                    >
                      Continue...
                    </a>
                  </div>
                </article>
              </div>
              <div className="col-12 mb-100">
                <article
                  data-file="articles/b.html"
                  data-target="article"
                  className="article-full-width article-right"
                >
                  <div className="post-image">
                    <img
                      className="img-fluid"
                      src="images/masonary-post/post-3.jpg"
                      alt="post-thumb"
                    />
                  </div>
                  <div className="post-content">
                    <ul className="list-inline d-flex justify-content-between border-bottom post-meta pb-2 mb-4">
                      <li className="list-inline-item">
                        <i className="ti-calendar mr-2" />
                        June 2, 2018
                      </li>
                      <li className="list-inline-item">
                        <i className="ti-alarm-clock mr-2" />
                        <span className="eta">8 min</span> read
                      </li>
                    </ul>
                    <h4 className="mb-4">
                      <a href="blog-single.html" className="text-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </a>
                    </h4>
                    <p className="mb-0 post-summary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a
                      className="btn btn-transparent mb-4"
                      href="blog-single.html"
                    >
                      Continue...
                    </a>
                  </div>
                </article>
              </div>
              <div className="col-12 mb-100">
                <article
                  data-file="articles/b.html"
                  data-target="article"
                  className="article-full-width"
                >
                  <div className="post-image">
                    <img
                      className="img-fluid"
                      src="images/masonary-post/post-4.jpg"
                      alt="post-thumb"
                    />
                  </div>
                  <div className="post-content">
                    <ul className="list-inline d-flex justify-content-between border-bottom post-meta pb-2 mb-4">
                      <li className="list-inline-item">
                        <i className="ti-calendar mr-2" />
                        June 2, 2018
                      </li>
                      <li className="list-inline-item">
                        <i className="ti-alarm-clock mr-2" />
                        <span className="eta">8 min</span> read
                      </li>
                    </ul>
                    <h4 className="mb-4">
                      <a href="blog-single.html" className="text-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </a>
                    </h4>
                    <p className="mb-0 post-summary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a
                      className="btn btn-transparent mb-4"
                      href="blog-single.html"
                    >
                      Continue...
                    </a>
                  </div>
                </article>
              </div>
              <div className="col-12 mb-100">
                <article
                  data-file="articles/b.html"
                  data-target="article"
                  className="article-full-width article-right"
                >
                  <div className="post-image">
                    <img
                      className="img-fluid"
                      src="images/masonary-post/post-5.jpg"
                      alt="post-thumb"
                    />
                  </div>
                  <div className="post-content">
                    <ul className="list-inline d-flex justify-content-between border-bottom post-meta pb-2 mb-4">
                      <li className="list-inline-item">
                        <i className="ti-calendar mr-2" />
                        June 2, 2018
                      </li>
                      <li className="list-inline-item">
                        <i className="ti-alarm-clock mr-2" />
                        <span className="eta">8 min</span> read
                      </li>
                    </ul>
                    <h4 className="mb-4">
                      <a href="blog-single.html" className="text-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </a>
                    </h4>
                    <p className="mb-0 post-summary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a
                      className="btn btn-transparent mb-4"
                      href="blog-single.html"
                    >
                      Continue...
                    </a>
                  </div>
                </article>
              </div>
              <div className="col-12 mb-100">
                <article
                  data-file="articles/b.html"
                  data-target="article"
                  className="article-full-width"
                >
                  <div className="post-image">
                    <img
                      className="img-fluid"
                      src="images/masonary-post/post-6.jpg"
                      alt="post-thumb"
                    />
                  </div>
                  <div className="post-content">
                    <ul className="list-inline d-flex justify-content-between border-bottom post-meta pb-2 mb-4">
                      <li className="list-inline-item">
                        <i className="ti-calendar mr-2" />
                        June 2, 2018
                      </li>
                      <li className="list-inline-item">
                        <i className="ti-alarm-clock mr-2" />
                        <span className="eta">8 min</span> read
                      </li>
                    </ul>
                    <h4 className="mb-4">
                      <a href="blog-single.html" className="text-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </a>
                    </h4>
                    <p className="mb-0 post-summary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a
                      className="btn btn-transparent mb-4"
                      href="blog-single.html"
                    >
                      Continue...
                    </a>
                  </div>
                </article>
              </div>
              <div className="col-12 mb-100">
                <article
                  data-file="articles/b.html"
                  data-target="article"
                  className="article-full-width article-right"
                >
                  <div className="post-image">
                    <img
                      className="img-fluid"
                      src="images/masonary-post/post-1.jpg"
                      alt="post-thumb"
                    />
                  </div>
                  <div className="post-content">
                    <ul className="list-inline d-flex justify-content-between border-bottom post-meta pb-2 mb-4">
                      <li className="list-inline-item">
                        <i className="ti-calendar mr-2" />
                        June 2, 2018
                      </li>
                      <li className="list-inline-item">
                        <i className="ti-alarm-clock mr-2" />
                        <span className="eta">8 min</span> read
                      </li>
                    </ul>
                    <h4 className="mb-4">
                      <a href="blog-single.html" className="text-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </a>
                    </h4>
                    <p className="mb-0 post-summary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a
                      className="btn btn-transparent mb-4"
                      href="blog-single.html"
                    >
                      Continue...
                    </a>
                  </div>
                </article>
              </div>
            </div>
           
          </div>
        </section>
        {/* /blog post */}
        {/* instagram */}
        <section>
          <div className="container-fluid px-0">
            <div
              className="row no-gutters instagram-slider"
              id="instafeed"
              data-userid={4044026246}
              data-accesstoken="4044026246.1677ed0.8896752506ed4402a0519d23b8f50a17"
            />
          </div>
        </section>
       <Pagination/>
      </>
    </div>
  );
}

export default Home;
