import React from "react"

const Property = ({ property }) => {
  return (
    <div className="mb-3 px-2 col-lg-4">
      <div className="property__item mb-3 text-left">
        <div className="card">
          <img
            className="card-img-top"
            src={property.image}
            alt={property.title}
          />
          <div className="card-body">
            <div className="card-body_price">
              <h5>
                <span className="d-flex" style={{ color: "red" }}>
                  NT$
                  <span className="mr-2">
                    <h4>{parseInt(property.price)}</h4>
                  </span>
                  <span className="text-dark">/ month</span>
                </span>
              </h5>
            </div>
            <div className="card-body_title border-bottom">
              <h5>{property.title}</h5>
              <p className="text-secondary">
                {property.road}, {property.district}, {property.city}
              </p>
            </div>
            <div className="card-body_item my-3">
              <div className="d-block mr-3 mb-2 my-1">
                <span className="pl-2">{property.rooms} Rooms</span>
                <div className="d-flex justify-content-between d-block">
                  <span>MRT: {property.mrt_line}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Property
