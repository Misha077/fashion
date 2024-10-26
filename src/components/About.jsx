import React from 'react'

function About() {
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
                <h2 className="mb-4">About Me</h2>
                <img
                  src="images/author.jpg"
                  alt="author"
                  className="img-fluid w-100 mb-4"
                />
                <h3 className="font-weight-light">
                  Hello, I’m <span className="font-weight-bold">John Doe</span>
                </h3>
                <p>
                  Creative UI/UX desingerr how loves to craft beautiful that
                  satisfy users needs the product. A best idea generate for the
                  agency complay smart and elegant design When, while the lovely
                  valley teems with vapour around me, and the meridian sun
                  strikes the upper surface of the impenetrable foliage of my
                  trees, and but a few stray gleams steal into the inner
                  sanctuary, I throw myself down among the tall grass by the
                  trickling stream; and, as I lie close to the earth, a thousand
                  unknown plants are noticed by me.
                  <br />
                  <br /> I hear the buzz of the little world among the stalks,
                  and grow familiar with the countless indescribable forms of
                  the insects and flies, then I feel the presence of the
                  Almighty, who formed us in his own image, and the breath of
                  that universal love which bears and sustains.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem deserunt tempora doloribus non, voluptas dolor?
                  Consequuntur et ad officiis iste, vero natus possimus labore
                  veritatis a eius doloremque. Optio amet quis harum nulla vitae
                  repellat officiis veniam accusamus error hic deleniti in, quas
                  est illum cum natus neque possimus delectus dolore ipsam.
                  Pariatur, ad molestias alias voluptas iusto quam debitis
                  beatae sint similique velit, dicta eos dolorum cumque mollitia
                  officia iure labore voluptatibus. Non at sequi, natus dolores,
                  cum accusamus repudiandae hic blanditiis ipsum possimus qui
                  assumenda quaerat optio ab molestias ipsa iste molestiae
                  dignissimos. Reprehenderit quod totam nostrum nihil.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem deserunt tempora doloribus non, voluptas dolor?
                  Consequuntur et ad officiis iste, vero natus possimus labore
                  veritatis a eius doloremque. Optio amet quis harum nulla vitae
                  repellat officiis veniam accusamus error hic deleniti in, quas
                  est illum cum natus neque possimus delectus dolore ipsam.
                  Pariatur, ad molestias alias voluptas iusto quam debitis
                  beatae sint similique velit, dicta eos dolorum cumque mollitia
                  officia iure labore voluptatibus. Non at sequi, natus dolores,
                  cum accusamus repudiandae hic blanditiis ipsum possimus qui
                  assumenda quaerat optio ab molestias ipsa iste molestiae
                  dignissimos. Reprehenderit quod totam nostrum nihil.
                </p>
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

export default About