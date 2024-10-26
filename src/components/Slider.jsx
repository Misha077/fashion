import React from 'react'

function Slider() {
  return (
    <div>
      <link href="css/style1.css" rel="stylesheet" />
      {/* Slider start */}
      <div className="slider">
        <figure>
          <div className="slide">
            <img
              src="images/featured-post/post-1.jpg"
              alt=""
              align="left"
              height={400}
              width={500}
            />
          </div>
          <div className="slide">
            <img
              src="images/featured-post/post-2.jpg"
              alt=""
              align="left"
              height={400}
              width={500}
            />
          </div>
          <div className="slide">
            <img
              src="images/featured-post/post-3.jpg"
              alt=""
              align="left"
              height={400}
              width={500}
            />
          </div>
          <div className="slide">
            <img
              src="images/featured-post/post-4.jpg"
              alt=""
              align="left"
              height={400}
              width={500}
            />
          </div>
          <div className="slide">
            <img
              src="images/featured-post/post-1.jpg"
              alt=""
              align="left"
              height={400}
              width={500}
            />
          </div>
        </figure>
      </div>
      {/* End Slider */}
    </div>
  );
}

export default Slider