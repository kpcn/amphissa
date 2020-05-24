import React from "react"

import cta from '../assets/images/thumb/CTA-1.png'

const Whatsnew = ({ id }) => {
  return (
    <section id={id} className="section CTA bg-light">
      <div className="container">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="box box-shadow text-center text-lg-left">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-3 px-0 order-lg-2">
                      <img
                        src={cta}
                        className="img-fluid CTA-img rounded"
                        alt="CTA"
                      />
                      <div className="space-sm d-lg-none"></div>
                    </div>
                    <div className="col-12 col-lg-9">
                      <h4>Lorem ipsum dolor urna</h4>
                      <div className="space-sm"></div>
                      <p className="lead">
                        Cras aliquam, urna sed bibendum placerat nunc urna
                        imperdiet est ac laoreet justo dui vel lorem. Nullam at
                        felis.
                      </p>
                      <div className="space-md"></div>
                      <a href="/#" className="text-primary">
                        Read More <i className="fas fa-long-arrow-alt-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="box box-shadow text-center text-lg-left mt-4 mt-lg-0">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-3 px-0 order-lg-2">
                      <img
                        src={cta}
                        className="img-fluid CTA-img rounded"
                        alt="CTA"
                      />
                      <div className="space-sm d-lg-none"></div>
                    </div>
                    <div className="col-12 col-lg-9">
                      <h4>Lorem ipsum dolor urna</h4>
                      <div className="space-sm"></div>
                      <p className="lead">
                        Cras aliquam, urna sed bibendum placerat nunc urna
                        imperdiet est ac laoreet justo dui vel lorem. Nullam at
                        felis.
                      </p>
                      <div className="space-md"></div>
                      <a href="/#" className="text-primary">
                        Read More <i className="fas fa-long-arrow-alt-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Whatsnew
