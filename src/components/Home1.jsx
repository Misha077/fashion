import React from "react";
import Pagination from "./Pagination";
import Slider from "./Slider";
import { useEffect } from "react";
import $ from "jquery";

function Home1() {
  useEffect(() => {
    const script = document.createElement("script");
    
    script.src = "js/script.js";
   script.src = "plugins/jQuery/jquery.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      {" "}
      <>
        <meta charSet="utf-8" />
        <title>Fashion</title>
        {/* mobile responsive meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        {/* theme meta */}
        <meta name="theme-name" content="fasion" />
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

        {/* <Slider /> */}
        {/* featured post */}
        <section>
          <div className="container-fluid p-sm-0">
            <div className="row featured-post-slider">
              <div className="col-lg-3 col-sm-6 mb-2 mb-lg-0 px-1">
                <article className="card bg-dark text-center text-white border-0 rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid w-100"
                    src="images/featured-post/post-1.jpg"
                    alt="post-thumb"
                  />
                  <div className="card-img-overlay">
                    <div className="card-content">
                      <p className="text-uppercase">LifeStyle</p>
                      <h4 className="card-title mb-4">
                        <a className="text-white" href="blog-single.html">
                          Organize Your Life With 10 Simple rule
                        </a>
                      </h4>
                      <a
                        className="btn btn-outline-light"
                        href="blog-single.html"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-lg-3 col-sm-6 mb-2 mb-lg-0 px-1">
                <article className="card bg-dark text-center text-white border-0 rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid w-100"
                    src="images/featured-post/post-2.jpg"
                    alt="post-thumb"
                  />
                  <div className="card-img-overlay">
                    <div className="card-content">
                      <p className="text-uppercase">Philosophy</p>
                      <h4 className="card-title mb-4">
                        <a className="text-white" href="blog-single.html">
                          Organize Your Life With 10 Simple rule
                        </a>
                      </h4>
                      <a
                        className="btn btn-outline-light"
                        href="blog-single.html"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-lg-3 col-sm-6 mb-2 mb-lg-0 px-1">
                <article className="card bg-dark text-center text-white border-0 rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid w-100"
                    src="images/featured-post/post-3.jpg"
                    alt="post-thumb"
                  />
                  <div className="card-img-overlay">
                    <div className="card-content">
                      <p className="text-uppercase">Fashion</p>
                      <h4 className="card-title mb-4">
                        <a className="text-white" href="blog-single.html">
                          Organize Your Life With 10 Simple rule
                        </a>
                      </h4>
                      <a
                        className="btn btn-outline-light"
                        href="blog-single.html"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-lg-3 col-sm-6 mb-2 mb-lg-0 px-1">
                <article className="card bg-dark text-center text-white border-0 rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid w-100"
                    src="images/featured-post/post-4.jpg"
                    alt="post-thumb"
                  />
                  <div className="card-img-overlay">
                    <div className="card-content">
                      <p className="text-uppercase">Article</p>
                      <h4 className="card-title mb-4">
                        <a className="text-white" href="blog-single.html">
                          Organize Your Life With 10 Simple rule
                        </a>
                      </h4>
                      <a
                        className="btn btn-outline-light"
                        href="blog-single.html"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                </article>
              </div>
              {/* <div className="col-lg-3 col-sm-6 mb-2 mb-lg-0 px-1">
                <article className="card bg-dark text-center text-white border-0 rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid w-100"
                    src="images/featured-post/post-5.jpg"
                    alt="post-thumb"
                  />
                  <div className="card-img-overlay">
                    <div className="card-content">
                      <p className="text-uppercase">Nature</p>
                      <h4 className="card-title mb-4">
                        <a className="text-white" href="blog-single.html">
                          Organize Your Life With 10 Simple rule
                        </a>
                      </h4>
                      <a
                        className="btn btn-outline-light"
                        href="blog-single.html"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                </article>
              </div> */}
            </div>
          </div>
        </section>
        {/* /featured post */}
        {/* blog post */}
        <section className="section">
          <div className="container">
            <div className="row masonry-container">
              <div className="col-lg-4 col-sm-6 mb-5">
                <script src="plugins/smooth-scroll/smooth-scroll.js"></script>
                <article className="text-center">
                  <img
                    className="img-fluid mb-4"
                    src="images/masonary-post/post-1.jpg"
                    alt="post-thumb"
                  />
                  <p className="text-uppercase mb-2">TRAVEL</p>
                  <h4 className="title-border">
                    <a className="text-dark" href="blog-single.html">
                      Charming Evening Field
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a href="blog-single.html" className="btn btn-transparent">
                    read more
                  </a>
                </article>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <article className="text-center">
                  <img
                    className="img-fluid mb-4"
                    src="images/masonary-post/post-2.jpg"
                    alt="post-thumb"
                  />
                  <p className="text-uppercase mb-2">TRAVEL</p>
                  <h4 className="title-border">
                    <a className="text-dark" href="blog-single.html">
                      Charming Evening Field
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a href="blog-single.html" className="btn btn-transparent">
                    read more
                  </a>
                </article>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <article className="text-center">
                  <img
                    className="img-fluid mb-4"
                    src="images/masonary-post/post-3.jpg"
                    alt="post-thumb"
                  />
                  <p className="text-uppercase mb-2">TRAVEL</p>
                  <h4 className="title-border">
                    <a className="text-dark" href="blog-single.html">
                      Charming Evening Field
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a href="blog-single.html" className="btn btn-transparent">
                    read more
                  </a>
                </article>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <article className="text-center">
                  <img
                    className="img-fluid mb-4"
                    src="images/masonary-post/post-4.jpg"
                    alt="post-thumb"
                  />
                  <p className="text-uppercase mb-2">TRAVEL</p>
                  <h4 className="title-border">
                    <a className="text-dark" href="blog-single.html">
                      Charming Evening Field
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a href="blog-single.html" className="btn btn-transparent">
                    read more
                  </a>
                </article>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <article className="text-center">
                  <img
                    className="img-fluid mb-4"
                    src="images/masonary-post/post-5.jpg"
                    alt="post-thumb"
                  />
                  <p className="text-uppercase mb-2">TRAVEL</p>
                  <h4 className="title-border">
                    <a className="text-dark" href="blog-single.html">
                      Charming Evening Field
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a href="blog-single.html" className="btn btn-transparent">
                    read more
                  </a>
                </article>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <article className="text-center">
                  <img
                    className="img-fluid mb-4"
                    src="images/masonary-post/post-6.jpg"
                    alt="post-thumb"
                  />
                  <p className="text-uppercase mb-2">TRAVEL</p>
                  <h4 className="title-border">
                    <a className="text-dark" href="blog-single.html">
                      Charming Evening Field
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a href="blog-single.html" className="btn btn-transparent">
                    read more
                  </a>
                </article>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <article className="text-center">
                  <img
                    className="img-fluid mb-4"
                    src="images/masonary-post/post-7.jpg"
                    alt="post-thumb"
                  />
                  <p className="text-uppercase mb-2">TRAVEL</p>
                  <h4 className="title-border">
                    <a className="text-dark" href="blog-single.html">
                      Charming Evening Field
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a href="blog-single.html" className="btn btn-transparent">
                    read more
                  </a>
                </article>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <article className="text-center">
                  <img
                    className="img-fluid mb-4"
                    src="images/masonary-post/post-8.jpg"
                    alt="post-thumb"
                  />
                  <p className="text-uppercase mb-2">TRAVEL</p>
                  <h4 className="title-border">
                    <a className="text-dark" href="blog-single.html">
                      Charming Evening Field
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a href="blog-single.html" className="btn btn-transparent">
                    read more
                  </a>
                </article>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <article className="text-center">
                  <img
                    className="img-fluid mb-4"
                    src="images/masonary-post/post-9.jpg"
                    alt="post-thumb"
                  />
                  <p className="text-uppercase mb-2">TRAVEL</p>
                  <h4 className="title-border">
                    <a className="text-dark" href="blog-single.html">
                      Charming Evening Field
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a href="blog-single.html" className="btn btn-transparent">
                    read more
                  </a>
                </article>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <article className="text-center">
                  <img
                    className="img-fluid mb-4"
                    src="images/masonary-post/post-10.jpg"
                    alt="post-thumb"
                  />
                  <p className="text-uppercase mb-2">TRAVEL</p>
                  <h4 className="title-border">
                    <a className="text-dark" href="blog-single.html">
                      Charming Evening Field
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a href="blog-single.html" className="btn btn-transparent">
                    read more
                  </a>
                </article>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <article className="text-center">
                  <img
                    className="img-fluid mb-4"
                    src="images/masonary-post/post-11.jpg"
                    alt="post-thumb"
                  />
                  <p className="text-uppercase mb-2">TRAVEL</p>
                  <h4 className="title-border">
                    <a className="text-dark" href="blog-single.html">
                      Charming Evening Field
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a href="blog-single.html" className="btn btn-transparent">
                    read more
                  </a>
                </article>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <article className="text-center">
                  <img
                    className="img-fluid mb-4"
                    src="images/masonary-post/post-13.jpg"
                    alt="post-thumb"
                  />
                  <p className="text-uppercase mb-2">TRAVEL</p>
                  <h4 className="title-border">
                    <a className="text-dark" href="blog-single.html">
                      Charming Evening Field
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a href="blog-single.html" className="btn btn-transparent">
                    read more
                  </a>
                </article>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <article className="text-center">
                  <img
                    className="img-fluid mb-4"
                    src="images/masonary-post/post-12.jpg"
                    alt="post-thumb"
                  />
                  <p className="text-uppercase mb-2">TRAVEL</p>
                  <h4 className="title-border">
                    <a className="text-dark" href="blog-single.html">
                      Charming Evening Field
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <a href="blog-single.html" className="btn btn-transparent">
                    read more
                  </a>
                </article>
              </div>
            </div>
            <Pagination />
          </div>
        </section>
      </>
    </div>
  );
}

export default Home1;
