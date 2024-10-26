import React from 'react'

function Contact() {
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
        
    
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="mb-4">Contact Us</h2>
                <img
                  src="images/contact.jpg"
                  alt="author"
                  className="img-fluid w-100 mb-4"
                />
                <p className="mb-5">
                  Strikes the upper surface of the impenetrable foliage of my
                  trees, and but a few stray gleams steal into the inner
                  sanctuary, I throw myself down among the tall grass by the
                  trickling stream and, as I lie close to the earth, a thousand
                  unknown plants are noticed by me.
                  <br />
                  <br />
                  When I hear the buzz of the little world among the stalks, and
                  grow familiar with the countless indescribable forms of the
                  insects and flies, then I feel the presence of the Almighty,
                  who formed us in his own image, and the breath of that
                  universal love which bears and sustains.
                </p>
                <form action="#" className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control mb-4"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      className="form-control mb-4"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control mb-4"
                      placeholder="Message..."
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
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
        
      </>
    </div>
  );
}

export default Contact