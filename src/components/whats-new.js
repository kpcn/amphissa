import React from "react"

import cta from '../assets/images/thumb/CTA-1.png'

const Whatsnew = ({ id }) => {
  return (
    <section id={id} className="section CTA bg-light">
      <div class="container">
        <div class="row">
          <div class="col-11 mx-auto">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="box box-shadow text-center text-lg-left">
                  <div class="row align-items-center">
                    <div class="col-12 col-lg-3 px-0 order-lg-2">
                      <img
                        src={cta}
                        class="img-fluid CTA-img rounded"
                        alt="CTA"
                      />
                      <div class="space-sm d-lg-none"></div>
                    </div>
                    <div class="col-12 col-lg-9">
                      <h4>Lorem ipsum dolor urna</h4>
                      <div class="space-sm"></div>
                      <p class="lead">
                        Cras aliquam, urna sed bibendum placerat nunc urna
                        imperdiet est ac laoreet justo dui vel lorem. Nullam at
                        felis.
                      </p>
                      <div class="space-md"></div>
                      <a href="/#" class="text-primary">
                        Read More <i class="fas fa-long-arrow-alt-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="box box-shadow text-center text-lg-left mt-4 mt-lg-0">
                  <div class="row align-items-center">
                    <div class="col-12 col-lg-3 px-0 order-lg-2">
                      <img
                        src={cta}
                        class="img-fluid CTA-img rounded"
                        alt="CTA"
                      />
                      <div class="space-sm d-lg-none"></div>
                    </div>
                    <div class="col-12 col-lg-9">
                      <h4>Lorem ipsum dolor urna</h4>
                      <div class="space-sm"></div>
                      <p class="lead">
                        Cras aliquam, urna sed bibendum placerat nunc urna
                        imperdiet est ac laoreet justo dui vel lorem. Nullam at
                        felis.
                      </p>
                      <div class="space-md"></div>
                      <a href="/#" class="text-primary">
                        Read More <i class="fas fa-long-arrow-alt-right"></i>
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
