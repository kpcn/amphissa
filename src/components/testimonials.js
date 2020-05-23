import React from "react"

import clientOne from '../assets/images/client-1.png'
import clientTwo from '../assets/images/client-2.png'
import clientThree from '../assets/images/client-3.png'

const Testimonials = () => {
  return (
    <section className="section testimonials bg-light p-0">
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          <div className="col-6 col-lg-3">
            <a href="/#" className="single-testimonial card text-white">
              <img
                src={clientOne}
                alt="testimonails"
                className="card-img"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Lorem ipsum</h5>
                <p className="card-text">
                  Cras aliquam, urna sed bibendum placerat nunc urna
                </p>
              </div>
            </a>
          </div>
          <div className="col-6 col-lg-3">
            <a href="/#" className="single-testimonial card text-white">
              <img
                src={clientTwo}
                alt="testimonails"
                className="card-img"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Lorem ipsum</h5>
                <p className="card-text">
                  Cras aliquam, urna sed bibendum placerat nunc urna
                </p>
              </div>
            </a>
          </div>
          <div className="col-6 col-lg-3">
            <a href="/#" className="single-testimonial card text-white">
              <img
                src={clientThree}
                alt="testimonails"
                className="card-img"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Lorem ipsum</h5>
                <p className="card-text">
                  Cras aliquam, urna sed bibendum placerat nunc urna
                </p>
              </div>
            </a>
          </div>
          <div className="col-6 col-lg-3">
            <a href="/#" className="single-testimonial card text-white">
              <img
                src={clientTwo}
                alt="testimonails"
                className="card-img"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">Lorem ipsum</h5>
                <p className="card-text">
                  Cras aliquam, urna sed bibendum placerat nunc urna
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
