import React from 'react'

const Package = ({ heading, price, b1, b2, b3, b4, popular }) => {
  return (
    <div>
      <div>{heading}</div>
      <div>€{price}</div>
      <button>select package</button>
      <ul>
        {b1 && <li>{b1}</li>}
        {b2 && <li>{b2}</li>}
        {b3 && <li>{b3}</li>}
        {b4 && <li>{b4}</li>}
        {popular && <div>most popular</div>}
      </ul>
    </div>
  )
}

export default Package
