import React from "react"

const Feature = ({ imgSrc, children, rightToLeft = false }) => {
  return (
    <section className="section feature">
      <div className="container">
        <div className="row align-items-center">
          <div className={`cl-12 col-lg-5 ${rightToLeft ? 'ml' : 'mr'}-lg-auto text-center text-lg-left ${rightToLeft && 'order-lg-2'}`}>
            {children}
          </div>
          <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src={imgSrc}
              alt="feature"
              className="img-fluid feature-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
