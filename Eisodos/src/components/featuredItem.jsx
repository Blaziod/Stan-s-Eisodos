import React from 'react'

function FeaturedItem({eventName, image, date, description}) {
  return (
    <div className='feItem'>
      <div style={{backgroundImage: `url(${image})`}}></div>
      <h3>{eventName}</h3>
      <h4>{date}</h4>
      <p>{description}</p>
        </div>
  )
}

export default FeaturedItem