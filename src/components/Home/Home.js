import React, { useEffect, useState } from "react"
import { getRentals } from "../../services/getRentals"
import Property from "../Property/Property"

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    let mounted = true
    getRentals().then((response) => {
      if (mounted) {
        setData(response.data)
      }
    })
    return () => (mounted = false)
  }, [])

  return (
    <div className="property-wrapper">
      <h1>Home</h1>
      <section className="container">
        <div className="row">
          <div className="col-12">
            <div className="no-gutters position-relative row">
              {data?.properties?.map((property) => {
                return <Property key={property.id} property={property} />
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
