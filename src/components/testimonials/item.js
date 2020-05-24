import React from "react"
import Image from 'gatsby-image'

const Item = ({ image, link, children }) => {
  return (
    <div className="col-6 col-lg-3">
      <a href={link} className="single-testimonial card text-white">
        <Image
          fluid={image}
          className="card-img"
          alt="testimonails"
        />
        <div className="card-img-overlay">
          {children}
        </div>
      </a>
    </div>
  )
}

export default Item
